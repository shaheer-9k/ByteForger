# ByteForger Website Design Guidelines

## Design Approach
**Reference-Based:** Drawing inspiration from modern tech service websites like Innovate Technologies, Stripe, and Vercel, with emphasis on clean layouts, strategic whitespace, and trust-building elements.

## Core Design Elements

### A. Typography
**Primary Font:** Playfair Display (font-play)
- **Hero Headlines:** text-4xl to text-6xl (responsive), font-bold
- **Section Titles:** text-3xl to text-4xl, font-semibold
- **Subheadings:** text-xl to text-2xl, font-medium
- **Body Text:** text-base to text-lg, normal weight
- **Small Text:** text-sm for captions and metadata

### B. Layout System
**Spacing Units:** Use Tailwind's 4, 8, 12, 16, 20, 24, 32 for consistent rhythm
- **Section Padding:** py-16 to py-24 on desktop, py-8 to py-12 on mobile
- **Container Max-width:** max-w-7xl for primary content, max-w-6xl for text-heavy sections
- **Grid Gaps:** gap-8 for desktop, gap-4 to gap-6 for mobile
- **Vertical Rhythm:** Establish consistent spacing between sections (mb-16, mt-20)

### C. Component Library

**Navigation:**
- Fixed navbar with auto-hide on scroll down, reveal on scroll up or hover at top
- Logo aligned left, navigation center/right
- Smooth scroll to anchored sections with offset for fixed navbar
- Mobile: Full-screen overlay menu with centered links

**Hero Section:**
- Two-column layout: Text (50%) + Visual grid (50%)
- Four service cards in 2x2 grid with gradient backgrounds (blue, pink, green, purple)
- Each card: Icon + Title + Short description
- Hover effects: scale-110 on icons, shadow-xl on cards
- Strong CTA button with border-2 and hover state transition

**Services Carousel:**
- Card-based with Swiper/Carousel library
- 4 items desktop, 3 tablet, 1 mobile
- Card height: h-80 to h-[500px] (responsive)
- Smooth 800ms transitions
- Auto-play with 5s interval
- Shadow-md with hover:shadow-xl transitions

**Stats Section:**
- 3-column grid on desktop, single column mobile
- Large numbers with icons/emojis above
- Gradient background (from-darkBlue to-blue-800)
- White text on dark background

**Tech Stack:**
- Category tabs for filtering (Frontend, Backend, Database, Cloud, DevOps, AI/ML)
- Logo grid with external links
- Hover: slight scale and shadow effects
- 6-8 logos per row on desktop, responsive reduction

**Contact Form:**
- White card with shadow-xl and subtle gradient background overlay
- Two-column layout: Info sidebar (40%) + Form (60%)
- Sidebar includes: Why Choose section with icons, response time promise, CTA box
- Form fields: Name, Email (row), Subject, Message (full-width)
- Validation: red border-2, bg-red-50 for errors, inline error messages
- Submit button: Gradient (darkBlue to neonPink) with loading state
- Success/error alerts: Fixed top-right with auto-dismiss

**Footer:**
- Three-column: Branding + Navigation + Social/CTA
- Social icons in circular containers with hover effects
- Newsletter signup or CTA button
- Copyright bar with border-top separator

### D. Animations
**Use Sparingly:**
- Lottie animations in Hero and About sections only
- Fade-in on scroll for service cards (opacity-0 to opacity-100, duration-700)
- Hover transitions: transform duration-300 ease-in-out
- Button hover: slight -translate-y-1
- Smooth scroll behavior for anchor links
- No autoplay videos, no parallax effects

### E. Special Sections

**Testimonials (if added):**
- Carousel with 2-3 cards visible on desktop
- Client photo + quote + name/company
- Subtle card design, no heavy borders

**Portfolio/Projects (if added):**
- Masonry or 3-column grid
- Project cards with image + title + brief description
- Hover overlay with "View More" link

**Call-to-Action Sections:**
- Full-width with gradient backgrounds
- Centered text with prominent button
- py-16 padding for breathing room

## Images
**Hero Section:** Use illustration/animation (Lottie) rather than photography - already implemented with service cards grid
**About Section:** Professional team photo or office environment (400x400px)
**Services:** Icon-based (SVG icons from provided assets)
**Background Patterns:** Subtle gradient overlays, no busy textures

## Responsive Breakpoints
- **Mobile:** base (< 640px) - Single column, stacked elements
- **Tablet:** md (768px) - Two columns where applicable
- **Desktop:** lg (1024px) - Full multi-column layouts
- **Large:** xl (1280px+) - Optimized spacing and typography scale

## Accessibility
- ARIA labels on all interactive elements
- Semantic HTML structure (nav, section, footer)
- Focus states on all buttons/links (ring-2 ring-darkBlue/20)
- Alt text for all images
- Keyboard navigation for carousel and menus

## Key Differentiators from Generic Templates
- Service cards with gradient backgrounds in hero (not typical centered hero)
- Auto-hiding navbar with reveal on hover
- Two-column contact page (info + form side-by-side)
- Tech stack with category filtering
- Workflow/methodology as visual cards, not text blocks
- Professional gradient overlays instead of solid colors