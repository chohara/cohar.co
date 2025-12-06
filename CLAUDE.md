# CLAUDE.md - AI Assistant Guide for cohar.co

## Project Overview

**cohar.co** is a static website repository that hosts a personal portfolio with three main sections:
- **MtG (Magic the Gathering)**: Commander deck collection
- **Games**: Video game reviews organized by gaming console
- **Travel**: Travel photography and destination guides

The site is deployed to AWS S3 with CloudFront CDN distribution, automatically updated via GitHub Actions on pushes to the main branch.

## Technology Stack

- **Frontend**: Pure HTML5 + CSS3 (no frameworks)
- **Fonts**: Custom web fonts (Terminus, Noto Sans Symbols 2, Ubuntu)
- **Deployment**: AWS S3 + CloudFront
- **CI/CD**: GitHub Actions
- **Version Control**: Git

## Repository Structure

```
cohar.co/
├── .github/
│   └── workflows/
│       └── s3_upload.yml          # GitHub Actions deployment pipeline
├── cohar.co/                      # Site root (deployed to S3)
│   ├── index.html                 # Solar system-themed homepage
│   ├── styles.css                 # Homepage styles
│   ├── error.html                 # 404 error page
│   ├── favicon.ico                # Site favicon
│   ├── 47.svg                     # SVG favicon
│   ├── fonts/                     # Web fonts
│   │   ├── terminus.woff2
│   │   ├── notosanssymbols2.woff2
│   │   └── ubuntu-regular.woff2
│   ├── images/
│   │   ├── bg_space_seamless.png  # Site-wide background
│   │   ├── console_logos/         # Gaming console logos
│   │   ├── game_covers/           # Game cover art
│   │   ├── game_screenshots/      # In-game screenshots
│   │   └── travel/                # Travel photos organized by destination
│   ├── games/
│   │   ├── index.html             # Games hub page
│   │   ├── styles.css             # Games hub styles
│   │   ├── 3ds/                   # Nintendo 3DS reviews
│   │   ├── ds/                    # Nintendo DS reviews
│   │   ├── gamecube/              # GameCube reviews
│   │   ├── gba/                   # Game Boy Advance reviews
│   │   ├── playdate/              # Playdate reviews
│   │   ├── ps5/                   # PlayStation 5 reviews
│   │   ├── steam/                 # PC/Steam reviews
│   │   ├── switch/                # Nintendo Switch reviews
│   │   ├── switch2/               # Nintendo Switch 2 reviews
│   │   ├── wii/                   # Nintendo Wii reviews
│   │   └── wiiu/                  # Wii U reviews
│   ├── mtg/
│   │   ├── index.html             # MTG deck gallery
│   │   └── style.css              # MTG styles
│   └── travel/
│       ├── index.html             # Interactive globe with destinations
│       ├── styles.css             # Travel page styles
│       ├── README.md              # Travel section documentation
│       └── banff/                 # Example destination folder
│           └── index.html
└── README.md                      # Repository documentation
```

## Console Directory Structure

Each console directory follows this pattern:

```
games/{console}/
├── index.html              # Console game listing page
├── console_styles.css      # Shared styles for this console
├── styles.css             # Review page styles (shared)
├── {game_name}.html       # Individual game review pages
└── ...
```

## Content Organization

### 1. Games Section

#### Console-Level Organization
- Each console has its own directory under `/games/`
- Console index pages display all games for that platform
- Console logos are stored in `/images/console_logos/`

#### Game Review Structure
Every game review page includes:
- **Title Box**: Game name
- **Cover Box**: Game cover art (from `/images/game_covers/`)
- **Review Box**: Written review with:
  - Main review text with italicized game titles
  - "Play it for the:" section with bulleted list
  - Review date (format: `YYYY-MM-DD`)
  - Optional quote
  - Screenshot (from `/images/game_screenshots/`)
- **Rating Box**: Star rating (1-5 stars using ★☆ symbols)

#### File Naming Conventions
- HTML files: lowercase with underscores (e.g., `silent_hill_f.html`)
- Images: match HTML filename (e.g., `silent_hill_f.jpg`)
- Cover art: stored in `/images/game_covers/`
- Screenshots: stored in `/images/game_screenshots/`

### 2. Travel Section

The travel page features an interactive globe with multiple view levels:
- **GLOBAL**: World map view
- **USA**: Zoomed USA map
- **EUROPE**: Zoomed Europe map

Each destination includes:
- Marker with location coordinates
- Preview thumbnails (3 images)
- Destination folder with full photo gallery

**Adding New Destinations:**
1. Create folder in `/images/travel/{destination}/`
2. Add photos with naming: `YYMMDD_N.jpg` (e.g., `250507_1.jpg`)
3. Create destination page in `/travel/{destination}/index.html`
4. Add marker to appropriate map layer in `/travel/index.html`
5. Calculate coordinates and convert to map percentage positions

### 3. MTG Section

