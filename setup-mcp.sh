#!/bin/bash

# MCP Setup Script for Iglesia Filadelfia Project
# Usage: ./setup-mcp.sh

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
PURPLE='\033[0;35m'
NC='\033[0m' # No Color

echo -e "${PURPLE}🔧 MCP Configuration Setup${NC}"
echo -e "${YELLOW}========================${NC}"
echo ""

# Check if MCP config exists
if [ ! -f ~/.mcp/config.json ]; then
    echo -e "${RED}Error: MCP config file not found at ~/.mcp/config.json${NC}"
    echo "Please run the setup script from the project directory"
    exit 1
fi

echo -e "${BLUE}📋 Current MCP Configuration:${NC}"
echo ""

# Show current config
cat ~/.mcp/config.json | jq '.' 2>/dev/null || cat ~/.mcp/config.json

echo ""
echo -e "${YELLOW}🔑 Configuration Steps:${NC}"
echo ""

# GitHub Token Setup
echo -e "${GREEN}1. GitHub Personal Access Token:${NC}"
echo "   - Go to GitHub.com → Settings → Developer settings → Personal access tokens"
echo "   - Generate a new token with 'repo' and 'workflow' permissions"
echo "   - Replace 'your-github-token-here' in ~/.mcp/config.json"
echo ""

# PostgreSQL Setup
echo -e "${GREEN}2. PostgreSQL Connection:${NC}"
echo "   - If using Supabase, get your connection string from the dashboard"
echo "   - Format: postgresql://username:password@host:port/database"
echo "   - Replace 'your-postgres-connection-string-here' in ~/.mcp/config.json"
echo ""

# Environment Variables
echo -e "${GREEN}3. Environment Variables:${NC}"
echo "   Add these to your ~/.zshrc or ~/.bashrc:"
echo ""
echo "   export GITHUB_PERSONAL_ACCESS_TOKEN='your-token-here'"
echo "   export POSTGRES_CONNECTION_STRING='your-connection-string-here'"
echo ""

# Test MCP Servers
echo -e "${GREEN}4. Testing MCP Servers:${NC}"
echo ""

# Test filesystem server
echo -e "${BLUE}Testing filesystem server...${NC}"
npx @modelcontextprotocol/server-filesystem --root /Users/ajrd/DEV/PersonalProject/iglesia-filadelfia --help > /dev/null 2>&1
if [ $? -eq 0 ]; then
    echo -e "${GREEN}✅ Filesystem server: OK${NC}"
else
    echo -e "${RED}❌ Filesystem server: Failed${NC}"
fi

# Test memory server
echo -e "${BLUE}Testing memory server...${NC}"
npx @modelcontextprotocol/server-memory --help > /dev/null 2>&1
if [ $? -eq 0 ]; then
    echo -e "${GREEN}✅ Memory server: OK${NC}"
else
    echo -e "${RED}❌ Memory server: Failed${NC}"
fi

# Test everything server
echo -e "${BLUE}Testing everything server...${NC}"
npx @modelcontextprotocol/server-everything --help > /dev/null 2>&1
if [ $? -eq 0 ]; then
    echo -e "${GREEN}✅ Everything server: OK${NC}"
else
    echo -e "${RED}❌ Everything server: Failed${NC}"
fi

echo ""
echo -e "${PURPLE}🎯 MCP Servers Available:${NC}"
echo "• GitHub: Repository management and issues"
echo "• Filesystem: File operations in project directory"
echo "• Memory: Persistent memory across sessions"
echo "• Everything: Web search and information retrieval"
echo "• PostgreSQL: Database operations (when configured)"
echo ""

echo -e "${YELLOW}💡 Usage Examples:${NC}"
echo "• Use GitHub MCP to create issues and manage repositories"
echo "• Use Filesystem MCP to read and write project files"
echo "• Use Memory MCP to remember context across sessions"
echo "• Use Everything MCP to search for information online"
echo ""

echo -e "${GREEN}✅ MCP setup complete!${NC}"
echo "Remember to configure your tokens in ~/.mcp/config.json"
