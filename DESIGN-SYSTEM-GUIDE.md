# 🎨 NUMO DESIGN SYSTEM - IMPLEMENTATION GUIDE

## ✅ COMPLETED

### Design System Files Created:

1. **css/design-system.css** (1040 lines)

   - Complete design token system
   - Inter font from Google Fonts
   - Colors: Dark Navy #0F1C2E, EU Blue #2563EB, Global Orange #F59E0B
   - Typography, spacing, layout utilities
   - Components: buttons, cards, hero, header, footer, forms
   - Accessibility features

2. **css/pages.css** (510 lines)

   - Page-specific layouts
   - Homepage components (solutions grid, process steps, markets, trust grid)
   - About, Services, Markets, FAQ, Contact layouts
   - Mobile responsive optimizations

3. **index.html** - FULLY UPDATED ✅
   - Hero section with overlay
   - Solution cards with orange numbers
   - Process steps with gradient circles
   - Dark markets section
   - Trust grid with icons
   - Modern CTA section
   - Structured footer

---

## 📋 NEXT: Apply to Remaining Pages

### Quick Update Pattern for Each Page:

#### 1. Update `<head>` Section:

```html
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Page Title - NUMO</title>
  <link rel="stylesheet" href="css/design-system.css" />
  <link rel="stylesheet" href="css/pages.css" />
  <script src="js/seo.js"></script>
</head>
```

#### 2. Update Header:

```html
<header>
  <div class="container">
    <nav>
      <!-- existing nav content -->
    </nav>
  </div>
</header>
```

#### 3. Wrap Main Content:

```html
<main>
  <section class="section">
    <div class="container">
      <!-- content -->
    </div>
  </section>

  <section class="section section--gray">
    <div class="container">
      <!-- alternate bg content -->
    </div>
  </section>

  <section class="section section--dark">
    <div class="container">
      <!-- dark section -->
    </div>
  </section>
</main>
```

#### 4. Update Footer:

```html
<footer>
  <div class="container">
    <div class="footer__bottom">
      <p>&copy; 2026 NUMO Energy Solutions. All rights reserved.</p>
      <p style="margin-top: var(--space-4);">
        <a href="legal/imprint.html">Imprint</a>
        <span style="margin: 0 var(--space-2); color: var(--gray-500);">•</span>
        <a href="legal/privacy.html">Privacy Policy</a>
        <span style="margin: 0 var(--space-2); color: var(--gray-500);">•</span>
        <a href="legal/cookies.html">Cookie Policy</a>
        <span style="margin: 0 var(--space-2); color: var(--gray-500);">•</span>
        <a href="legal/terms.html">Terms of Use</a>
      </p>
    </div>
  </div>
</footer>
```

#### 5. Replace Scripts:

```html
<!-- Scripts -->
<script src="js/header.js"></script>
<script src="js/i18n.js"></script>
<script src="js/cookie-consent.js"></script>
```

---

## 🎯 Component Classes Reference

### Layout:

- `.container` - Max-width 1280px, centered, responsive padding
- `.section` - Vertical padding 48px mobile, 80px desktop
- `.section--large` - Extra padding 120px
- `.section--dark` - Dark Navy background
- `.section--gray` - Light gray background

### Grid:

- `.grid-2` - 2 column responsive grid
- `.grid-3` - 3 column responsive grid
- `.grid-4` - 4 column responsive grid

### Buttons:

- `.btn` - Base button
- `.btn--primary` - EU Blue filled
- `.btn--secondary` - EU Blue outline
- `.btn--white` - White button (for dark backgrounds)
- `.btn--large` - Larger padding

### Cards:

- `.card` - Base card with shadow, hover effect
- `.card--dark` - Dark background variant
- `.card__title` - Card heading
- `.card__icon` - Icon element

### Typography:

- `.text-large` - Larger paragraph text
- `.text-muted` - Muted gray text
- `.text-center` - Center alignment
- `.hero__title` - Large hero heading
- `.hero__subtitle` - Hero subtext

### Specific Components:

- `.hero` - Hero section with overlay support
- `.solution-card` with `.solution-card__number` - Numbered cards
- `.process-step` with `.process-step__number` - Process steps
- `.market-block` - Markets overview blocks
- `.trust-item` - Trust/benefits grid items
- `.cta-section` - Call-to-action sections

