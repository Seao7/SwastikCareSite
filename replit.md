# Overview

This is a full-stack healthcare website for "Swastik Eye & Dental Care" built with React frontend and Express.js backend. The application provides a professional medical practice website with contact forms, service information, team details, and appointment booking functionality. It features a modern UI using shadcn/ui components with a medical-themed design system and is configured for PostgreSQL database integration through Drizzle ORM.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development
- **Routing**: Wouter for lightweight client-side routing with pages for Home, About, Contact, and 404
- **UI Framework**: shadcn/ui component library with Radix UI primitives for accessible, customizable components
- **Styling**: Tailwind CSS with custom medical theme colors (medical-blue, soft-teal, calm-green) and CSS variables for consistent design
- **State Management**: TanStack Query for server state management and form handling with React Hook Form
- **Build Tool**: Vite for fast development and optimized production builds

## Backend Architecture
- **Framework**: Express.js with TypeScript for API endpoints and server-side logic
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations and schema management
- **Storage Strategy**: In-memory storage implementation (MemStorage) for development with interface for easy database switching
- **API Design**: RESTful endpoints for contact form submissions with proper validation and error handling
- **Development Setup**: Integrated Vite development server with hot module replacement and middleware integration

## Database Schema
- **Contacts Table**: Stores contact form submissions with fields for personal information (firstName, lastName, email, phone), service interest, message, and timestamps
- **Validation**: Zod schemas for runtime type checking and form validation with Drizzle integration
- **Migration System**: Drizzle-kit for database migrations and schema synchronization

## Form Handling & Validation
- **Client-side**: React Hook Form with Zod resolver for form state management and validation
- **Server-side**: Express middleware for JSON parsing and Zod validation for data integrity
- **User Feedback**: Toast notifications for success/error states and comprehensive error handling

# External Dependencies

## UI & Styling
- **shadcn/ui**: Complete component library with Radix UI primitives for accessible components
- **Tailwind CSS**: Utility-first CSS framework with PostCSS for processing
- **Lucide React**: Icon library for consistent iconography throughout the application

## Development & Build Tools
- **Vite**: Build tool with React plugin and runtime error overlay for development
- **TypeScript**: Type safety across the entire codebase with shared types
- **ESBuild**: Fast bundling for production builds

## Database & ORM
- **Drizzle ORM**: Type-safe PostgreSQL ORM with schema definition and query building
- **@neondatabase/serverless**: Serverless PostgreSQL driver for database connections
- **Drizzle-kit**: CLI tool for database migrations and schema management

## State Management & HTTP
- **TanStack Query**: Server state management with caching, background updates, and error handling
- **React Hook Form**: Form state management with minimal re-renders and validation integration

## Utilities & Helpers
- **Zod**: Runtime type validation for forms and API data
- **date-fns**: Date manipulation and formatting utilities
- **clsx & class-variance-authority**: Conditional CSS class management and component variants