Simple gallery layout linking to external Manabox deck lists:
- Commander card images fetched from Scryfall
- Partner commanders displayed side-by-side
- Cards link to Manabox deck URLs

## Styling Conventions

### Design Theme
- **Aesthetic**: Retro sci-fi, space-themed
- **Color Palette**:
  - Background: Deep space blue (`#0b0c2a`)
  - Primary text: Light gray-blue (`#d4d4f5`)
  - Accent: Neon green (`#00ff00`)
  - Gold: Star ratings (`#ffd700`)
- **Typography**: Terminus (monospace font) for terminal aesthetic
- **Background**: Seamless space texture (`bg_space_seamless.png`)

### CSS Architecture

#### Shared Styles
- All pages use consistent space theme background
- Box elements use `rgba(0, 0, 0, 0.7)` for semi-transparent backgrounds
- Consistent border-radius: `10px` for boxes, `8px` for images
- Box shadow: `0 0 10px rgba(0, 0, 0, 0.5)` or `0 0 15px rgba(0,0,0,0.5)`

#### Console-Specific Styles
Each console directory has two CSS files:
- **`styles.css`**: Game review page styles (consistent across all consoles)
- **`console_styles.css`**: Console listing page styles

#### Review Page Layout
Standard flex column layout:
```
.review-container (flex column, centered, max-width: 800px)
├── .title-box (neon green h1)
├── .cover-box (cover art, max-width: 300px)
├── .review-box (main content)
└── .rating-box (stars + text)
```

#### Font Loading
Custom fonts loaded via `@font-face`:
- Terminus: `/fonts/terminus.woff2`
- Noto Sans Symbols 2: `/fonts/notosanssymbols2.woff2` (for star symbols)

### Star Rating System
- Use Noto Sans Symbols 2 font family
- Filled star: `★`
- Empty star: `☆`
- Always include text: "X out of 5"

## Development Workflow

### Local Development
1. Edit HTML/CSS files directly in `cohar.co/` directory
2. Test locally by opening HTML files in browser
3. All paths are absolute from site root (e.g., `/images/`, `/games/`)

### Adding a New Game Review

#### Step-by-Step Process:
1. **Prepare Assets**:
   - Add cover art to `/images/game_covers/{game_name}.jpg`
   - Add screenshot to `/images/game_screenshots/{game_name}.jpg`

2. **Create Review Page**:
   - Copy template from existing review in same console
   - Place in `/games/{console}/{game_name}.html`
   - Update: title, cover path, review text, rating, date, screenshot

3. **Update Console Index**:
   - Add game card to `/games/{console}/index.html`
   - Include game cover and title

4. **Update Games Hub** (for featured games):
   - Optionally add to "Recent Favorites" in `/games/index.html`
   - Keep to 5 most recent games

5. **Commit and Push**:
   - Commit all changes (HTML + images)
   - Push to main branch
   - GitHub Actions will auto-deploy

### Adding a New Console

1. **Create Directory Structure**:
   ```bash
   mkdir cohar.co/games/{console}
   ```

2. **Add Required Files**:
   - `index.html` (console listing page)
   - `console_styles.css` (styling for listing)
   - `styles.css` (copy from another console - review page styles)

3. **Add Console Logo**:
   - Place PNG in `/images/console_logos/{console}.png`
   - Update `/games/index.html` to include new console card

4. **Create First Game Review** (follow game review process above)

### Adding Travel Destinations

1. **Prepare Images**:
   - Create folder: `/images/travel/{destination}/`
   - Add photos: `YYMMDD_N.jpg` format

2. **Create Destination Page**:
   - Create `/travel/{destination}/index.html`
   - Use gallery layout

3. **Add Map Marker**:
   - Edit `/travel/index.html`
   - Add marker in appropriate map layer (world/usa/europe)
   - Calculate coordinates to percentage position
   - Add 3 preview thumbnails

### Image Guidelines

- **Format**: JPG for photos, PNG for logos/graphics
- **Cover Art**: Consistent aspect ratio (typically portrait)
- **Screenshots**: In-game captures, landscape orientation
- **File Size**: Optimize for web (compress images)
- **Naming**: Lowercase, underscores, descriptive

## Deployment Process

### Automated via GitHub Actions

**Trigger**: Push to `main` branch

**Workflow** (`.github/workflows/s3_upload.yml`):
1. Checkout repository
2. Configure AWS credentials (from GitHub secrets)
3. Sync `./cohar.co/` to S3 bucket with `--delete` flag
4. Create CloudFront cache invalidation for `/*`

**Required GitHub Secrets**:
- `AWS_ACCESS_KEY_ID`
- `AWS_SECRET_ACCESS_KEY`
- `AWS_CLOUDFRONT_DISTRIBUTION_ID`

**AWS Region**: `us-east-1`

### Manual Deployment
Not typically needed, but can be done via AWS CLI:
```bash
aws s3 sync ./cohar.co/ s3://cohar.co --delete
aws cloudfront create-invalidation --distribution-id=<ID> --paths '/*'
```

