# Portfolio Site Spec

## Overview

Personal portfolio site built with Astro. Single-page scroll layout per language.
Deployed on Vercel (static output).

**Goals**
- Introduce products and writing
- Provide links to social accounts
- Simple, fast, easy to maintain by one person

**Non-Goals**
- Contact form
- Dark mode
- Blog CMS / internal articles
- SSR (unless explicitly needed)

---

## Routing & i18n

Astro's built-in i18n routing.

| URL | Language |
|-----|----------|
| `/` | Japanese (default) |
| `/en/` | English |

- UI strings: `src/i18n/en.ts`, `src/i18n/ja.ts`
- A language switcher is placed in the Header
- All page metadata (title, description, OGP) must be translated

---

## Page Structure

Single page per locale with anchor-linked sections:

1. Hero
2. Products
3. Writing
4. About
5. Links

---

## Sections

### Hero
- Name
- Short tagline (translated)
- Links to GitHub and primary social accounts

### Products
- Card grid (2–3 columns, responsive)
- 5+ products expected — no pagination needed
- Each card: name, description, tags, external link
- Source of truth: `src/data/products.ts`

### Writing
- List of external articles (Zenn, Medium, etc.)
- Each item: title, published date, platform label, external link
- Source of truth: `src/data/writing.ts`

### About
- Short bio (translated)
- Profile photo — stored in `src/assets/`, rendered via Astro `<Image>`

### Links
- Icon + label list (GitHub, Twitter/X, etc.)
- Source of truth: `src/data/links.ts`

---

## Data Structures

### `src/data/products.ts`

```ts
type LocalizedString = { en: string; ja: string }

type Product = {
  slug: string
  name: string              // English only
  description: LocalizedString
  url: string
  tags: string[]
  image?: string            // path relative to src/assets/
}
```

### `src/data/writing.ts`

```ts
type Article = {
  title: LocalizedString
  url: string
  publishedAt: string   // YYYY-MM-DD
  platform?: string     // e.g. "Zenn" | "Medium"
}
```

### `src/data/links.ts`

```ts
type Link = {
  label: string
  url: string
  icon?: string   // icon identifier (e.g. "github", "twitter")
}
```

### `src/i18n/en.ts` / `src/i18n/ja.ts`

Static UI strings: nav labels, section headings, button text, aria labels.

---

## Component Map

```
src/
├── layouts/
│   └── BaseLayout.astro         # <head>, meta, OGP, GA script, global CSS
├── components/
│   ├── Header.astro             # Site name + nav anchors + language switcher
│   ├── Footer.astro             # Copyright
│   ├── HeroSection.astro
│   ├── ProductCard.astro        # Single product card
│   ├── ProductsSection.astro    # Card grid wrapper
│   ├── WritingItem.astro        # Single article row
│   ├── WritingSection.astro     # Article list wrapper
│   ├── AboutSection.astro       # Bio + photo
│   └── LinksSection.astro       # Link list
├── data/
│   ├── products.ts
│   ├── writing.ts
│   └── links.ts
├── i18n/
│   ├── en.ts
│   └── ja.ts
├── assets/
│   └── profile.jpg              # About photo
└── pages/
    ├── index.astro              # Japanese
    └── en/
        └── index.astro          # English
```

---

## SEO & OGP

Handled in `BaseLayout.astro` via props.

| Tag | Value |
|-----|-------|
| `<title>` | Page title (localized) |
| `meta description` | Page description (localized) |
| `og:title` | Same as title |
| `og:description` | Same as description |
| `og:image` | `public/og.png` (1200×630, shared across all pages) |
| `og:url` | Canonical URL |
| `og:locale` | `en_US` or `ja_JP` |
| `twitter:card` | `summary_large_image` |
| `<html lang>` | `en` or `ja` |

Sitemap: generated via `@astrojs/sitemap`.

---

## Analytics

Google Analytics 4 via `@astrojs/partytown` (offloads GA to web worker to avoid blocking main thread).

- GA Measurement ID stored in environment variable: `PUBLIC_GA_ID`
- Script injected in `BaseLayout.astro`
- No tracking in local dev (gate on `import.meta.env.PROD`)

---

## Styling Approach

- Plain CSS (no framework)
- CSS custom properties for colors, spacing, and typography
- Mobile-first breakpoints
- No flashy animations or gradients
- Consistent: card border radius, section padding, shadow style

---

## Performance

- Zero client-side JS by default
- Astro islands only if interaction is explicitly needed
- Images via Astro `<Image>` (auto optimization, WebP, lazy loading)
- No unnecessary third-party scripts
- GA offloaded via Partytown

---

## Deployment

- Vercel (static site output, `output: 'static'` in astro.config)
- `PUBLIC_GA_ID` set in Vercel environment variables
- No SSR — if introduced, reason must be documented in code comments or PR notes