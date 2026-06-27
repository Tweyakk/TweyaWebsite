# 📁 Project Structure

> A complete reference of every folder and file in the **TweyaWebsite** project.

---

## Root Directory `/`

The root contains configuration files that define how the project is built, linted, and run.

| File | Purpose |
|---|---|
| `package.json` | Defines project name (`portfolio`), version, npm scripts (`dev`, `build`, `start`, `lint`), and all dependencies (Next.js 16, React 19, Framer Motion, Lenis, Tailwind CSS 4, etc.) |
| `package-lock.json` | Auto-generated lockfile that pins exact dependency versions for reproducible installs |
| `tsconfig.json` | TypeScript configuration — targets ES2017, uses bundler module resolution, and sets the `@/*` path alias to `./src/*` |
| `next.config.ts` | Next.js configuration file — currently empty/default with no custom options |
| `postcss.config.mjs` | PostCSS configuration — registers the `@tailwindcss/postcss` plugin (required for Tailwind CSS v4) |
| `eslint.config.mjs` | ESLint configuration — uses Next.js core-web-vitals and TypeScript presets, ignores `.next/`, `out/`, and `build/` directories |
| `.gitignore` | Tells Git which files/folders to ignore (node_modules, .next, build outputs, etc.) |
| `AGENTS.md` | Instructions for AI coding agents — warns that this Next.js version has breaking changes and to read docs before writing code |
| `CLAUDE.md` | Additional AI agent instructions |
| `README.md` | Default Next.js README with getting started instructions |

---

## `public/` — Static Assets

> Files in this folder are served directly at the root URL. For example, `public/files/Balanch.apk` is accessible at `http://localhost:3000/files/Balanch.apk`.

### `public/files/`

Contains downloadable files linked from project cards.

| File | Purpose |
|---|---|
| `Balanch.apk` | Android APK download for the "Balanch App" project (18.8 MB) |

### `public/` (root-level SVGs)

| File | Purpose |
|---|---|
| `file.svg` | Default Next.js icon (unused in the site) |
| `globe.svg` | Default Next.js icon (unused in the site) |
| `next.svg` | Next.js logo (unused in the site) |
| `vercel.svg` | Vercel logo (unused in the site) |
| `window.svg` | Default Next.js icon (unused in the site) |

---

## `src/` — Source Code

> All application source code lives here. The `@/*` path alias in `tsconfig.json` maps to this folder, so imports like `@/components/ui/GlassCard` resolve to `src/components/ui/GlassCard`.

---

### `src/app/` — Next.js App Router (Pages & Layout)

> This folder uses the **Next.js App Router** convention. `layout.tsx` defines the shared shell, and `page.tsx` is the home page content. Each file here directly maps to a route.

| File | Purpose |
|---|---|
| `layout.tsx` | **Root Layout** — The outermost wrapper for every page. Loads the **Space Grotesk** Google Font, sets page metadata (title: "Tweya", description: "ordinary guy"), and assembles the global component hierarchy: `SmoothScroll` → `AnimatedCursor` + `Background` + `Navbar` + `<main>{children}</main>` + `Footer`. The `<html>` tag has `className="dark"` for dark mode. |
| `page.tsx` | **Home Page** — The only page of the site (`"use client"` component). Contains three sections: **Hero** (title, welcome text, CTA buttons), **Projects** (search bar, category filters, grid of `ProjectCard` components), and **Contact** (social media icons, support/donate button). Manages `filter` and `search` state for project filtering. |
| `globals.css` | **Global Styles & Design System** — Imports Tailwind CSS v4, defines all design tokens (colors: `--color-background`, `--color-foreground`, `--color-surface`; shadows: `--shadow-neo`, `--shadow-glass`; font family). Also defines utility classes (`.glass-panel`, `.neo-border`) and keyframe animations (`blob`, `shimmer`). Includes custom dark-themed scrollbar styles. |
| `favicon.ico` | **Browser Tab Icon** — The small icon shown in the browser tab |

---

### `src/components/` — React Components

> Split into two sub-folders: `layout/` for structural page-level components, and `ui/` for reusable design primitives.

---

#### `src/components/layout/` — Structural / Layout Components

> These components define the overall page structure — navigation, scrolling behavior, and footer. They are rendered once in `layout.tsx` and wrap or surround the page content.

| File | Purpose |
|---|---|
| `Navbar.tsx` | **Floating Bottom Navigation Bar** — A pill-shaped nav fixed to the bottom-center of the screen. Contains 4 items: Home, About, Projects, Contact (each with a Lucide icon). Features: **scroll spy** (detects which section is in view and highlights it), **animated active pill** (white pill slides between items using Framer Motion `layoutId`), **responsive behavior** (mobile: icons only; desktop: labels appear on hover/active), **dynamic backdrop** (becomes more opaque after scrolling 50px). |
| `Footer.tsx` | **Site Footer** — Displayed at the bottom of every page. Shows a green pulsing "Status Online" indicator, copyright text ("© {year} TweyaInc. All rights reserved."), and placeholder Privacy/Terms links. Has a semi-transparent backdrop blur background. |
| `SmoothScroll.tsx` | **Smooth Scroll Wrapper** — Wraps all page content and enables **Lenis** smooth scrolling. Configured with 1.2s duration, custom easing curve, and enhanced touch multiplier (2x). Runs a `requestAnimationFrame` loop to keep the scroll engine active. Cleans up on component unmount. |

---

#### `src/components/ui/` — Reusable UI Primitives

> These are the building-block components used throughout the page. They handle visual presentation and micro-interactions.

