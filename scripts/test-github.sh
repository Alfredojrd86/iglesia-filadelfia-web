#!/bin/bash
set -euo pipefail

# Load env
if [ -f .env.local ]; then
  set -a; source .env.local; set +a
fi

TOKEN="${GITHUB_TOKEN:-${GITHUB_PERSONAL_ACCESS_TOKEN:-}}"
if [ -z "${TOKEN}" ]; then
  echo "No GITHUB_TOKEN in environment (.env.local)." >&2
  exit 2
fi

echo "Testing GitHub API..."
echo -n "/user: "
curl -s -o /dev/null -w "%{http_code}\n" -H "Authorization: Bearer $TOKEN" https://api.github.com/user
echo -n "/rate_limit: "
curl -s -o /dev/null -w "%{http_code}\n" -H "Authorization: Bearer $TOKEN" https://api.github.com/rate_limit

echo "OK"


