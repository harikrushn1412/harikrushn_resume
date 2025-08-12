# Overview

This is a professional portfolio website built for Harikrushn Rajeshbhai Moradiya, a Senior Flutter Developer with 4.5+ years of experience. The application is a full-stack web application built with React and Express, showcasing the developer's skills, experience, projects, and providing contact information. The site features a modern, responsive design with smooth scrolling navigation and professional presentation of technical expertise.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development
- **UI Library**: Radix UI components with shadcn/ui for consistent, accessible design system
- **Styling**: Tailwind CSS with custom CSS variables for theming and responsive design
- **State Management**: TanStack React Query for server state management and caching
- **Routing**: Wouter for lightweight client-side routing
- **Build Tool**: Vite for fast development and optimized production builds

## Backend Architecture
- **Runtime**: Node.js with Express.js server framework
- **Language**: TypeScript with ES modules for modern JavaScript features
- **Development Server**: Custom Vite integration for hot module replacement in development
- **Storage Interface**: Abstract storage layer with in-memory implementation (ready for database integration)
- **API Structure**: RESTful API design with `/api` prefix for all backend routes

## Component Design Patterns
- **Component Structure**: Modular section-based components (Hero, About, Experience, Projects, Skills, Contact)
- **UI Components**: Reusable component library following atomic design principles
- **Responsive Design**: Mobile-first approach with Tailwind's responsive utilities
- **Accessibility**: ARIA labels and semantic HTML throughout the application

## Data Architecture
- **Database Schema**: Drizzle ORM with PostgreSQL schema definitions
- **Type Safety**: Zod schemas for runtime validation and TypeScript integration
- **Storage Pattern**: Repository pattern with interface-based storage abstraction

## Styling System
- **Design System**: shadcn/ui with New York style variant
- **Color Palette**: Teal-focused professional color scheme with neutral base
- **Typography**: Inter font family for clean, professional appearance
- **Layout**: CSS Grid and Flexbox for responsive layouts

# External Dependencies

## Database & ORM
- **Drizzle ORM**: Modern TypeScript ORM with PostgreSQL dialect
- **Neon Database**: Serverless PostgreSQL database (via @neondatabase/serverless)
- **Database Migrations**: Drizzle Kit for schema management and migrations

## UI & Design
- **Radix UI**: Comprehensive set of accessible, unstyled UI primitives
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **Lucide React**: Modern icon library for consistent iconography
- **React Icons**: Additional icon sets including brand icons (Google Play, App Store)

## Development & Build Tools
- **Vite**: Fast build tool with HMR and optimized production builds
- **TypeScript**: Static type checking for enhanced developer experience
- **ESBuild**: Fast JavaScript bundler for server-side code
- **PostCSS & Autoprefixer**: CSS processing for browser compatibility

## Form & Validation
- **React Hook Form**: Performant form library with minimal re-renders
- **Zod**: TypeScript-first schema validation library
- **Hookform Resolvers**: Integration between React Hook Form and validation libraries

## State Management & Data Fetching
- **TanStack React Query**: Powerful data synchronization for server state
- **Wouter**: Minimalist routing library for single-page applications

## Utility Libraries
- **date-fns**: Modern date utility library for JavaScript
- **clsx & class-variance-authority**: Utility for constructing className strings
- **cmdk**: Command menu component for enhanced user interactions