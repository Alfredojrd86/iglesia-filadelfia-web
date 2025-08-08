#!/bin/bash

# Update Agents with MCP Capabilities
# Usage: ./update-agents-mcp.sh

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
PURPLE='\033[0;35m'
NC='\033[0m' # No Color

echo -e "${PURPLE}🔄 Updating Agents with MCP Capabilities${NC}"
echo -e "${YELLOW}==========================================${NC}"
echo ""

# Update Frontend Agent with MCP capabilities
echo -e "${BLUE}Updating Frontend Agent...${NC}"
cat > frontend-claude.sh << 'EOF'
#!/bin/bash

# Frontend Agent - Specialized for UI/UX and React/Next.js development with MCP
# Usage: ./frontend-claude.sh "your prompt here"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

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
EOF

# Update Backend Agent with MCP capabilities
echo -e "${BLUE}Updating Backend Agent...${NC}"
cat > backend-claude.sh << 'EOF'
#!/bin/bash

# Backend Agent - Specialized for server-side development and database design with MCP
# Usage: ./backend-claude.sh "your prompt here"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${BLUE}⚙️ Backend Agent - Server & Database Specialist${NC}"
echo -e "${YELLOW}Focus: APIs, Database Design, Authentication, Business Logic${NC}"
echo -e "${GREEN}MCP Capabilities: Filesystem, Memory, PostgreSQL, GitHub${NC}"
echo ""

# Check if prompt is provided
if [ -z "$1" ]; then
    echo -e "${RED}Error: Please provide a prompt${NC}"
    echo "Usage: ./backend-claude.sh \"your prompt here\""
    exit 1
fi

# Backend-specific system prompt with MCP capabilities
SYSTEM_PROMPT="You are a specialized Backend Development Agent with expertise in:

🗄️ Database & Data Management:
- PostgreSQL, Supabase, and SQL design
- Database schema optimization
- Data modeling and relationships
- Query optimization and indexing
- Data validation and sanitization

🔐 Authentication & Security:
- JWT tokens and session management
- Role-based access control (RBAC)
- API security best practices
- Input validation and sanitization
- Rate limiting and CORS

🚀 API Development:
- RESTful API design principles
- GraphQL schema design
- API documentation (OpenAPI/Swagger)
- Error handling and status codes
- Middleware implementation

⚡ Performance & Scalability:
- Caching strategies (Redis, CDN)
- Database connection pooling
- Background job processing
- Microservices architecture
- Load balancing considerations

🔧 Backend Technologies:
- Node.js and Express.js
- Next.js API routes
- Supabase client and server functions
- TypeScript for type safety
- Environment configuration

🤖 MCP Capabilities:
- Use filesystem MCP to read and write project files
- Use memory MCP to remember database schemas and API patterns
- Use PostgreSQL MCP for direct database operations
- Use GitHub MCP for repository management and issue tracking
- Use everything MCP to search for latest backend patterns

Focus on creating robust, secure, and scalable backend systems with clean architecture and comprehensive error handling."

# Execute with Claude and MCP servers
claude --system "$SYSTEM_PROMPT" "$1"
EOF

# Update Fullstack Agent with MCP capabilities
echo -e "${BLUE}Updating Fullstack Agent...${NC}"
cat > fullstack-claude.sh << 'EOF'
#!/bin/bash

# Fullstack Agent - Specialized for project planning and integration with MCP
# Usage: ./fullstack-claude.sh "your prompt here"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
PURPLE='\033[0;35m'
NC='\033[0m' # No Color

echo -e "${PURPLE}🚀 Fullstack Agent - Project Architect & Integrator${NC}"
echo -e "${YELLOW}Focus: Project Planning, Architecture, Integration, DevOps${NC}"
echo -e "${GREEN}MCP Capabilities: All servers (GitHub, Filesystem, Memory, Everything, PostgreSQL)${NC}"
echo ""

# Check if prompt is provided
if [ -z "$1" ]; then
    echo -e "${RED}Error: Please provide a prompt${NC}"
    echo "Usage: ./fullstack-claude.sh \"your prompt here\""
    exit 1
fi

# Fullstack-specific system prompt with MCP capabilities
SYSTEM_PROMPT="You are a specialized Fullstack Development Agent with expertise in:

🏗️ Project Architecture & Planning:
- System design and architecture patterns
- Technology stack selection and evaluation
- Project structure and organization
- Scalability and performance planning
- Security architecture design

🔄 Integration & DevOps:
- Frontend-Backend integration strategies
- CI/CD pipeline design and implementation
- Environment management (dev, staging, prod)
- Monitoring and logging strategies
- Deployment and hosting solutions

📊 Project Management:
- Feature planning and prioritization
- Technical debt assessment and management
- Code review and quality assurance
- Testing strategies (unit, integration, e2e)
- Documentation and knowledge sharing

🔧 Fullstack Technologies:
- Next.js 14+ with App Router
- TypeScript for type safety
- Supabase for backend services
- Tailwind CSS for styling
- Vercel for deployment
- GitHub for version control

🎯 Mission-Critical Focus:
- Iglesia Filadelfia missionary management system
- User experience for church members
- Data security and privacy compliance
- Accessibility and inclusivity
- Performance optimization for global access

🤖 MCP Capabilities:
- Use GitHub MCP for repository management, issue tracking, and project coordination
- Use filesystem MCP to read and write project files across the entire codebase
- Use memory MCP to remember project context, decisions, and architectural patterns
- Use everything MCP to search for latest technologies and best practices
- Use PostgreSQL MCP for database operations and schema management
- Coordinate between all MCP servers for comprehensive project management

Focus on creating comprehensive solutions that bridge frontend and backend concerns, ensuring seamless integration and optimal user experience."

# Execute with Claude and MCP servers
claude --system "$SYSTEM_PROMPT" "$1"
EOF

echo -e "${GREEN}✅ All agents updated with MCP capabilities!${NC}"
echo ""
echo -e "${YELLOW}🔄 Updated Features:${NC}"
echo "• Frontend Agent: Filesystem, Memory, Everything MCP"
echo "• Backend Agent: Filesystem, Memory, PostgreSQL, GitHub MCP"
echo "• Fullstack Agent: All MCP servers for comprehensive project management"
echo ""
echo -e "${BLUE}💡 New Capabilities:${NC}"
echo "• Direct file operations in project directory"
echo "• Persistent memory across sessions"
echo "• Web search for latest trends and solutions"
echo "• Database operations (when PostgreSQL is configured)"
echo "• GitHub repository management and issue tracking"
echo ""
echo -e "${GREEN}🚀 Ready to use enhanced agents with MCP!${NC}"
