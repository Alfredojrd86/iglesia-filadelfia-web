#!/bin/bash

# Show Agents Information Script
# Usage: ./show-agents.sh

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
PURPLE='\033[0;35m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

echo -e "${CYAN}🤖 Iglesia Filadelfia - Agent System${NC}"
echo -e "${YELLOW}================================${NC}"
echo ""

echo -e "${PURPLE}🎨 Frontend Agent (claude-fe)${NC}"
echo -e "${BLUE}Focus:${NC} UI/UX Development, React Components, Responsive Design"
echo -e "${BLUE}Specialties:${NC}"
echo "  • React 18+ and Next.js 14+ development"
echo "  • TypeScript for type safety"
echo "  • Tailwind CSS for styling"
echo "  • Accessibility (WCAG) compliance"
echo "  • Performance optimization"
echo ""
echo -e "${YELLOW}Example commands:${NC}"
echo "  claude-fe \"Create the missionary listing page with cards and filtering\""
echo "  claude-fe \"Design the home page hero section with modern animations\""
echo "  claude-fe \"Implement responsive navigation with mobile menu\""
echo ""

echo -e "${PURPLE}⚙️ Backend Agent (claude-be)${NC}"
echo -e "${BLUE}Focus:${NC} Server & Database Development, APIs, Security"
echo -e "${BLUE}Specialties:${NC}"
echo "  • PostgreSQL, Supabase, and SQL design"
echo "  • JWT tokens and session management"
echo "  • RESTful API design principles"
echo "  • Database schema optimization"
echo "  • Security and authentication"
echo ""
echo -e "${YELLOW}Example commands:${NC}"
echo "  claude-be \"Design the database schema for missionaries and reports\""
echo "  claude-be \"Create API endpoints for missionary CRUD operations\""
echo "  claude-be \"Set up authentication with Supabase Auth\""
echo ""

echo -e "${PURPLE}🚀 Fullstack Agent (claude-fs)${NC}"
echo -e "${BLUE}Focus:${NC} Project Architecture, Integration, DevOps"
echo -e "${BLUE}Specialties:${NC}"
echo "  • System design and architecture patterns"
echo "  • Frontend-Backend integration strategies"
echo "  • CI/CD pipeline design"
echo "  • Project planning and management"
echo "  • Quality assurance and testing"
echo ""
echo -e "${YELLOW}Example commands:${NC}"
echo "  claude-fs \"Plan the complete missionary feature implementation\""
echo "  claude-fs \"Review the entire project structure and suggest improvements\""
echo "  claude-fs \"Create deployment strategy for production\""
echo ""

echo -e "${GREEN}📋 Recommended Workflow:${NC}"
echo "1. Planning: claude-fs for vision and architecture"
echo "2. Backend: claude-be for APIs and database design"
echo "3. Frontend: claude-fe for components and UI"
echo "4. Integration: claude-fs for connecting both sides"
echo ""

echo -e "${CYAN}💡 Tips:${NC}"
echo "• Use claude-fs for project-wide decisions and planning"
echo "• Use claude-be for server-side logic and data management"
echo "• Use claude-fe for user interface and experience design"
echo "• Each agent has specialized knowledge for their domain"
echo ""

echo -e "${YELLOW}🔧 Quick Test:${NC}"
echo "Try: claude-fe \"Show me a modern button component with hover effects\""
echo "Try: claude-be \"Create a simple API endpoint for user registration\""
echo "Try: claude-fs \"Plan the authentication flow for our missionary system\""