## Key Conventions for AI Assistants

### When Editing Content

1. **ALWAYS Read Before Editing**
   - Read existing files to understand structure
   - Match existing patterns and conventions
   - Preserve spacing and indentation

2. **File Path Conventions**
   - Use absolute paths from site root: `/images/`, `/games/`, etc.
   - Never use relative paths like `../`
   - Paths are case-sensitive

3. **Naming Conventions**
   - HTML files: lowercase with underscores
   - Images: match corresponding HTML filename
   - No spaces in filenames

4. **HTML Structure**
   - Standard HTML5 doctype
   - Include viewport meta tag for mobile
   - Link CSS with proper path
   - Use semantic HTML

5. **CSS Practices**
   - Load custom fonts at top of CSS
   - Maintain consistent color scheme
   - Use rgba for semi-transparent backgrounds
   - Keep box shadows and border radius consistent

6. **Content Guidelines**
   - Game titles in italics (`<i>`)
   - Review dates: right-aligned, format `YYYY-MM-DD`
   - Star ratings: use proper font (Noto Sans Symbols 2)
   - Quotes: centered, italicized

### When Adding New Features

1. **Preserve Existing Structure**
   - Don't reorganize without explicit request
   - Match existing patterns
   - Keep similar sections consistent

2. **Image Management**
   - Place images in appropriate subdirectory
   - Use descriptive filenames
   - Compress for web delivery

3. **Testing Considerations**
   - All paths work from S3 (absolute from root)
   - No server-side processing
   - Pure static HTML/CSS
   - Mobile responsive

### Common Tasks Quick Reference

| Task | Files to Edit |
|------|---------------|
| Add new game review | `games/{console}/{game}.html`, `games/{console}/index.html`, optionally `games/index.html` |
| Add new console | Create `games/{console}/`, add to `games/index.html` |
| Add travel destination | `travel/index.html`, create `travel/{dest}/index.html` |
| Add MTG deck | `mtg/index.html` |
| Update homepage | `index.html`, `styles.css` |
| Add images | Appropriate subdirectory under `images/` |

### Git Workflow

1. **Branch Naming**: Use provided branch (format: `claude/claude-md-{identifier}`)
2. **Commits**: Clear, descriptive messages
3. **Push**: To designated branch, triggers deployment on merge to main

### Code Quality

- **No JavaScript**: Site is purely HTML/CSS
- **Semantic HTML**: Use appropriate tags
- **Accessibility**: Include alt text for images
- **Mobile-First**: Site should be responsive
- **Performance**: Optimize images, minimize CSS

### Prohibited Actions

- Do not create build tools or package managers (none needed)
- Do not add JavaScript frameworks
- Do not reorganize directory structure without approval
- Do not change color scheme without approval
- Do not modify GitHub Actions workflow without approval

## Troubleshooting

### Common Issues

**Images not displaying:**
- Check path is absolute from root (`/images/...`)
- Verify file exists in correct directory
- Check filename matches exactly (case-sensitive)

**Styles not applied:**
- Verify CSS path in `<link>` tag
- Check for syntax errors in CSS
- Ensure font files are in `/fonts/`

**Deployment fails:**
- Check GitHub Actions logs
- Verify AWS credentials in secrets
- Ensure no file permission issues

**CloudFront cache:**
- Changes may take a few minutes to propagate
- Invalidation is automatic in workflow
- Can manually invalidate via AWS console

## Additional Resources

- **AWS S3**: Hosts static files
- **CloudFront**: CDN for fast global delivery
- **Scryfall**: MTG card images API
- **Manabox**: MTG deck builder platform

## File Templates

### Game Review Template

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Game Title (Console)</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>

<div class="review-container">
    <div class="title-box">
        <h1>Game Title</h1>
    </div>

    <div class="cover-box">
        <img src="/images/game_covers/game_name.jpg" alt="Cover Art">
    </div>

    <div class="review-box">
        <p>Review text here with <i>game titles</i> in italics.<br><br>
        Play it for the:
        </p>
        <ul>
            <li>Reason one</li>
            <li>Reason two</li>
            <li>Reason three</li>
        </ul>
        <p style="text-align: right">Reviewed on YYYY-MM-DD</p>
        <br>
        <p style="text-align: center"><i>Optional memorable quote</i></p>
        <img src="/images/game_screenshots/game_name.jpg">
    </div>

    <div class="rating-box">
        <span class="stars">★★★★☆</span>
        <p>4 out of 5</p>
    </div>
</div>

</body>
</html>
```

### Game Card Template (for index pages)

```html
<div class="game-card">
    <a href="/games/{console}/{game_name}.html">
        <img src="/images/game_covers/{game_name}.jpg" alt="Game Title">
        <p>Game Title</p>
    </a>
</div>
```

---

**Last Updated**: 2025-12-06
**Repository**: github.com/chohara/cohar.co
**Site**: https://cohar.co