| File | Purpose |
|---|---|
| `AnimatedCursor.tsx` | **Custom Animated Cursor** — Replaces the default mouse cursor on desktop screens only (hidden on mobile). Consists of two elements: an **outer ring** (32px, follows mouse with spring physics, scales up 1.5x when hovering buttons/links) and an **inner dot** (8px, follows mouse instantly). Both use `mix-blend-difference` for contrast against any background color. |
| `Background.tsx` | **Animated Page Background** — Creates the cinematic dark background with three visual layers: (1) **Ambient glow** — a radial gradient at the top with a subtle purple tint, (2) **Grid pattern** — a 24px repeating dot grid that fades in over 2 seconds, (3) **Moving orbs** — two large blurred gradient circles (white-tinted and blue-tinted) that float and scale infinitely using Framer Motion. Fixed position at `z-[-2]`, behind all content. Only renders after mount to avoid SSR hydration issues. |
| `GlassCard.tsx` | **Glassmorphism Card** — A reusable wrapper component for content cards. Features: semi-transparent white background (`bg-white/5`), backdrop blur, 10% white border, deep shadow, subtle gradient overlay via `::before` pseudo-element. Has an optional `neo` prop (default: `true`) that adds neobrutalism offset shadows. Supports ref forwarding and all Framer Motion div props. Used by the Contact section and `ProjectCard`. |
| `NeoButton.tsx` | **Neobrutalism Button** — A versatile button component with 4 style variants: **primary** (white bg, dark text, offset shadow), **secondary** (dark bg, light border, offset shadow), **glass** (transparent with blur and inset glow), **icon** (round, minimal). Comes in 4 sizes: `sm`, `md`, `lg`, `icon`. All variants include Framer Motion spring animations on hover (scale up + lift) and tap (scale down). Has a shimmer gradient sweep on hover. |
| `ProjectCard.tsx` | **Project Display Card** — The most complex UI component. Renders a single project entry inside a `GlassCard`. Features: **entrance animation** (fade up with blur, staggered by card index), **idle floating** (subtle up-and-down bobbing), **hover lift** (translates up 8px + scales 1.02x), **status badge** (color-coded: green=completed, blue=in-progress, amber=planned), **category label**, **hover-revealed action buttons** (GitHub link, live URL), **always-visible download button** (rotating conic gradient border, glass inner layer, hover glow pulse, animated spinner on click for 1.5s), and **technology tags** displayed as pills at the bottom. |

---

### `src/data/` — Static Data / Content

> Contains TypeScript files that define the content displayed on the site. Edit these files to add, remove, or modify projects and social links without touching any component code.

| File | Purpose |
|---|---|
| `projects.ts` | **Project Data** — Exports a `Project` TypeScript type and a `projects` array. Each project has: `id`, `title`, `description`, `technologies[]`, optional `liveUrl`, optional `githubUrl`, optional `downloadUrl`, `status` (`"completed"` / `"in-progress"` / `"planned"`), `category` (`"web"` / `"mobile"` / `"coming soon"`), and `tags[]`. Currently contains 2 projects: **Balanch App** (mobile, completed, has APK download) and **Auto Post Discord** (web, in-progress). |
| `socials.ts` | **Social Links Data** — Exports a `socials` array. Each entry has: `name`, `url`, `icon` (Lucide React component), and `color` (Tailwind hover color classes). Currently contains 3 links: **Instagram** (pink hover), **Discord** (indigo/purple hover), **Email** (blue/cyan hover). |

---

### `src/lib/` — Shared Utilities

> Contains helper functions used across multiple components.

| File | Purpose |
|---|---|
| `utils.ts` | **Class Name Utility** — Exports a single `cn()` function that combines `clsx` (for conditional class names) with `tailwind-merge` (to intelligently deduplicate conflicting Tailwind classes). Example: `cn("px-4 py-2", isActive && "bg-white", "px-6")` → resolves to `"py-2 px-6 bg-white"` (px-6 wins over px-4). Used by `Navbar`, `GlassCard`, `NeoButton`, and `ProjectCard`. |

---

## Quick Visual: Component Hierarchy

```
layout.tsx
 └─ SmoothScroll
     ├─ AnimatedCursor
     ├─ Background
     ├─ Navbar
     ├─ <main>
     │   └─ page.tsx
     │       ├─ Hero Section
     │       │   └─ NeoButton (×2)
     │       ├─ Projects Section
     │       │   └─ ProjectCard (×N)
     │       │       └─ GlassCard
     │       └─ Contact Section
     │           ├─ GlassCard
     │           └─ NeoButton
     └─ Footer
```

---

## How to Add a New Project

1. Open `src/data/projects.ts`
2. Add a new object to the `projects` array:
```ts
{
  id: "3",
  title: "My New Project",
  description: "A short description of what it does",
  technologies: ["React", "Node.js"],
  liveUrl: "https://myproject.com",        // optional
  githubUrl: "https://github.com/...",     // optional
  downloadUrl: "/files/myapp.apk",         // optional
  status: "completed",                     // "completed" | "in-progress" | "planned"
  category: "web",                         // "web" | "mobile" | "coming soon"
  tags: ["Tag1", "Tag2"],
}
```
3. If it has a downloadable file, place it in `public/files/`

## How to Add a New Social Link

1. Open `src/data/socials.ts`
2. Import an icon from `lucide-react` at the top
3. Add a new object to the `socials` array:
```ts
{
  name: "Twitter",
  url: "https://twitter.com/...",
  icon: Twitter,
  color: "hover:text-sky-400 hover:border-sky-400",
}
```
