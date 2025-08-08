#!/bin/bash

# Create a GitHub issue using GITHUB_TOKEN from environment or .env.local
# Usage:
#   ./scripts/create-issue.sh "Title here" "Body here"
#   ./scripts/create-issue.sh --repo owner/repo "Title here" "Body here"

set -euo pipefail

# Load env from .env.local if present
if [ -f .env.local ]; then
  set -a
  source .env.local
  set +a
fi

# Resolve token
GITHUB_TOKEN_TO_USE="${GITHUB_TOKEN:-${GITHUB_PERSONAL_ACCESS_TOKEN:-}}"
if [ -z "${GITHUB_TOKEN_TO_USE}" ]; then
  echo "Error: GITHUB_TOKEN is not set. Add it to .env.local or export it in your shell." >&2
  exit 1
fi

# Parse optional --repo
REPO_ARG=""
if [ "${1:-}" = "--repo" ]; then
  REPO_ARG="$2"
  shift 2
fi

TITLE="${1:-Test issue from script}"
BODY="${2:-Automated test issue created by scripts/create-issue.sh. Safe to close.}"

# Infer owner/repo from git remote if not provided
if [ -z "$REPO_ARG" ]; then
  REMOTE_URL=$(git remote get-url origin 2>/dev/null || true)
  if [ -z "$REMOTE_URL" ]; then
    echo "Error: Could not determine git remote 'origin'. Provide --repo owner/repo." >&2
    exit 1
  fi
  OWNER_REPO=$(echo "$REMOTE_URL" | sed -E 's#(git@github.com:|https://github.com/)##; s#\\.git$##')
else
  OWNER_REPO="$REPO_ARG"
fi

OWNER=$(echo "$OWNER_REPO" | cut -d/ -f1)
REPO=$(echo "$OWNER_REPO" | cut -d/ -f2)
if [ -z "$OWNER" ] || [ -z "$REPO" ]; then
  echo "Error: Could not parse owner/repo from '$OWNER_REPO'" >&2
  exit 1
fi

# Build JSON safely via Python (if available), otherwise fallback
if command -v python3 >/dev/null 2>&1; then
  JSON_PAYLOAD=$(TITLE="$TITLE" BODY="$BODY" python3 - <<'PY'
import json, os
print(json.dumps({"title": os.environ.get("TITLE",""), "body": os.environ.get("BODY","")}))
PY
)
else
  # naive fallback (assumes no quotes in title/body)
  JSON_PAYLOAD=$(printf '{"title":"%s","body":"%s"}' "$TITLE" "$BODY")
fi

RESPONSE=$(echo "$JSON_PAYLOAD" | curl -sS -X POST \
  -H "Authorization: Bearer $GITHUB_TOKEN_TO_USE" \
  -H "Accept: application/vnd.github+json" \
  --data-binary @- \
  "https://api.github.com/repos/$OWNER/$REPO/issues")

# Try to extract number and html_url
if command -v jq >/dev/null 2>&1; then
  NUM=$(echo "$RESPONSE" | jq -r '.number // empty')
  URL=$(echo "$RESPONSE" | jq -r '.html_url // empty')
else
  NUM=$(echo "$RESPONSE" | sed -n 's/.*"number"[[:space:]]*:[[:space:]]*\([0-9][0-9]*\).*/\1/p' | head -n1)
  URL=$(echo "$RESPONSE" | sed -n 's/.*"html_url"[[:space:]]*:[[:space:]]*"\([^"]*\)".*/\1/p' | head -n1)
fi

if [ -n "$NUM" ] && [ -n "$URL" ]; then
  echo "✅ Issue #$NUM creado: $URL"
  exit 0
fi

echo "❌ No se pudo crear el issue. Respuesta de la API:" >&2
# Print a compact error
if command -v jq >/dev/null 2>&1; then
  echo "$RESPONSE" | jq -c '.' >&2
else
  echo "$RESPONSE" >&2
fi
exit 1
