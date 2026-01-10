# Travel Photography Section

## Concept

A **Mission Log Archive** interface displaying travel destinations as tactical briefing cards. Mass Effect-inspired design with a scrollable grid of location cards, each featuring a hero image, metadata, and direct links to photo galleries.

The futuristic console features cyan holographic aesthetics, scanline overlays, and card-based organization. Pure CSS implementation with no JavaScript required.

## Structure

```
/travel/
  ├── index.html          (Mission Log archive with card grid)
  ├── styles.css
  └── /[location]/
      ├── index.html      (Photo gallery)
      └── styles.css

/images/travel/[location]/
  └── photo*.jpg          (1200-1800px gallery images)
```

## Adding New Locations

### Quick 6-Step Process

1. **Copy the template** from HTML comments in `/travel/index.html`
2. **Update location name** and country
3. **Update `href`** to match folder name (e.g., `/travel/paris/`)
4. **Update hero image path** (use your best photo from the location)
5. **Update visit date** (format: YYYY-MM-DD)
6. **Update image count** (total photos in that location's gallery)
7. **Paste at the TOP** of the grid for newest-first chronological order

### Detailed Example: Adding Paris, France

**Step 1: Copy the template block from HTML comments**

The template is located in `/travel/index.html` between the comment markers:
```html
<!-- ═══════════════════════════════════════════════════════════
     NEW LOCATION TEMPLATE
     ═══════════════════════════════════════════════════════════
```

**Step 2: Customize the template**

```html
<article class="mission-card">
    <a href="/travel/paris/" class="card-link">
        <div class="card-image">
            <img src="/images/travel/paris/250815_1.jpg" alt="Paris, France">
            <div class="image-overlay"></div>
        </div>
        <div class="card-content">
            <div class="card-header">
                <h2 class="location-name">Paris</h2>
                <span class="location-country">France</span>
            </div>
            <div class="card-meta">
                <span class="meta-item">
                    <span class="meta-label">DATE:</span>
                    <span class="meta-value">2025-08-15</span>
                </span>
                <span class="meta-divider">│</span>
                <span class="meta-item">
                    <span class="meta-label">IMAGES:</span>
                    <span class="meta-value">24</span>
                </span>
            </div>
        </div>
    </a>
</article>
```

**Step 3: Paste at the top**

Insert the new card as the **first entry** in `<div class="log-container">` to maintain chronological order (newest first).

**Step 4: Update status bar counters**

In the footer, update:
- `DESTINATIONS:` count (increment by 1)
- `TOTAL IMAGES:` count (add the new location's image count)

### File Naming Conventions

- **Location folders**: lowercase with hyphens (e.g., `banff`, `new-york`, `paris`)
- **Image files**: `YYMMDD_N.jpg` format (e.g., `250507_1.jpg`, `250507_2.jpg`)
- **Hero images**: Use the first photo or best photo from the location

## Design System

### Color Palette
- **Primary UI**: Cyan (#00b8ff) - borders, titles, metadata
- **Secondary**: Deep blue (#0066cc) - accents, dividers
- **Success**: Green (#00ff88) - operational status
- **Background**: Deep space gradient (#0a1520 → #000000)
- **Cards**: Dark translucent (#000a14 with 0.8 opacity)

### Typography
- **Headers**: Terminus monospace (tactical, futuristic)
- **Body**: Ubuntu (clean, readable)
- **Metadata**: Terminus monospace (technical readout)

### Layout
- **Grid**: `repeat(auto-fill, minmax(350px, 1fr))`
- **Card aspect ratio**: 16:10 for images
- **Responsive breakpoints**: 1024px, 768px, 480px

### Visual Effects
- Scanline overlay on cards (subtle holographic feel)
- Image gradient overlay (depth and contrast)
- Card hover: lift + border glow + image zoom
- Sticky header/footer with backdrop blur
- Static starfield background

## Technical Notes

### CSS Grid System
- **Desktop (1024px+)**: 3-4 columns depending on viewport width
- **Tablet (768px-1023px)**: 2 columns
- **Mobile (<768px)**: 1 column

### Performance Optimizations
- **Zero animations**: All effects are static for instant loading
- **CSS-only design**: No JavaScript dependencies
- **Optimized filters**: Minimal use of heavy CSS filters
- **Fast rendering**: Simple DOM structure with efficient CSS

### Card Components
Each mission card includes:
- **Hero image** (16:10 aspect ratio, object-fit: cover)
- **Image overlay** (gradient for visual depth)
- **Location name** (cyan, glowing text)
- **Country name** (secondary text)
- **Visit date** (metadata)
- **Image count** (metadata)
- **Scanline effect** (::before pseudo-element)

### Accessibility
- Semantic HTML5 elements (`<article>`, `<header>`, `<footer>`)
- Descriptive alt text for images
- Clear hover states for interactivity
- Keyboard-navigable links

## Current Locations

- **Banff, Canada** (2025-05-07) - 7 images

## Maintenance

### Adding a Location Checklist
- [ ] Create location folder in `/images/travel/[location]/`
- [ ] Add photos with `YYMMDD_N.jpg` naming
- [ ] Create gallery page in `/travel/[location]/index.html`
- [ ] Copy mission card template from comments
- [ ] Customize card with location details
- [ ] Paste at top of grid for chronological order
- [ ] Update footer counters (destinations + total images)
- [ ] Commit and push changes

### Quality Guidelines
- **Hero images**: High quality, representative of the location
- **Image count**: Accurate count of photos in gallery
- **Dates**: Use actual visit date in YYYY-MM-DD format
- **Naming**: Consistent lowercase, descriptive folder names

---

**Last Updated**: 2026-01-10
**Design Version**: Mission Log Archive v2.0
**Total Destinations**: 1
