# Travel Photography Section

## Concept

A tactical starship navigation interface with **multi-view map system**. Users can switch between three orbital perspectives:
- **GLOBAL** - Full world equirectangular projection
- **AMERICAS** - Zoomed North/South America view
- **EUROPE** - Zoomed European region view

The futuristic console features cyan holographic aesthetics, smooth view transitions, and red tactical markers. Pure CSS implementation with no JavaScript required.

## Structure

```
/travel/
  ├── index.html          (Starship navigation console - flat Earth map)
  ├── styles.css
  └── /[location]/
      ├── index.html      (Photo gallery)
      └── styles.css

/images/travel/[location]/
  └── photo*.jpg          (1200-1800px gallery images + thumbnails)
```

## Adding Locations (Multi-View System)

### Step 1: Create Gallery Page
1. **Copy `/travel/banff/` as template** for new location
2. **Update gallery HTML** with location name and photo paths

### Step 2: Determine Which Views to Show
Decide which map views should display your marker:
- **North/South America locations**: Add to GLOBAL + AMERICAS
- **European locations**: Add to GLOBAL + EUROPE
- **Other continents**: Add to GLOBAL only (for now)

### Step 3: Calculate Positions for Each View

**For GLOBAL view** (world-map.svg):
- Get real coordinates from Google Maps
- Formula:
  - `left: (longitude + 180) / 360 × 100%`
  - `top: (90 - latitude) / 180 × 100%`

**For AMERICAS view** (usa.svg):
- Position visually based on the zoomed USA/Canada map
- Typical range: `left: 20-80%`, `top: 10-70%`

**For EUROPE view** (europe.svg):
- Position visually based on the zoomed Europe map
- Typical range: `left: 30-70%`, `top: 20-60%`

### Step 4: Add Markers to HTML

**Example: Adding Paris, France**

Paris should appear in GLOBAL + EUROPE views, so add to both layers:

```html
<!-- In the GLOBAL VIEW layer (map-world) -->
<div class="map-layer map-world">
    <div class="cloud-layer"></div>

    <!-- Paris: 48.8566°N, 2.3522°E -->
    <!-- GLOBAL position: left = (2.3522 + 180) / 360 * 100 = 50.65% -->
    <!--                 top = (90 - 48.8566) / 180 * 100 = 22.86% -->
    <a href="/travel/paris/" class="destination-marker region-world region-europe"
       style="left: 50.65%; top: 22.86%;">
        <div class="marker-pulse"></div>
        <div class="marker-label">Paris, France</div>
        <div class="preview-thumbnails">
            <img src="/images/travel/paris/photo1.jpg" alt="Preview 1">
            <img src="/images/travel/paris/photo2.jpg" alt="Preview 2">
            <img src="/images/travel/paris/photo3.jpg" alt="Preview 3">
        </div>
    </a>
</div>

<!-- In the EUROPE VIEW layer (map-europe) -->
<div class="map-layer map-europe">
    <div class="cloud-layer"></div>

    <!-- Paris - EUROPE zoomed position (adjust visually) -->
    <a href="/travel/paris/" class="destination-marker region-world region-europe"
       style="left: 45%; top: 35%;">
        <div class="marker-pulse"></div>
        <div class="marker-label">Paris, France</div>
        <div class="preview-thumbnails">
            <img src="/images/travel/paris/photo1.jpg" alt="Preview 1">
            <img src="/images/travel/paris/photo2.jpg" alt="Preview 2">
            <img src="/images/travel/paris/photo3.jpg" alt="Preview 3">
        </div>
    </a>
</div>
```

**Example: Adding New York, USA**

New York should appear in GLOBAL + AMERICAS views:

```html
<!-- In GLOBAL VIEW (map-world) -->
<a href="/travel/nyc/" class="destination-marker region-world region-usa"
   style="left: 19.8%; top: 27.6%;">
    <div class="marker-pulse"></div>
    <div class="marker-label">New York, USA</div>
    <div class="preview-thumbnails">
        <img src="/images/travel/nyc/photo1.jpg" alt="Preview 1">
        <img src="/images/travel/nyc/photo2.jpg" alt="Preview 2">
        <img src="/images/travel/nyc/photo3.jpg" alt="Preview 3">
    </div>
</a>

<!-- In AMERICAS VIEW (map-usa) -->
<a href="/travel/nyc/" class="destination-marker region-world region-usa"
   style="left: 72%; top: 32%;">
    <div class="marker-pulse"></div>
    <div class="marker-label">New York, USA</div>
    <div class="preview-thumbnails">
        <img src="/images/travel/nyc/photo1.jpg" alt="Preview 1">
        <img src="/images/travel/nyc/photo2.jpg" alt="Preview 2">
        <img src="/images/travel/nyc/photo3.jpg" alt="Preview 3">
    </div>
</a>
```

### Key Points:
- **Region classes are critical**: `region-world`, `region-usa`, `region-europe`
- **Duplicate the entire marker** in each view it should appear
- **Adjust positions** separately for each map's coordinate system
- **GLOBAL positions** use geographic formula, **zoomed views** need visual adjustment

## GLOBAL View Position Reference

These positions are calculated using the geographic formula and work for the world map:

**Americas:**
- Banff, Canada: `left: 21.9%; top: 19.1%`
- New York, USA: `left: 19.8%; top: 27.6%`
- Los Angeles, USA: `left: 17.3%; top: 31.1%`
- Buenos Aires, Argentina: `left: 30.5%; top: 68.9%`

**Europe:**
- London, UK: `left: 49.9%; top: 28.5%`
- Paris, France: `left: 50.7%; top: 27.3%`
- Rome, Italy: `left: 51.4%; top: 26.8%`

**Asia:**
- Tokyo, Japan: `left: 88.8%; top: 30.2%`
- Bangkok, Thailand: `left: 77.8%; top: 36.1%`
- Dubai, UAE: `left: 54.3%; top: 36.2%`

**Oceania:**
- Sydney, Australia: `left: 84.2%; top: 68.9%`

**Note:** AMERICAS and EUROPE zoomed views require visual positioning - use the browser inspector to fine-tune placement.

## View System

The interface uses **hidden radio buttons** for state management:
- Click **GLOBAL** - Shows world map with all destinations
- Click **AMERICAS** - Zooms to USA/Canada/South America
- Click **EUROPE** - Zooms to European region

Smooth 0.6s crossfade transitions with subtle zoom effect (scale 0.95 → 1.0).

## Design System

- **Color palette:**
  - Cyan UI elements (#4db8ff)
  - Red tactical markers (#ff3333)
  - Deep space background gradient
- **Typography:** Terminus monospace font for retro-futuristic feel
- **Aesthetic:** Tactical starship console with corner brackets, grid overlay, and twinkling stars
- **Pure CSS:** No JavaScript required - radio buttons manage view state
- **Responsive:** Breakpoints at 1024px, 768px, 480px
  - Desktop: Sector buttons in top-left
  - Mobile: Centered buttons below title

## Technical Notes

- **Three-layer map system** with stacked SVG backgrounds
- **State management** via CSS `:checked` pseudo-class on hidden radio inputs
- **GLOBAL view**: Equirectangular projection (world-map.svg)
- **AMERICAS view**: Zoomed USA/Canada map (usa.svg)
- **EUROPE view**: Zoomed Europe map (europe.svg)
- **Marker visibility**: Controlled by region classes + active view
- Latitude/longitude grid overlay for navigation authenticity
- Screen "boot" animation on page load
- Pulsing red markers with hover previews
- Grid pulse and corner bracket glow during view transitions
- Two-layer animated star field for deep space ambiance
