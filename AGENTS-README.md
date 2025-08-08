# 🤖 Sistema de Agentes Especializados - Iglesia Filadelfia

Sistema de agentes AI especializados para el desarrollo del sistema de gestión de misioneros de la Iglesia Filadelfia.

## 🎯 **Agentes Disponibles**

### 🎨 **Frontend Agent (`claude-fe`)**
**Especializado en:** UI/UX, React, Next.js, TypeScript, Tailwind CSS

**Casos de uso:**
- Creación de componentes React
- Diseño de interfaces responsivas
- Implementación de animaciones
- Optimización de performance
- Accesibilidad (WCAG)

**Comandos de ejemplo:**
```bash
claude-fe "Create a modern navigation component with mobile menu"
claude-fe "Design the missionary listing page with filtering and search"
claude-fe "Implement a contact form with validation and error handling"
claude-fe "Create loading states and skeleton components"
```

### ⚙️ **Backend Agent (`claude-be`)**
**Especializado en:** APIs, Base de datos, Autenticación, Seguridad

**Casos de uso:**
- Diseño de esquemas de base de datos
- Creación de endpoints API
- Implementación de autenticación
- Optimización de consultas SQL
- Seguridad y validación

**Comandos de ejemplo:**
```bash
claude-be "Design the database schema for missionaries and reports"
claude-be "Create API endpoints for missionary CRUD operations"
claude-be "Implement user authentication with Supabase Auth"
claude-be "Set up email notifications for new reports"
```

### 🚀 **Fullstack Agent (`claude-fs`)**
**Especializado en:** Arquitectura, Planificación, Integración, DevOps

**Casos de uso:**
- Planificación de proyectos
- Diseño de arquitectura
- Estrategias de deployment
- Integración frontend-backend
- Gestión de calidad

**Comandos de ejemplo:**
```bash
claude-fs "Plan the complete missionary feature implementation"
claude-fs "Review project structure and suggest improvements"
claude-fs "Create deployment strategy for production"
claude-fs "Design testing strategy for the application"
```

## 🔄 **Flujo de Trabajo Recomendado**

### 1. **Planificación** (`claude-fs`)
```bash
claude-fs "Plan the missionary management system architecture"
```

### 2. **Backend** (`claude-be`)
```bash
claude-be "Design database schema for missionaries"
claude-be "Create API endpoints for missionary operations"
```

### 3. **Frontend** (`claude-fe`)
```bash
claude-fe "Create the missionary listing page"
claude-fe "Design the missionary detail view"
```

### 4. **Integración** (`claude-fs`)
```bash
claude-fs "Review and optimize the complete feature"
```

## 🛠️ **Configuración**

### Requisitos
- Claude CLI instalado
- Aliases configurados en tu shell

### Instalación
Los scripts ya están creados y son ejecutables. Los aliases ya están configurados:
- `claude-fe` → Frontend Agent
- `claude-be` → Backend Agent  
- `claude-fs` → Fullstack Agent

### Verificar instalación
```bash
./show-agents.sh
```

## 📋 **Comandos Útiles**

### Ver información de agentes
```bash
./show-agents.sh
```

### Probar agentes
```bash
# Frontend
claude-fe "Show me a modern button component"

# Backend
claude-be "Create a simple API endpoint"

# Fullstack
claude-fs "Plan our next feature"
```

## 🎯 **Casos de Uso Específicos**

### Para el Sistema de Misioneros

#### **Frontend Tasks:**
```bash
claude-fe "Create a missionary card component with photo, name, and status"
claude-fe "Design a filter system for missionaries by country and status"
claude-fe "Implement a responsive missionary detail page"
claude-fe "Create forms for adding and editing missionary information"
```

#### **Backend Tasks:**
```bash
claude-be "Design the missionaries table schema with relationships"
claude-be "Create API endpoints for missionary CRUD operations"
claude-be "Implement file upload for missionary photos"
claude-be "Set up email notifications for missionary updates"
```

#### **Fullstack Tasks:**
```bash
claude-fs "Plan the complete missionary management feature"
claude-fs "Design the data flow between frontend and backend"
claude-fs "Create deployment strategy for the missionary system"
```

## 💡 **Tips y Mejores Prácticas**

### **Cuándo usar cada agente:**

- **`claude-fe`**: Para todo lo relacionado con UI/UX, componentes, estilos, animaciones
- **`claude-be`**: Para APIs, base de datos, autenticación, seguridad
- **`claude-fs`**: Para planificación, arquitectura, integración, deployment

### **Flujo recomendado:**
1. Usa `claude-fs` para planificar la feature
2. Usa `claude-be` para diseñar la base de datos y APIs
3. Usa `claude-fe` para crear los componentes UI
4. Usa `claude-fs` para integrar y optimizar

### **Comunicación entre agentes:**
- Cada agente tiene contexto específico de su dominio
- Puedes referenciar trabajo previo de otros agentes
- Usa `claude-fs` para coordinar entre frontend y backend

## 🔧 **Configuración Avanzada**

### Personalizar prompts
Los prompts de cada agente están en los archivos:
- `frontend-claude.sh`
- `backend-claude.sh`
- `fullstack-claude.sh`

### Agregar nuevos agentes
1. Crear nuevo script (ej: `database-claude.sh`)
2. Configurar prompt especializado
3. Hacer ejecutable: `chmod +x database-claude.sh`
4. Agregar alias: `alias claude-db="./database-claude.sh"`

## 📚 **Recursos Adicionales**

- **Configuración del proyecto**: `agent-config.json`
- **Información de agentes**: `./show-agents.sh`
- **Documentación del proyecto**: `README.md`

---

**¡Listo para desarrollar el sistema de misioneros con agentes especializados! 🚀**
