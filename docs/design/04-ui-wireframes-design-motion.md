# Gym Pro Platform - UI, Design System, Motion (Livrable 4)

## 1. Wireframes textuels (pages vitrine)

### 1) Accueil
- Header sticky: logo, nav, switch langue (FR/EN/AR), CTA `Essai gratuit`.
- Hero (`BackgroundSection heroDark`):
  - H1 proposition de valeur
  - micro-copy trust
  - CTA primaire `Demarrer essai` + secondaire `Visite guidee`
- Bloc equipements (cards icon + stats)
- Bloc coachs (cards profil, disponibilites)
- Bloc planning teaser (3 prochains cours)
- Bloc pricing teaser (3 cards + toggle mensuel/trimestriel/annuel)
- Bloc avis (carousel léger)
- FAQ accordions
- Map + contact rapide + WhatsApp floating action button
- Footer legal/seo locales

### 2) A propos
- Hero editorial
- Timeline histoire
- Valeurs en 3 colonnes
- Equipe/certifications

### 3) Tarifs / Packages
- Toggle periodicite
- 4 PricingCards: Basic/Standard/Premium/VIP
- Add-ons + coupons
- Comparateur features
- CTA checkout

### 4) Cours & Planning
- Toolbar: date range + filtres coach/type/intensite
- Calendrier semaine/mois
- Drawer details session
- Action `Reserver`/`Annuler`/`Rejoindre waitlist`

### 5) Coachs
- Grid profils coachs
- Filtres specialites
- Slots dispo (private coaching)
- Booking rapide

### 6) Galerie / Visite
- Masonry optimisee
- 360 tour (OPTION)

### 7) Avis
- Notes moyennes + distribution
- Liste avis verifies
- CTA Google Reviews

### 8) Blog SEO
- Listing categories/tags
- Cards articles
- Pages `Gym a [Ville]`

### 9) Contact
- Form securise (honeypot + hCaptcha)
- Infos directes + horaires
- Maps embed

### 10) Legal
- CGU / Confidentialite / Cookies / Remboursement

## 2. Wireframes textuels (espace membre)

- Dashboard membre:
  - abonnement actif
  - prochain cours
  - factures recentes
- Reservations:
  - liste a venir/passees
  - annulation
- Billing:
  - historique paiements
  - telechargement PDF
  - bouton Stripe Customer Portal
- Profil:
  - infos perso
  - preferences notifications
  - consent RGPD

## 3. Design system (packages/ui)

Composants:
- `Button`, `IconButton`, `Badge`, `Card`, `PricingCard`
- `Tabs`, `Modal`, `Drawer`, `Alert`, `Toast`
- `Input`, `Select`, `DatePicker`, `Checkbox`, `Radio`
- `Skeleton`, `EmptyState`
- `DataTable`, `Pagination`, `Filters`, `SearchBar`, `Breadcrumbs`

Tokens CSS (exemple):
```css
:root {
  --bg-0: #090b10;
  --bg-1: #0f131a;
  --surface: #151b24;
  --text-strong: #f4f7fb;
  --text-muted: #9ba7ba;
  --accent: #18c2a4;
  --danger: #ff5b6e;
  --radius-sm: 10px;
  --radius-md: 16px;
  --radius-lg: 24px;
  --shadow-soft: 0 8px 24px rgba(0, 0, 0, 0.28);
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-6: 24px;
  --space-8: 32px;
}
```

Typographie:
- Titres: `Space Grotesk` (fort, premium)
- Texte: `Manrope` (lisible)

A11y AA:
- focus ring visible
- contrastes >= AA
- navigation clavier complete
- `aria-label` pour controles icon-only

## 4. Background imagery system (packages/ui)

Composant:
- `BackgroundSection` dans `packages/ui/src/background/BackgroundSection.tsx`

Props:
- `imageSrc`
- `overlayPreset`: `heroDark | sectionDark | pricingAbstract | lightClean`
- `noise` (boolean)
- `priority` (hero uniquement)
- `mobileVariant` (asset light mobile)
- `disableOnReducedMotion`

Structure des couches:
- Layer 0: image AVIF/WebP
- Layer 1: overlay gradient translucide
- Layer 2: noise/pattern subtil
- Layer 3: contenu

Assets naming strict:
- `public/backgrounds/hero-gym.avif`
- `public/backgrounds/coach.avif`
- `public/backgrounds/equipment.avif`
- `public/backgrounds/pricing-abstract.avif`
- `public/backgrounds/noise.webp`
- `public/backgrounds/pattern.webp`

Regles:
- pas de texte dans image
- overlay obligatoire pour contraste AA
- max 3 sections photo (Hero + Coachs + Galerie)
- pas de parallax mobile
- `prefers-reduced-motion`: image statique et animation off

Assets & Licensing:
- Referencer source + licence dans `docs/assets/assets-licensing.md`.

## 5. Motion specs (Framer Motion)

Motion tokens:
```ts
export const motionTokens = {
  duration: { fast: 0.15, base: 0.24, slow: 0.34 },
  easing: {
    standard: [0.22, 0.61, 0.36, 1],
    exit: [0.4, 0, 1, 1]
  },
  stagger: { list: 0.05 }
};
```

Transitions:
- Page transition: fade + translateY 8px (desktop), fade only (mobile).
- Cards in-view: opacity + translateY, threshold 0.2.
- Hover premium: scale 1.01 et shadow soft.
- Press: scale 0.98.
- Modal/Drawer: spring soft + backdrop fade.

Contraintes perf:
- animer uniquement `transform` et `opacity`
- pas de blur anime full-screen
- desactiver animations non essentielles sur mobile

## 6. I18N / RTL

- Textes centralises dans dictionaries `fr/en/ar`.
- Switch langue persistant cookie + localStorage.
- Direction dynamique:
  - FR/EN => `dir=ltr`
  - AR => `dir=rtl`
- Inversion logique:
  - chevrons
  - order icon/text
  - alignement formulaires/tableaux

## 7. SEO multi-langue

- routes localisees `/fr`, `/en`, `/ar`
- `hreflang` sur pages correspondantes
- metadata/OG par locale
