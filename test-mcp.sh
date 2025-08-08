#!/bin/bash

# Test MCP Servers
# Usage: ./test-mcp.sh

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
PURPLE='\033[0;35m'
NC='\033[0m' # No Color

echo -e "${PURPLE}🧪 Testing MCP Servers${NC}"
echo -e "${YELLOW}====================${NC}"
echo ""

# Test 1: Check if MCP config exists
echo -e "${BLUE}1. Checking MCP Configuration...${NC}"
if [ -f ~/.mcp/config.json ]; then
    echo -e "${GREEN}✅ MCP config file exists${NC}"
else
    echo -e "${RED}❌ MCP config file not found${NC}"
    exit 1
fi

# Test 2: Check if MCP servers are installed
echo -e "${BLUE}2. Checking MCP Server Installation...${NC}"

# Test GitHub server
echo -e "${YELLOW}Testing GitHub server...${NC}"
npx @modelcontextprotocol/server-github --help > /dev/null 2>&1
if [ $? -eq 0 ]; then
    echo -e "${GREEN}✅ GitHub server: Installed${NC}"
else
    echo -e "${RED}❌ GitHub server: Not installed${NC}"
fi

# Test Filesystem server
echo -e "${YELLOW}Testing Filesystem server...${NC}"
npx @modelcontextprotocol/server-filesystem --help > /dev/null 2>&1
if [ $? -eq 0 ]; then
    echo -e "${GREEN}✅ Filesystem server: Installed${NC}"
else
    echo -e "${RED}❌ Filesystem server: Not installed${NC}"
fi

# Test Memory server
echo -e "${YELLOW}Testing Memory server...${NC}"
npx @modelcontextprotocol/server-memory --help > /dev/null 2>&1
if [ $? -eq 0 ]; then
    echo -e "${GREEN}✅ Memory server: Installed${NC}"
else
    echo -e "${RED}❌ Memory server: Not installed${NC}"
fi

# Test Everything server
echo -e "${YELLOW}Testing Everything server...${NC}"
npx @modelcontextprotocol/server-everything --help > /dev/null 2>&1
if [ $? -eq 0 ]; then
    echo -e "${GREEN}✅ Everything server: Installed${NC}"
else
    echo -e "${RED}❌ Everything server: Not installed${NC}"
fi

# Test PostgreSQL server
echo -e "${YELLOW}Testing PostgreSQL server...${NC}"
npx enhanced-postgres-mcp-server --help > /dev/null 2>&1
if [ $? -eq 0 ]; then
    echo -e "${GREEN}✅ PostgreSQL server: Installed${NC}"
else
    echo -e "${RED}❌ PostgreSQL server: Not installed${NC}"
fi

echo ""
echo -e "${BLUE}3. MCP Configuration Summary:${NC}"
echo ""
cat ~/.mcp/config.json | jq '.' 2>/dev/null || cat ~/.mcp/config.json

echo ""
echo -e "${YELLOW}4. Next Steps:${NC}"
echo ""
echo -e "${GREEN}To complete MCP setup:${NC}"
echo "1. Get GitHub token from: https://github.com/settings/tokens"
echo "2. Update ~/.mcp/config.json with your tokens"
echo "3. Test with: claude-fe 'Create a simple React component'"
echo "4. Test with: claude-be 'Design a database schema'"
echo "5. Test with: claude-fs 'Plan our next feature'"
echo ""

echo -e "${PURPLE}🎯 MCP Servers Available:${NC}"
echo "• GitHub: Repository management and issues"
echo "• Filesystem: File operations in project directory"
echo "• Memory: Persistent memory across sessions"
echo "• Everything: Web search and information retrieval"
echo "• PostgreSQL: Database operations (when configured)"
echo ""

echo -e "${GREEN}✅ MCP testing complete!${NC}"
