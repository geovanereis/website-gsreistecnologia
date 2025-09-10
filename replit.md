# TechSolutions - Brazilian IT Services Landing Page

## Overview

This is a professional landing page for a Brazilian IT services company called "TechSolutions" that provides computer infrastructure, electrical installations, computer maintenance, and system development services to small and medium businesses. The application is built as a full-stack web solution with a React frontend, Express backend, and PostgreSQL database for handling quote requests.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript using Vite as the build tool
- **UI Library**: shadcn/ui components built on Radix UI primitives for accessible, professional components
- **Styling**: Tailwind CSS with a custom design system following Portuguese B2B service provider aesthetics
- **State Management**: TanStack React Query for server state management and caching
- **Routing**: Wouter for lightweight client-side routing
- **Form Handling**: React Hook Form with Zod validation for type-safe form management
- **Theme System**: Light/dark mode toggle with CSS custom properties and localStorage persistence

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API Design**: RESTful API with proper error handling and request logging middleware
- **Validation**: Zod schemas for request validation with Portuguese error messages
- **Storage Interface**: Abstract storage pattern allowing for memory-based development and database implementations

### Database Design
- **ORM**: Drizzle ORM for type-safe database operations
- **Database**: PostgreSQL with Neon serverless hosting
- **Schema**: Two main tables - users (authentication) and quote_requests (business inquiries)
- **Migrations**: Drizzle Kit for schema management and migrations

### Component Architecture
- **Design System**: Professional B2B aesthetic inspired by Cloudflare, AWS, and Microsoft Azure
- **Layout**: Single-page application with smooth scrolling navigation between sections
- **Responsive Design**: Mobile-first approach with Tailwind's responsive utilities
- **Accessibility**: Full keyboard navigation, ARIA labels, and semantic HTML structure

### Development Environment
- **Hot Module Replacement**: Vite development server with automatic reloading
- **Error Handling**: Runtime error overlay for development debugging
- **Code Quality**: TypeScript strict mode with comprehensive type checking
- **Asset Management**: Vite asset bundling with proper optimization for production

## External Dependencies

### UI and Styling
- **shadcn/ui**: Complete component library built on Radix UI primitives
- **Tailwind CSS**: Utility-first CSS framework with custom design tokens
- **Radix UI**: Headless component primitives for accessibility and interaction
- **Lucide React**: Icon library for consistent iconography
- **Inter Font**: Google Fonts integration for professional typography

### State Management and Data Fetching
- **TanStack React Query**: Server state management with caching and background updates
- **React Hook Form**: Form state management with validation integration
- **Zod**: Runtime schema validation for forms and API requests

### Database and Backend
- **Neon Database**: Serverless PostgreSQL hosting (@neondatabase/serverless)
- **Drizzle ORM**: Type-safe database operations and schema management
- **Express.js**: Web application framework with middleware support

### Development Tools
- **Vite**: Build tool and development server with hot module replacement
- **TypeScript**: Static typing with strict configuration
- **ESBuild**: Fast JavaScript bundler for production builds
- **Replit Integration**: Development environment integration with runtime error handling

### Business Logic
The application handles quote requests for four main service categories:
1. IT Infrastructure (servers, networks, backup systems)
2. Electrical Installations (data centers, office electrical work)
3. Computer Maintenance (preventive and corrective maintenance)
4. System Development (websites, web applications)

The contact form collects business information and service requirements, storing them in the database for follow-up by the sales team.