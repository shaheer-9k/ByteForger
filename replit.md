# ByteForger Website

## Overview
ByteForger is a modern, responsive static website for a technology consulting firm specializing in full-stack development, cloud solutions, and AI integration. The website features smooth animations, carousel showcases, and a contact form that saves submissions to Google Sheets and sends email notifications.

## Project Architecture

### Frontend Stack
- React 18 with TypeScript
- Wouter for client-side routing
- Tailwind CSS for styling
- React Hook Form with Zod validation
- React Multi Carousel for service showcases
- Lucide React for icons
- Shadcn UI components

### Backend Stack
- Express.js
- Google Sheets API integration (for contact form storage)
- Email service integration (Resend/SendGrid for notifications)

## Pages & Features

### 1. Home Page (`/`)
- Hero section with animated service cards (Cloud Solutions, Web Development, Custom Development, Global Impact)
- Company mission section with gradient background
- Services carousel with 8 comprehensive service offerings
- Workflow & Methodology section with 4 approach cards
- Tech Stack showcase with category filtering (Frontend, Backend, Database, Cloud, DevOps, AI/ML)
- Smooth scroll animations with intersection observer
- Auto-hiding navbar with hover reveal

### 2. About Page (`/about`)
- Introduction to ByteForger
- Services carousel
- Vision section with company values
- Client-centered approach highlights

### 3. Services Page (`/services`)
- Grid layout showcasing all 8 services
- Detailed service descriptions
- Call-to-action for project inquiries

### 4. Contact Page (`/contact`)
- Two-column layout: Info sidebar + Contact form
- "Why Choose ByteForger" section with 4 key benefits
- Contact form with validation
- Email: info@byteforger.com
- Form submissions save to Google Sheets
- Email notifications sent on new submissions

## Design System

### Colors (ByteForger Brand)
- Dark Blue: `hsl(220 80% 32%)` - Primary brand color
- Light Blue: `hsl(210 75% 55%)` - Accent color
- Dark Pink: `hsl(340 85% 48%)` - Secondary brand color
- Neon Pink: `hsl(340 85% 65%)` - Highlight color
- Cream: `hsl(40 20% 95%)` - Light accent
- Text Gray: `hsl(220 10% 45%)` - Muted text

### Typography
- Primary Font: Playfair Display (headings, brand elements)
- Sans Font: Inter, Open Sans (body text)
- Font utility: `font-play` for Playfair Display

### Key Features
- Responsive design (mobile-first approach)
- Smooth scroll animations
- Auto-hiding navbar with scroll detection
- Hover effects and transitions
- Service carousels with auto-play
- Form validation with real-time error messages
- Loading states for form submission

## Contact Form Integration

### Features
- Real-time validation using Zod schema
- Error messages with accessibility
- Loading states during submission
- Success/error alerts with auto-dismiss
- Saves to Google Sheets
- Sends email notification to info@byteforger.com

### Form Fields
- Name (required, max 100 characters)
- Email (required, valid email format)
- Subject (required, max 200 characters)
- Message (required, 10-2000 characters)

## Navigation
- Fixed navbar with auto-hide on scroll down
- Reveals on scroll up or mouse hover at top of page
- Smooth scroll to sections with proper offset
- Active section highlighting
- Mobile hamburger menu with full-screen overlay

## Recent Changes
- 2025-01-26: Initial setup with complete frontend implementation
  - Created all pages (Home, About, Services, Contact)
  - Implemented design system with ByteForger brand colors
  - Built responsive navbar with auto-hide functionality
  - Created reusable components (Hero, Footer, ContactForm)
  - Set up services carousel and tech stack showcase
  - Configured Tailwind with custom colors and Playfair Display font

## Next Steps
1. Set up Google Sheets integration for contact form
2. Configure email notification service (Resend or SendGrid)
3. Create API endpoint for form submissions
4. Test all integrations
5. Deploy to production
