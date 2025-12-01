# ByteForger Premium Business Design Guidelines

## Design Approach
**Reference-Based:** Drawing from Stripe, Vercel, Linear, and premium tech consultancies. Emphasis on sophisticated enterprise aesthetic, generous whitespace, glassmorphism effects, and trust-building through visual polish.

## Typography
**Primary (Sans-serif):** Inter or SF Pro Display
- **Hero Headlines:** text-5xl to text-7xl, font-bold, tracking-tight
- **Section Titles:** text-3xl to text-5xl, font-semibold
- **Subheadings:** text-xl to text-2xl, font-medium

**Secondary (Serif):** Playfair Display
- **Featured Quotes:** text-2xl to text-3xl, italic
- **Testimonials:** text-lg, italic
- **Accent Headlines:** Selected section titles for visual variety

**Body Text:** text-base to text-lg, leading-relaxed for readability
**Small Text:** text-sm, opacity-70 for metadata

## Color Palette
**Dark Mode Foundation:**
- Background: Deep Navy (#0A0E27), Dark Slate (#1A1F3A)
- Surface: Charcoal (#1E2337) with glassmorphism overlays
- Text: White/Off-white (#F8FAFC, #E2E8F0)

**Light Mode Foundation:**
- Background: Soft White (#FAFBFC), Light Gray (#F5F7FA)
- Surface: White (#FFFFFF) with subtle shadows
- Text: Deep Navy (#1A1F3A), Professional Gray (#4A5568)

**Accent Colors:**
- Primary Blue: #2563EB (CTAs, links)
- Electric Pink: #EC4899 (highlights, hover states)
- Success Green: #10B981
- Gradient combinations: Blue-to-Pink, Navy-to-Indigo

## Layout System
**Spacing:** Tailwind units 8, 12, 16, 20, 24, 32, 40, 48
- **Section Padding:** py-24 to py-32 desktop, py-16 mobile
- **Container:** max-w-7xl with px-8 to px-12 horizontal padding
- **Card Spacing:** p-8 to p-12 internal, gap-8 to gap-12 between
- **Generous Margins:** mb-20 to mb-32 between major sections

## Component Library

**Navigation:**
- Fixed glassmorphic navbar: backdrop-blur-xl, bg-white/80 (light) or bg-navy/80 (dark)
- Subtle bottom border with shadow-lg
- Logo left, navigation center, CTA button right
- Mobile: Full-screen overlay with blur background

**Hero Section:**
- Full-width with large professional image (1920x1080 minimum)
- Image: Modern office, tech team collaboration, or abstract tech visualization
- Content overlay: Left-aligned (50% width), backdrop-blur-md background
- Large headline + subtitle + dual CTAs (primary gradient, secondary outlined)
- Buttons on blur background without additional hover blur effects
- Height: 85vh to maintain visual impact

**Service/Feature Cards:**
- Glassmorphic design: bg-white/10 backdrop-blur-md (dark) or bg-white/90 (light)
- Border: border border-white/20 (dark) or border-gray-200 (light)
- Padding: p-10, rounded-2xl
- Shadow: shadow-xl with hover:shadow-2xl
- Icon container: Gradient background (blue-to-pink), rounded-full, p-4
- Hover: Subtle translate-y-1 transform

**Stats Section:**
- Dark gradient background (navy-to-slate) with white text
- 4-column grid desktop, 2-column tablet, stacked mobile
- Large numbers: text-5xl font-bold with gradient text effect
- Icons above numbers, descriptive text below
- Generous py-32 padding

**Tech Stack Grid:**
- Logo cards: bg-white (light) or bg-slate-800 (dark), rounded-xl
- Grayscale logos with color on hover
- Grid: 6 columns desktop, 4 tablet, 2 mobile
- Shadow-md with hover:shadow-xl, border border-gray-200/50

**Contact Form:**
- Two-column split: Info panel (35%) + Form (65%)
- Info panel: Dark gradient background, white text, glassmorphic card styling
- Form: Premium white card (light) or dark glass card (dark mode)
- Input fields: Generous padding (p-4), rounded-xl, border-2
- Focus states: Ring-4 ring-blue-500/20, border-blue-500
- Submit button: Full-width gradient (blue-to-pink), py-4, font-semibold
- Validation: Inline below fields, red-500 text

**Footer:**
- Dark navy background (light mode) or deeper navy (dark mode)
- Four columns: Branding + Services + Company + Contact
- Social icons: Circular gradient backgrounds with white icons
- Newsletter: Inline form with glassmorphic input + gradient button
- Bottom bar: Copyright + legal links, border-top border-white/10

## Visual Effects

**Glassmorphism:**
- Cards: backdrop-blur-xl bg-white/10 border border-white/20
- Overlays: backdrop-blur-md with gradient backgrounds
- Navigation: backdrop-blur-lg for fixed headers

**Shadows:**
- Cards: shadow-xl (resting), shadow-2xl (hover/active)
- Elevated sections: shadow-2xl with blur-3xl for depth
- Text shadows: Subtle on light text over images

**Animations (Minimal):**
- Fade-in on scroll: opacity-0 to opacity-100, duration-700
- Card hover: transform translate-y-1, duration-300
- Button: No additional animations beyond standard hover states
- Smooth scroll: behavior smooth for anchor links
- Loading states: Spinner or skeleton screens, no elaborate animations

## Images

**Hero Section:**
- Large professional photograph: Modern tech office, collaborative workspace, or abstract digital art
- Dimensions: 1920x1080 minimum, optimized for web
- Treatment: Subtle gradient overlay (navy-to-transparent) for text contrast
- Alternative: Video background (muted, 15s loop) for premium feel

**Service Section:**
- Icon-based (professional icon set from Heroicons or custom SVG)
- No photography in service cards, maintain consistency

**Team/About:**
- Professional headshots or team photo (high-quality, well-lit)
- Grid layout with rounded corners and subtle hover effects

**Background Elements:**
- Subtle gradient meshes or abstract geometric patterns
- Low opacity decorative elements, never distracting

## Responsive Behavior
- **Mobile:** Single column, generous py-16 spacing, text-4xl headlines
- **Tablet:** 2-column grids, py-20 spacing
- **Desktop:** Full multi-column (up to 4), py-24 to py-32 spacing
- Touch targets: Minimum 48px height for mobile buttons

## Accessibility
- WCAG AA contrast ratios for all text
- Focus visible: ring-2 ring-blue-500 on all interactive elements
- Semantic HTML: nav, main, section, article
- ARIA labels for icon buttons and complex interactions
- Keyboard navigation: Full support for all interactive components