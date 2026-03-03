# TheCookFlow Landing Page

## Overview

TheCookFlow is an AI-powered meal planning web application that helps users generate personalized weekly menus, automatic shopping lists, and recipes adapted to dietary restrictions and allergies. The landing page features a distinctive chalkboard aesthetic with dark background, chalk-style typography (Permanent Marker font), and artisanal food imagery.

## User Preferences

Preferred communication style: Simple, everyday language.
Design aesthetic: Chalkboard/pizarra style matching the main tcf-webapp application.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite with React plugin
- **Routing**: Wouter (lightweight client-side router)
- **State Management**: TanStack React Query for server state
- **Styling**: Tailwind CSS with custom chalkboard theme
- **Typography**: Permanent Marker (chalk headings), Nunito (body text)
- **UI Components**: Custom components matching webapp design

### Backend Architecture
- **Runtime**: Node.js with Express
- **Language**: TypeScript with tsx for development
- **API Structure**: RESTful routes prefixed with `/api`
- **Static File Serving**: Express serves built client assets in production

### Data Layer
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema Location**: `shared/schema.ts` contains database models
- **Migrations**: Drizzle Kit handles schema migrations in `./migrations`
- **Storage Pattern**: Abstract `IStorage` interface with in-memory implementation for development

### Project Structure
```
client/           # React frontend application
  src/
    pages/        # Route-level page components (home, privacy, terms, cookies)
    components/   # Reusable UI components
      ui/         # shadcn/ui components
    hooks/        # Custom React hooks
    lib/          # Utility functions and query client
public/           # Static assets
  bg/             # Background images (bg.png chalkboard texture)
  logos/          # Brand logos (logo.png, chef.png, menu.png, etc.)
  icons/          # Decorative food icons (tomate, zanahoria, pimiento, limon, hojas)
server/           # Express backend
shared/           # Shared types and schemas between client/server
```

### Design System
- **Background**: Dark chalkboard texture (`/bg/bg.png`) with fixed attachment
- **Colors**: 
  - Primary accent: `#5DB9A8` (teal green)
  - Accent red: `#E74C3C`
  - Text: White on dark backgrounds
- **Typography**: 
  - Headings: Permanent Marker (chalk-style)
  - Body: Nunito (clean sans-serif)
- **Components**: 
  - `.btn-siguiente` - Primary CTA button with gradient
  - `.btn-outline-custom` - Secondary outline button
  - `.card-dark` - Dark translucent card with blur
  - `.section-container` - Max-width container

### Brand Assets (from tcf-brand-master)
- Logo: `/logos/logo.png`
- Step icons: chef.png, menu.png, lista.png, recetas.png
- Food decorations: tomate.png, zanahoria.png, pimiento.png, limon.png, hojas.png
- Background: `/bg/bg.png` (chalkboard texture)

## External Dependencies

### Environment Variables
- `VITE_PUBLIC_APP_URL`: Main web application URL for CTAs (default: https://app.thecookflow.com)
- `VITE_PUBLIC_PLAY_URL`: Google Play Store URL for Android app

### Database
- **PostgreSQL**: Primary database (requires `DATABASE_URL` environment variable)
- **connect-pg-simple**: Session storage for Express

### Frontend Libraries
- **@tanstack/react-query**: Data fetching and caching
- **wouter**: Lightweight routing
- **Tailwind CSS**: Utility-first styling

### Build & Development
- Vite for frontend bundling with HMR
- esbuild for server bundling in production
- Replit-specific plugins for development

## Recent Changes
- December 2024: Applied chalkboard design matching tcf-webapp
- Replaced previous green/white theme with dark chalkboard aesthetic
- Added brand assets from tcf-brand-master repository
- Created unified Landing page with all sections inline
- Updated legal pages (privacy, terms, cookies) to match theme
