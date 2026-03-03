# TheCookFlow Landing Page - Design Guidelines

## Design Approach
**Reference-Based:** Drawing inspiration from HelloFresh, Notion, and Linear for a modern, conversion-focused food tech experience that balances warmth with efficiency.

## Core Design Principles
- **Approachable Sophistication:** Professional yet friendly, inspiring trust while maintaining accessibility
- **Visual Appetite Appeal:** Food-forward imagery that creates emotional connection
- **Conversion-Optimized:** Clear visual hierarchy driving users toward CTAs
- **Seamless Flow:** Effortless progression from awareness to action

## Typography System
**Primary Font:** Inter (Google Fonts) - clean, modern, excellent readability
**Secondary Font:** Playfair Display - for emotional headlines and brand personality

**Hierarchy:**
- Hero Headline: Playfair Display, 56px (mobile: 36px), semi-bold
- Section Headlines: Inter, 40px (mobile: 28px), bold
- Step Numbers: Playfair Display, 72px, light weight
- Body Text: Inter, 18px (mobile: 16px), regular
- CTA Buttons: Inter, 16px, medium weight
- FAQ Questions: Inter, 20px, semi-bold
- Legal Text: Inter, 14px, regular

## Layout System
**Spacing Units:** Tailwind units of 4, 6, 8, 12, 16, 20, 24
- Section padding: py-20 (desktop), py-12 (mobile)
- Component gaps: gap-8 (desktop), gap-6 (mobile)
- Container: max-w-7xl with px-6

## Component Specifications

### Hero Section (Full Viewport Height)
- Full-width background: High-quality food lifestyle image (family/couple enjoying meal)
- Overlay: Subtle gradient for text readability
- Content: Left-aligned, max-w-2xl
- Dual CTA layout: Primary (Probar ahora) + Secondary (Descargar app) with 4-unit gap
- Button treatment: Backdrop blur (backdrop-blur-md) with semi-transparent backgrounds
- Trust indicator below CTAs: "Únete a 10,000+ usuarios" with small avatars

### How It Works Section
- Three-column grid (stacks on mobile)
- Each step card:
  - Large circled number (Playfair Display, 72px) top-left
  - Icon placeholder (64px, centered)
  - Step title (24px, semi-bold)
  - Description (18px, max 2 lines)
  - Subtle connecting lines between cards (desktop only)
- Background: Soft contrasting section

### Benefits Section
- Asymmetric 2-column layout (desktop): 
  - Left: Large feature image (recipe on tablet/phone)
  - Right: Stacked benefit cards with icons, headlines, and descriptions
- Mobile: Stacks to single column, image first
- Each benefit card: Icon (32px) + Title (20px) + Description (16px)

### FAQ Section
- Two-column layout (desktop): Questions in left, answers revealed on right
- Mobile: Single column with expandable accordion
- 8 questions total
- Question typography: 20px semi-bold with chevron indicator
- Answer: 16px regular, max-w-prose

### Footer with Newsletter
- Three-column layout (desktop):
  - Column 1: Logo + tagline + social icons
  - Column 2: Quick links (Cómo funciona, Beneficios, FAQ)
  - Column 3: Newsletter signup form with inline button
- Sub-footer: Legal links (Privacidad | Términos | Cookies) centered, 14px

### Legal Pages (/privacidad, /terminos, /cookies)
- Single column, max-w-4xl, centered
- Consistent header with back navigation
- Typography: Headings (28px), subheadings (20px), body (16px)
- Generous line-height (1.7) for readability
- Section spacing: 12-unit gaps

## Images

### Hero Image
**Description:** Warm, inviting lifestyle shot of a family or couple enjoying a fresh meal together at a modern kitchen table. Bright natural lighting, fresh vegetables visible, tablets/phones showing the app. Professional food photography aesthetic.
**Placement:** Full-width background hero, subtle gradient overlay for text contrast
**Treatment:** High-quality WebP, optimized for Core Web Vitals

### Benefits Section Image
**Description:** Clean product shot of TheCookFlow interface on a tablet or phone, showing a weekly meal plan with colorful recipe cards. Screen should be crisp and legible.
**Placement:** Left side of benefits section (desktop), above content (mobile)

### Step Illustrations
**Description:** Simple, friendly icons for each step (questionnaire icon, AI sparkle/chef hat, shopping list)
**Placement:** Centered in each "How It Works" card
**Treatment:** Use icon library (Heroicons outlined) for consistency

## Animations
- Minimal, purposeful animations only
- Hero CTA: Subtle scale on hover (1.02)
- FAQ accordion: Smooth expand/collapse (200ms)
- Section reveals: Gentle fade-in on scroll (intersection observer)

## Accessibility
- Focus indicators: 2px outline with 2-unit offset
- Minimum touch targets: 44x44px for all interactive elements
- ARIA labels for icon-only buttons
- Semantic HTML structure (nav, main, section, footer)

## Performance Requirements
- All images: WebP format with fallbacks
- Lazy loading: All images below fold
- Hero image: Priority loading with fetchpriority="high"
- Font loading: font-display: swap
- Target Core Web Vitals: LCP <2.5s, FID <100ms, CLS <0.1