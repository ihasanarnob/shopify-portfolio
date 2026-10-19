# Iftekhar Hasan — Premium Shopify & Frontend Developer Portfolio

A high-performance, editorial developer portfolio built with **Next.js (App Router)**, **React**, **TypeScript**, **Tailwind CSS**, **GSAP & ScrollTrigger**, and **Lenis**.

---

## 🌟 Visual Direction & Key Features

- **Dark & Cinematic Hero**: Near-black background (`#141615`), warm white typography (`#F6F5F0`), muted lime accents (`#C6F277`), and storefront architectural inspector.
- **Editorial Light Project Gallery**: Smooth transition to warm off-white (`#F6F5F0`) with spacious layout, asymmetric project cards, and filter pills.
- **Complete Case Studies (`/projects/[slug]`)**: Dynamic routes for all 6 projects (TRC Mart, ONE PRIME, LumiLift, Resort-Wear, Moda X, Custom Printed Stickers) detailing real deliverables, technical stack, objectives, and responsibilities.
- **Dedicated Printable R&eacute;sum&eacute; (`/resume`)**:
  - One-click print / save-as-PDF (`window.print()` with custom print stylesheets).
  - Direct download of authentic PDF from `/public/resume.pdf`.
- **Honest Project Scope**: Strictly differentiates completed client work, work in progress, and architectural design concepts with zero fabricated metrics.
- **Accessibility & Motion Control**: Full keyboard navigation, visible focus indicators, semantic headings, and automatic fallback for `prefers-reduced-motion`.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router, Turbopack, SSG static generation)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) & PostCSS
- **Animation**: [GSAP](https://greensock.com/gsap/) with [ScrollTrigger](https://greensock.com/scrolltrigger/)
- **Smooth Scroll**: [Lenis](https://lenis.darkroom.engineering/) (synchronized with GSAP ticker)
- **Icons**: [Lucide React](https://lucide.dev/) & custom SVG icons

---

## 📁 Directory Structure

```text
my-website/
├── app/
│   ├── globals.css              # Global styling, color variables & print rules
│   ├── layout.tsx               # Root layout with fonts, JSON-LD & Lenis smooth scroll
│   ├── page.tsx                 # Homepage composing all portfolio sections
│   ├── not-found.tsx            # Custom 404 Not Found page
│   ├── projects/
│   │   └── [slug]/
│   │       └── page.tsx         # Dynamic case study detail template
│   └── resume/
│       └── page.tsx             # Dedicated printable resume page
├── components/
│   ├── Navbar.tsx               # Adaptive navbar (dark-to-light transition)
│   ├── Hero.tsx                 # Cinematic dark hero with GSAP entrance
│   ├── ProjectCard.tsx          # Editorial project card with status badge
│   ├── ProjectGallery.tsx       # Filterable showcase section
│   ├── AboutSection.tsx         # Commercial approach & experience
│   ├── TechStack.tsx            # Honest, categorized skill cards
│   ├── ContactSection.tsx       # Mailto CTA, copy email, and back-to-top
│   ├── Icons.tsx                # SVG icons for GitHub and LinkedIn
│   ├── PrintResumeButton.tsx    # Client print/PDF button
│   └── SmoothScroll.tsx         # Lenis + GSAP ScrollTrigger sync
├── data/
│   └── portfolio.ts             # CENTRAL CONFIGURATION (Edit projects & bio here)
├── public/
│   ├── resume.pdf               # Downloadable resume PDF
│   └── favicon.svg              # Custom monogram favicon
├── next.config.ts               # Next.js configuration
├── tailwind.config.ts           # Custom color palette & fonts
└── package.json
```

---

## 🚀 Getting Started

### 1. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the site.

### 2. Build for Production
```bash
npm run build
```

### 3. Start Production Server
```bash
npm run start
```

---

## ✏️ How to Personalize Your Portfolio

All projects, personal details, contact links, and case study content are centralized in **[`data/portfolio.ts`](file:///Users/arnob/my-website/data/portfolio.ts)**:

1. **Update Projects**:
   - Open [`data/portfolio.ts`](file:///Users/arnob/my-website/data/portfolio.ts) to edit or add projects.
   - Adjust `status` (`Client Work`, `Design Concept`, `Work in Progress`, etc.).
   - Replace project preview images by adding screenshots to `/public/` and updating the `image` path.

2. **Update R&eacute;sum&eacute;**:
   - Replace `/public/resume.pdf` whenever you update your CV PDF.
   - Edit the text entries in [`data/portfolio.ts`](file:///Users/arnob/my-website/data/portfolio.ts) under `experience`, `education`, and `skills`.

3. **Deploy**:
   - Push to your GitHub repo (`https://github.com/ihasanarnob/portfolio`).
   - Import into [Vercel](https://vercel.com/) with one click.
