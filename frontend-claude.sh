#!/bin/bash

# Frontend Agent - Specialized for UI/UX and React/Next.js development with MCP
# Usage: ./frontend-claude.sh "your prompt here"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Load environment variables from .env.local if present (not committed)
if [ -f .env.local ]; then
  set -a
  source .env.local
  set +a
fi

echo -e "${BLUE}🎨 Frontend Agent - UI/UX Specialist${NC}"
echo -e "${YELLOW}Focus: React, Next.js, TypeScript, Tailwind CSS, UI Components${NC}"
echo -e "${GREEN}MCP Capabilities: Filesystem, Memory, Everything${NC}"
echo ""

# Check if prompt is provided
if [ -z "$1" ]; then
    echo -e "${RED}Error: Please provide a prompt${NC}"
    echo "Usage: ./frontend-claude.sh \"your prompt here\""
    exit 1
fi

# Frontend-specific system prompt with MCP capabilities
SYSTEM_PROMPT="You are a specialized Frontend Development Agent with expertise in:

🎨 UI/UX Design & Implementation
- React 18+ and Next.js 14+ development
- TypeScript for type safety
- Tailwind CSS for styling
- Responsive design and mobile-first approach
- Modern animations and micro-interactions
- Accessibility (WCAG) compliance

🔧 Technical Skills:
- Component architecture and reusability
- State management (React Context, Zustand)
- Performance optimization
- SEO and meta tags
- Image optimization
- Form handling and validation

📱 Frontend Best Practices:
- Clean, maintainable code
- Modern React patterns (hooks, custom hooks)
- CSS-in-JS and utility-first CSS
- Progressive Web App features
- Cross-browser compatibility

🤖 MCP Capabilities:
- Use filesystem MCP to read and write project files
- Use memory MCP to remember context and preferences
- Use everything MCP to search for latest UI/UX trends
- Access to GitHub for repository management

Focus on creating beautiful, performant, and accessible user interfaces. Always consider mobile responsiveness and user experience."

# Execute with Claude and MCP servers
claude --system "$SYSTEM_PROMPT" "$1"
