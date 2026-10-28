# DUO Safety Consultancy — Official Corporate Web Platform (`duosafety.co.uk`)

Authoritative digital presence for **DUO Safety Consultancy Ltd**, a UK-based Occupational Health & Safety (HSE) and **CDM 2015** Compliance Consultancy headquartered in **Liverpool, Merseyside (105 Boundary Street, L5 9YJ)** and operating nationwide across Great Britain.

---

## 🏛️ Architecture & Tech Stack

- **Framework:** [Next.js 16 (App Router)](https://nextjs.org/)
- **Language:** TypeScript (`strict` mode)
- **Styling:** Tailwind CSS v4 (`@tailwindcss/turbopack` + custom `Precision Safety & Compliance` design tokens)
- **Typography:** `Outfit` / `Space Grotesk` (Display & Structural Headings) + `Inter` (Technical Body & Statutory Documentation) via `next/font/google`
- **Icons:** Google Material Symbols Outlined
- **Deployment & CI/CD:** GitHub (`main` branch) $\rightarrow$ **Vercel** Automatic Production Deployment

---

## 🎨 Brand Identity & Color System

| Token | Hex Code | Usage |
| :--- | :--- | :--- |
| `duo-deep-blue` (`secondary`) | `#0f5f96` | Primary Brand Deep Blue, Navigation, Core Badges |
| `duo-bright-blue` (`accent-electric`) | `#137dc5` | Primary Action CTAs, Interactive Highlights |
| `duo-navy` (`surface-dark`) | `#0a3c5f` | Authoritative Hero, Dark Sections & Corporate Footer |
| `compliance-green` | `#10B981` | Statutory Verification Badges, SLA Status Indicators |
| `surface-canvas` | `#F8FAFC` | Crisp Architectural Slate Canvas Background |

---

## 📄 Site Structure (App Router)

- **`/` (`app/page.tsx`) — Home:**
  - Real Industrial Photography Hero Section + Principal Contractor Authority Card (`3.73M+ Man-Hours`, `5,208+ Inducted Operatives`, `100% Principal Contractor CDM 2015 SLA`)
  - Corporate Executive Overview with Liverpool HQ Operations Imagery
  - **Option A — Sticky Scrollytelling (`components/DynamicScrollyServices.tsx`):** Interactive scroll-driven 4-pillar showcase (`Principal Contractor & CDM 2015`, `Statutory Audits & LOLER/PUWER`, `Workforce Inductions & Competency Vault`, `Dynamic RAMS & Risk Engineering`) with cross-fading photography and live telemetry HUD
  - **Option B — Interactive DUO HS Tracking System™ Cockpit (`components/HseTrackerShowcase.tsx`):** Live anonymized application simulation replicating `hse-test.yoldaki.com` (`Project & Man-Hours Tracker`, `12-Month Activity Heatmap`, `People & Competency Matrix`, `Dynamic RAMS & LOLER/PUWER`, `Offline-Ready Mobile Site Walk`) + direct portal login links
  - Multi-Industry Safe Operations with Bespoke Sector Photography (Construction & Civil, Automotive BIW/Assembly, High-Throughput Manufacturing, Chemical & Process)
- **`/about` (`app/about/page.tsx`) — About Us:**
  - Institutional Profile, Statutory Dutyholder Overview, Mission & Core Philosophy (`Zero Harm Benchmark`, `Statutory Absolute`, `Live Operational Reality`), Key Expertise Areas, and Why Choose DUO Safety.
- **`/services` (`app/services/page.tsx`) — Services Portfolio:**
  - Interactive React Category Filtering (`All 8 Services`, `CDM & Statutory`, `Site Inspections & Risk`, `Inductions & Training`, `Plant, Height & Incident`)
  - 8 Detailed Statutory Service Cards (`DUO-CDM-01` through `DUO-PLT-08`)
  - 4-Step Methodical Service Delivery Framework
  - CDM 2015 Dutyholder Regulatory Engagement Spectrum Table
- **`/location` (`app/location/page.tsx`) — Location & UK Coverage:**
  - Registered Facility Details (`105 Boundary Street, Liverpool, L5 9YJ`) & Transit Proximity
  - Interactive UK Geospatial Coverage Vector Map (Tier 1 Merseyside, Tier 2 North West Corridor, Tier 3 National UK)
  - Direct Site Visit & Meeting Dispatch Form
- **`/contact` (`app/contact/page.tsx`) — Contact & Dispatch:**
  - 24-Hour Urgent Statutory SLA Banner
  - Operational Instructions & Technical Inquiry Form
  - Registered Office Sidebar & Statutory Protocol Framework

---

## 🚀 Development & Deployment Workflow

```bash
# Install dependencies
npm install

# Run production build check locally
npm run build

# Push changes to trigger automatic Vercel deployment
git add .
git commit -m "Update DUO Safety web platform"
git push
```

---

## 📋 Changelog & Development Log

### `2026-10-28` — Dynamic Scrollytelling, Live HSE Tracker Cockpit & Bespoke UK Sector Photography
- **Bespoke Industrial & Corporate Photography (`public/images/`):**
  - Generated and integrated 6 photorealistic UK HSE & Principal Contractor visual assets (`hero-construction-safety.jpg`, `sector-construction.jpg`, `sector-automotive.jpg`, `sector-manufacturing.jpg`, `sector-chemical.jpg`, `about-liverpool-hq.jpg`) across Home, About, and Location pages.
- **Principal Contractor & CDM 2015 Positioning:**
  - Elevated **Appointed Principal Contractor** duties across the Hero section, Services portfolio (`DUO-CDM-01`), Corporate Overview, and global header/footer navigation.
- **Option A — Sticky Scrollytelling Architecture (`components/DynamicScrollyServices.tsx`):**
  - Built an IntersectionObserver-driven two-column interactive stage where scrolling through the 4 core practice pillars dynamically cross-fades the sticky visual stage and updates live statutory telemetry indicators.
- **Option B — Interactive DUO HS Tracking System™ Showcase (`components/HseTrackerShowcase.tsx`):**
  - Engineered a rich, privacy-safe (100% anonymized) interactive application cockpit modeled after `https://hse-test.yoldaki.com` featuring live KPI tiles (`5,208 Inducted People`, `108 Active RAMS`, `219 Plant & MEWPs`, `3.73M+ Man-Hours`), a 12-month inspection heatmap, CSCS/Competency card vault table, RAMS register, and Mobile Site Walk observation cards.
- **Direct Portal Integration:**
  - Added direct external launch links to `https://hse-test.yoldaki.com` in `components/Header.tsx` (top bar, desktop navbar, and mobile drawer), `components/Footer.tsx`, and the Home page.
