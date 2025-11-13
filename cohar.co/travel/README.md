# Travel Photography Section

## Structure

```
/travel/
  ├── index.html          (Earth orbital view)
  ├── styles.css
  └── /[location]/
      ├── index.html      (Photo gallery)
      └── styles.css

/images/travel/[location]/
  ├── thumb1-3.jpg        (150-200px previews for Earth view)
  └── photo*.jpg          (1200-1800px gallery images)
```

## Adding Locations

1. Copy `/travel/banff/` as template for new location
2. Update HTML with location name, photo paths, and camera badges
3. Add destination marker to `/travel/index.html`:

```html
<a href="/travel/[location]/" class="destination-marker" style="--lat: Y%; --lon: X%;">
    <div class="marker-pulse"></div>
    <div class="marker-label">Location Name</div>
    <div class="preview-thumbnails">
        <img src="/images/travel/[location]/thumb1.jpg" alt="Preview 1">
        <img src="/images/travel/[location]/thumb2.jpg" alt="Preview 2">
        <img src="/images/travel/[location]/thumb3.jpg" alt="Preview 3">
    </div>
</a>
```

## Globe Positioning

**Longitude (--lon):**
- North America: 20-35%
- Europe: 45-55%
- Asia: 65-80%

**Latitude (--lat):**
- Northern: 15-35%
- Equatorial: 45-50%
- Southern: 55-70%

**Examples:**
- Banff: `--lat: 25%; --lon: 30%;`
- Tokyo: `--lat: 35%; --lon: 70%;`
- Paris: `--lat: 30%; --lon: 45%;`

## Camera Badges

```html
<span class="camera-badge ricoh">Ricoh GR II</span>
<span class="camera-badge iphone">iPhone</span>
```

## Technical

- Pure CSS, no JavaScript
- Masonry layout via CSS columns
- Responsive breakpoints: 1200px, 768px, 480px
- All relative paths
