# SEO Plan — National Roofing Solutions

Local SEO plan for ranking in Metro Melbourne and the Macedon Ranges.

## Current state

**Working well**
- Fast Netlify site with clear services and contact details
- Basic `RoofingContractor` schema
- Strong before/after photo potential

**Gaps**
- Single-page site (one URL for everything)
- No dedicated service, location, or blog pages
- Missing sitemap, Open Graph, and per-page meta tags

---

## Strategy

For a local roofing business, focus on:

1. **Google Business Profile + reviews** — highest impact
2. **Service pages** — rank for specific jobs
3. **Location pages** — rank for suburb searches
4. **Targeted blog posts** — support service pages, not replace them

---

## Recommended site structure

```text
/
/services/roof-pressure-washing
/services/re-bedding-repointing
/services/roof-painting
/services/roof-restoration
/services/roof-repairs
/services/gutters-downpipes
/locations/melbourne
/locations/macedon-ranges
/locations/[suburb]
/about
/contact
/gallery
/blog
/blog/[slug]
```

Each service page needs: what it is, process, FAQs, photos, service area, quote CTA.

Each location page needs: unique local content (not copy-paste with suburb swapped).

---

## Blog posts — yes, but targeted

Write posts that match real customer searches:

- Roof restoration cost in Melbourne
- Signs your roof needs re-bedding
- Roof pressure washing vs roof painting
- Storm damage roof checklist
- Moss on roofs in Victoria

**Skip** generic filler content. Aim for 1–2 quality posts per month.

---

## 90-day roadmap

### Month 1 — Foundation
- Optimise Google Business Profile and collect reviews
- Add `sitemap.xml`, `robots.txt`, Open Graph, expanded schema
- Add React Router for real page URLs
- Build 6 core service pages

### Month 2 — Local + content
- Build 5 quality location pages (suburbs you actually service)
- Add gallery page with before/after photos
- Publish 4 blog posts linked to service pages

### Month 3 — Scale
- Publish 4 more blog posts
- Run review campaign with happy clients
- Fix NAP consistency across directories (name, phone, email)

---

## Off-site SEO

- **Reviews:** Google first, then Facebook
- **Citations:** Keep business details identical everywhere
- **Directories:** Yellow Pages, True Local, hipages, etc.
- **Social:** Post job photos regularly on Facebook

---

## What matters most

| High impact | Lower impact |
|-------------|--------------|
| Google Business Profile + reviews | Random blog posts |
| Dedicated service pages | Keyword stuffing |
| Real before/after photos | Duplicate suburb pages |
| Fast mobile site | National generic content |
| Local Melbourne/Victoria content | Fancy intro animations |

---

## Technical note

Move from anchor sections (`#services`) to real routes with unique titles and meta descriptions per page. React Router on Netlify is enough to start.

**Realistic timeline:** 3–6 months for meaningful local SEO results.
