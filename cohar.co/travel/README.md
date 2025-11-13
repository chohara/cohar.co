# Travel Photography Section

## Concept

A starship-themed navigation interface displaying Earth as a flat equirectangular projection. Users view destinations through a futuristic console with cyan holographic aesthetics and can click markers to explore photo galleries.

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

## Adding Locations

1. **Copy `/travel/banff/` as template** for new location
2. **Update gallery HTML** with location name, photo paths, and camera badges
3. **Get real coordinates** for your destination (use Google Maps)
4. **Calculate map position** using the equirectangular projection formula:
   - `left: (longitude + 180) / 360 × 100%`
   - `top: (90 - latitude) / 180 × 100%`

5. **Add destination marker** to `/travel/index.html`:

```html
<!-- Example: Tokyo, Japan (35.6762°N, 139.6503°E) -->
<!-- left = (139.6503 + 180) / 360 * 100 = 88.8% -->
<!-- top = (90 - 35.6762) / 180 * 100 = 30.2% -->

<a href="/travel/tokyo/" class="destination-marker" style="left: 88.8%; top: 30.2%;">
    <div class="marker-pulse"></div>
    <div class="marker-label">Tokyo, Japan</div>
    <div class="preview-thumbnails">
        <img src="/images/travel/tokyo/photo1.jpg" alt="Preview 1">
        <img src="/images/travel/tokyo/photo2.jpg" alt="Preview 2">
        <img src="/images/travel/tokyo/photo3.jpg" alt="Preview 3">
    </div>
</a>
```

## Map Positioning Examples

**Americas:**
- New York: `left: 19.8%; top: 27.6%`
- Los Angeles: `left: 17.3%; top: 31.1%`
- Buenos Aires: `left: 30.5%; top: 68.9%`

**Europe:**
- London: `left: 49.9%; top: 28.5%`
- Paris: `left: 50.7%; top: 27.3%`
- Rome: `left: 51.4%; top: 26.8%`

**Asia:**
- Tokyo: `left: 88.8%; top: 30.2%`
- Bangkok: `left: 77.8%; top: 36.1%`
- Dubai: `left: 54.3%; top: 36.2%`

**Oceania:**
- Sydney: `left: 84.2%; top: 68.9%`

## Camera Badges

```html
<span class="camera-badge ricoh">Ricoh GR II</span>
<span class="camera-badge iphone">iPhone</span>
```

## Design System

- **Color palette:** Cyan/blue holographic (#4db8ff) with space black background
- **Typography:** Terminus monospace font for retro-futuristic feel
- **Aesthetic:** Minimal starship console with corner brackets and grid overlay
- **Pure CSS:** No JavaScript required for the navigation interface
- **Responsive:** Breakpoints at 1024px, 768px, 480px

## Technical Notes

- Flat world map uses equirectangular projection (2:1 aspect ratio)
- Continents rendered with CSS radial gradients for recognizable Earth geography
- Latitude/longitude grid overlay for navigation authenticity
- Markers use real geographic coordinates for accuracy
- All relative paths for portability
- Screen "boot" animation on page load
- Pulsing cyan markers with hover previews