---

## 📄 Page-Specific Instructions

### about.html:

- Use `.about-intro` for two-column intro
- Use `.values-grid` for values section
- Use `.value-card` for individual values (with border-left accent)

### Services Pages (8 files):

- Use `.service-hero` for top section
- Use `.service-benefits` for bulleted lists with checkmarks
- Use `.card` for solution breakdowns

### Markets Pages (4 files):

- Use `.market-stats` with `.stat-card` for statistics
- Use `.market-block` for regional highlights

### how-we-work.html:

- Use `.process-grid` with `.process-step`
- Use `.card` for working formats

### partners.html:

- Use `.partner-types` grid
- Use `.partner-type` cards

### projects.html:

- Use `.use-cases-grid`
- Use `.use-case` cards

### faq.html:

- Use `.faq-list` wrapper
- Use `.faq-item` with `.faq-question` and `.faq-answer`

### contact.html:

- Use `.contact-grid` two-column layout
- Use `.contact-method` for contact info
- Use `.contact-form` wrapper

### Legal Pages (4 files):

- Use `.legal-content` wrapper
- Use `.last-updated` badge
- Use `.cookie-table` for cookies page

---

## 🎨 Color Usage Guidelines

### Primary Colors:

- **Dark Navy (#0F1C2E)**: Header, footer, dark sections, headings
- **EU Blue (#2563EB)**: Primary buttons, links, accents
- **White (#FFFFFF)**: Main backgrounds, text on dark
- **Graphite (#1F2933)**: Body text, secondary elements

### Accent (USE SPARINGLY):

- **Global Orange (#F59E0B)**:
  - Solution card numbers
  - Small accent dots
  - Icons on dark backgrounds
  - Max 1-2 orange elements per screen

### Grays:

- `--gray-50` to `--gray-900` for backgrounds, borders, muted text

---

## 📱 Mobile Responsive Rules

All components are mobile-first responsive:

- Grids collapse to single column on mobile
- Hero title scales: 36px mobile → 48px tablet → 60px desktop
- Section padding: 48px mobile → 80px desktop
- Container padding: 16px mobile → 32px desktop
- Buttons stack vertically on mobile

---

## ♿ Accessibility Features

- Focus visible styles (2px EU Blue outline)
- Proper heading hierarchy (one H1 per page)
- ARIA labels where needed
- Color contrast WCAG AA compliant
- Prefers-reduced-motion support
- Keyboard navigation support

---

## 🚀 Performance Notes

- Inter font loaded from Google Fonts (only used weights)
- CSS organized for minimal specificity conflicts
- No heavy animation libraries
- Transitions: 150-250ms (fast, modern)
- Images should use lazy loading: `loading="lazy"`

---

## ✅ Quality Checklist

Before marking a page as complete:

- [ ] Header has `.container` wrapper
- [ ] All sections have `.section` and `.container`
- [ ] Footer has proper structure
- [ ] Scripts use header.js (no inline dropdown code)
- [ ] CSS links updated to design-system.css and pages.css
- [ ] All buttons use `.btn--primary` or `.btn--secondary`
- [ ] Cards use `.card` class
- [ ] Hero sections use `.hero` and `.hero__content`
- [ ] Typography classes applied (`.text-large`, `.text-center`)
- [ ] Mobile tested (320px - 768px)
- [ ] Accessibility checked (focus styles, contrast)
- [ ] Orange accent used max 1-2 times per page

---

## 🔧 Troubleshooting

**Issue**: Old styles showing

- Solution: Clear browser cache or hard refresh (Cmd+Shift+R)

**Issue**: Dropdown not working

- Solution: Ensure header.js is loaded and header has proper structure

**Issue**: Grid not responsive

- Solution: Check `.grid-2`, `.grid-3` classes are applied correctly

**Issue**: Colors look different

- Solution: Ensure design-system.css is loaded BEFORE pages.css

---

## 📊 Remaining Work

### High Priority (Core Pages):

1. about.html
2. services/index.html
3. markets/index.html
4. how-we-work.html
5. contact.html

### Medium Priority:

6. partners.html
7. projects.html
8. faq.html

### Individual Services (8 pages):

9. services/power-generation.html
10. services/solar-energy.html
11. services/energy-storage.html
12. services/hybrid-backup.html
13. services/project-coordination.html
14. services/supplier-matching.html
15. services/consulting.html
16. services/index.html

### Individual Markets (3 pages):

17. markets/europe.html
18. markets/ukraine.html
19. markets/africa.html

### Legal (4 pages):

20. legal/imprint.html
21. legal/privacy.html
22. legal/terms.html
23. legal/cookies.html

---

## 📝 Example: Full Page Structure

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Page Title - NUMO</title>
    <link rel="stylesheet" href="css/design-system.css" />
    <link rel="stylesheet" href="css/pages.css" />
    <script src="js/seo.js"></script>
  </head>
  <body>
    <header>
      <div class="container">
        <nav>
          <!-- NAV CONTENT (same as index.html) -->
        </nav>
      </div>
    </header>

    <main>
      <!-- Hero (if needed) -->
      <section class="hero">
        <div class="hero__content">
          <h1 class="hero__title">Page Title</h1>
          <p class="hero__subtitle">Subtitle text</p>
          <div class="hero__actions">
            <a href="#" class="btn btn--primary btn--large">Primary</a>
            <a href="#" class="btn--white btn--large">Secondary</a>
          </div>
        </div>
      </section>

      <!-- Regular Section -->
      <section class="section">
        <div class="container">
          <h2 class="text-center">Section Title</h2>
          <p class="text-center text-large">Intro text</p>

          <div class="grid-3">
            <div class="card">
              <h3 class="card__title">Card Title</h3>
              <p>Card content</p>
            </div>
            <!-- More cards -->
          </div>
        </div>
      </section>

      <!-- Dark Section -->
      <section class="section section--dark">
        <div class="container">
          <h2 class="text-center">Dark Section</h2>
          <p class="text-center">Content on dark background</p>
        </div>
      </section>

      <!-- CTA -->
      <section class="section">
        <div class="container">
          <div class="cta-section">
            <h2>CTA Headline</h2>
            <p>CTA text</p>
            <a href="contact.html" class="btn btn--primary btn--large"
              >CTA Button</a
            >
          </div>
        </div>
      </section>
    </main>

    <footer>
      <div class="container">
        <div class="footer__bottom">
          <p>&copy; 2026 NUMO Energy Solutions. All rights reserved.</p>
          <p style="margin-top: var(--space-4);">
            <a href="legal/imprint.html">Imprint</a>
            <span style="margin: 0 var(--space-2); color: var(--gray-500);"
              >•</span
            >
            <a href="legal/privacy.html">Privacy Policy</a>
            <span style="margin: 0 var(--space-2); color: var(--gray-500);"
              >•</span
            >
            <a href="legal/cookies.html">Cookie Policy</a>
            <span style="margin: 0 var(--space-2); color: var(--gray-500);"
              >•</span
            >
            <a href="legal/terms.html">Terms of Use</a>
          </p>
        </div>
      </div>
    </footer>

    <!-- Scripts -->
    <script src="js/header.js"></script>
    <script src="js/i18n.js"></script>
    <script src="js/cookie-consent.js"></script>
  </body>
</html>
```

---

## 🎯 Final Notes

**Design Philosophy:**

- Clean, minimal, industrial-energy aesthetic
- Professional European industrial trust
- International B2B focused
- No aggressive marketing, calm and reliable
- Lots of "air" (whitespace)
- Delicate animations, no parallax

**Key Success Factors:**

1. Consistent component usage across all pages
2. Proper nesting: header > container > nav
3. Proper nesting: section > container > content
4. Mobile-first responsive approach
5. Accessibility compliance
6. Performance optimization

**Time Estimate for Remaining Pages:**

- Core pages (5): ~30-45 min each
- Individual service/market pages (13): ~15-20 min each
- Legal pages (4): ~10 min each
- Total: ~6-8 hours for complete implementation

---

## 📞 Support

For questions or issues:

- Check browser console for errors
- Verify CSS files are loading (Network tab)
- Test on different devices/browsers
- Validate HTML structure
- Check accessibility with screen reader

**Created:** January 9, 2026
**Version:** 1.0
**Status:** Design System Complete ✅ | Homepage Complete ✅ | Remaining Pages: In Progress 🚧
