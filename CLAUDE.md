# CLAUDE.md - AI Assistant Guide for cohar.co

## Project Overview

**cohar.co** is a static website repository that hosts a personal portfolio with five main sections:
- **About Me**: Professional profile and biography
- **MtG (Magic the Gathering)**: Commander deck collection
- **Games**: Video game reviews organized by gaming console
- **Music**: Audio track hosting with space horror techno aesthetic
- **Travel**: Travel photography and destination guides

The site is deployed to AWS S3 with CloudFront CDN distribution, automatically updated via GitHub Actions on pushes to the main branch.

## Technology Stack

- **Frontend**: Pure HTML5 + CSS3
- **Fonts**: Custom web fonts (Terminus, Noto Sans Symbols 2, Ubuntu, Orbitron)
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
│   │   ├── ubuntu-regular.woff2
│   │   └── orbitron-regular.woff2
│   ├── images/
│   │   ├── bg_space_seamless.png  # Site-wide background
│   │   ├── about_me/              # Professional headshot and images
│   │   ├── console_logos/         # Gaming console logos
│   │   ├── game_covers/           # Game cover art
│   │   ├── game_screenshots/      # In-game screenshots
│   │   ├── music/                 # Music track cover art
│   │   └── travel/                # Travel photos organized by destination
│   ├── audio/                     # Audio files (MP3 format)
│   ├── about/
│   │   ├── index.html             # About Me page
│   │   └── styles.css             # About Me styles
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
│   ├── music/
│   │   ├── index.html             # Music page with audio players
│   │   ├── styles.css             # Music page styles (space horror techno aesthetic)
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

### 1. About Me Section

The About Me page serves as a professional profile and biography, accessible from the homepage's sun element.

#### Page Structure
- **Navigation Bar**: Sticky navigation with "← Back to Orbit" link to homepage
- **Profile Header**:
  - Professional headshot (140px circular image)
  - Name and tagline
  - Professional links (LinkedIn, GitHub, Email)
- **About Me Section**: Biography and personal introduction
- **Professional Experience**: Work history and accomplishments
- **Skills & Expertise**: Grid layout showcasing technical and creative abilities
- **Interests**: Personal projects and hobbies
- **Footer**: Copyright and attribution

#### Design Aesthetic
- **Style**: Editorial document aesthetic with sophisticated professional branding
- **Typography**: System fonts (-apple-system, BlinkMacSystemFont, Segoe UI)
- **Color Scheme**:
  - Background: Off-white (#FCFCFC)
  - Text: Near-black (#1a1a1a)
  - Borders: Light gray (#E8E8E8)
- **Layout**: Single-column, centered content (max-width: 780px)
- **Responsive**: Mobile-first design with clean, readable typography

#### Content Management
- Profile image stored in `/images/about_me/headshot.jpg`
- Links can be updated to point to actual professional profiles
- Placeholder text sections ready for personalized content

### 2. Games Section

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

## 📋 COMPLETE GUIDE: Adding a New Game to Any Console

**IMPORTANT**: All console pages use the same CRT terminal design with pure CSS sorting. This guide ensures consistency across all consoles.

### Prerequisites
Before adding a game, ensure you have:
1. ✅ Game cover art image (JPG format, portrait orientation recommended)
2. ✅ Game screenshot(s) (JPG format, landscape orientation)
3. ✅ Review text written
4. ✅ Rating decided (1-5 stars, half-stars supported with ⯪ symbol)
5. ✅ Review date (format: YYYY-MM-DD)

### Step 1: Prepare Assets

**A. Add Cover Art**
```bash
# Place cover art in /cohar.co/images/game_covers/
# Filename: {game_name}.jpg (lowercase, underscores)
# Example: /cohar.co/images/game_covers/silent_hill_f.jpg
```

**B. Add Screenshot**
```bash
# Place screenshot in /cohar.co/images/game_screenshots/
# Filename: {game_name}.jpg (must match cover art name)
# Example: /cohar.co/images/game_screenshots/silent_hill_f.jpg
```

### Step 2: Create Game Review Page

Navigate to the console directory (e.g., `/cohar.co/games/ps5/`) and create `{game_name}.html`:

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
        <p>Your review text here with <i>game titles</i> in italics.<br><br>
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
        <span class="stars">★★★★☆</span> <!-- Adjust stars for rating -->
        <p>4 out of 5</p>
    </div>
</div>

</body>
</html>
```

**Star Rating Reference:**
- 5.0 stars: `★★★★★` (5 out of 5)
- 4.5 stars: `★★★★⯪` (4.5 out of 5)
- 4.0 stars: `★★★★☆` (4 out of 5)
- 3.5 stars: `★★★⯪☆` (3.5 out of 5)
- 3.0 stars: `★★★☆☆` (3 out of 5)
- 2.5 stars: `★★⯪☆☆` (2.5 out of 5)
- 2.0 stars: `★★☆☆☆` (2 out of 5)
- 1.5 stars: `★⯪☆☆☆` (1.5 out of 5)
- 1.0 stars: `★☆☆☆☆` (1 out of 5)

### Step 3: Update Console Index Page

**A. Add Game Card to HTML**

Open `/cohar.co/games/{console}/index.html` and add a new game card within the `<div class="games-grid">` section:

```html
<!-- Game Title: YYYY-MM-DD, X.X -->
<div class="game-card" data-date="YYYYMMDD" data-rating="XX">
    <a href="/games/{console}/game_name.html">
        <div class="game-card-inner">
            <img src="/images/game_covers/game_name.jpg" alt="Game Title">
            <div class="game-title">Game Title</div>
            <div class="game-meta">
                <span class="meta-date">YYYY-MM-DD</span>
                <span class="meta-rating">★★★★☆</span>
            </div>
        </div>
    </a>
</div>
```

**Data Attribute Format:**
- `data-date`: Remove hyphens from review date (e.g., 2025-11-13 → 20251113)
- `data-rating`: Rating × 10 (e.g., 4.5 → 45, 3.0 → 30)

**B. Update Entry Count**

Update the "DATABASE LOADED" count in the header:
```html
<div class="system-info">DATABASE LOADED: <span class="status-ok">X ENTRIES</span></div>
```

### Step 4: Update CSS Sorting Rules

**CRITICAL**: The pure CSS sorting must be updated to include the new game!

Open `/cohar.co/games/{console}/console_styles.css` and locate the sorting section (around line 357).

**A. Update the Comment**
```css
/* ═══════════════════════════════════════════════════════════════
   PURE CSS SORTING MAGIC - X GAMES  ← Update this number!
   ═══════════════════════════════════════════════════════════════ */
```

**B. Add to Date Sorting (newest first)**

Insert the new game in the correct chronological position:

```css
/* Sort by DATE (newest first - default) */
#sort-date:checked ~ .crt-screen .terminal-container .games-grid .game-card[data-date="20251113"] { order: 1; }  ← Newest
#sort-date:checked ~ .crt-screen .terminal-container .games-grid .game-card[data-date="20250922"] { order: 2; }
/* ... ADD NEW GAME IN CORRECT DATE ORDER ... */
#sort-date:checked ~ .crt-screen .terminal-container .games-grid .game-card[data-date="20240923"] { order: 7; }  ← Oldest
```

**C. Add to Rating Sorting (highest first)**

Insert the new game in the correct rating position (highest to lowest, with date as tiebreaker):

```css
/* Sort by RATING (highest first) */
/* Tie-breaking: when ratings are equal, maintain date order */
#sort-rating:checked ~ .crt-screen .terminal-container .games-grid .game-card[data-rating="45"][data-date="20250922"] { order: 1; }  ← Highest rated
/* ... ADD NEW GAME IN CORRECT RATING ORDER ... */
#sort-rating:checked ~ .crt-screen .terminal-container .games-grid .game-card[data-rating="35"] { order: 7; }  ← Lowest rated
```

**Important Sorting Notes:**
- If multiple games have the same rating, sort by date (newest first)
- Use both `data-rating` and `data-date` attributes when games share a rating
- Update ALL existing `order` values to maintain correct sequence

### Step 5: Test Locally (Optional)

1. Open `index.html` in a browser
2. Verify the game appears in the grid
3. Click the DATE and RATING sort buttons to ensure proper ordering
4. Click the game card to verify the review page displays correctly

### Step 6: Commit and Deploy

```bash
# Stage all changes
git add cohar.co/images/game_covers/{game_name}.jpg
git add cohar.co/images/game_screenshots/{game_name}.jpg
git add cohar.co/games/{console}/{game_name}.html
git add cohar.co/games/{console}/index.html
git add cohar.co/games/{console}/console_styles.css

# Commit with descriptive message
git commit -m "Add {Game Title} review to {Console}"

# Push to deploy (triggers automatic S3 upload)
git push origin main
```

### Step 7: Update All Games Master Archive

**CRITICAL**: After adding a game to any console, you MUST also update the All Games master archive!

The All Games page (`/games/all/`) displays all games from all consoles in one sortable view. When you add a new game, follow these steps:

**A. Update HTML - Add Game Card**

Open `/cohar.co/games/all/index.html` and add the new game card within `<div class="games-grid">` in the **correct chronological position** (newest first):

```html
<!-- Game Title (Console) -->
<div class="game-card" data-date="YYYYMMDD" data-rating="XX" data-console="console">
    <a href="/games/{console}/game_name.html">
        <div class="game-card-inner">
            <img src="/images/game_covers/game_name.jpg" alt="Game Title">
            <div class="game-title">Game Title</div>
            <div class="game-meta">
                <span class="meta-console">CONSOLE</span>
                <span class="meta-date">YYYY-MM-DD</span>
                <span class="meta-rating">★★★★☆</span>
            </div>
        </div>
    </a>
</div>
```

**Important Notes:**
- Add `data-console` attribute with console identifier (e.g., `data-console="ps5"`)
- Include `<span class="meta-console">CONSOLE</span>` tag (e.g., "PS5", "STEAM", "SWITCH")
- Insert in chronological order (newest at top)
- Use console identifiers: `3ds`, `ds`, `gamecube`, `gba`, `playdate`, `ps2`, `ps5`, `steam`, `switch`, `switch2`, `wii`, `wiiu`

**B. Update Entry Count**

Update the total game count in the header:
```html
<div class="system-info">DATABASE LOADED: <span class="status-ok">81 ENTRIES</span></div>
```

**C. Update CSS Sorting Rules**

Open `/cohar.co/games/all/console_styles.css` and update BOTH sorting sections:

**1. Update the Comment**
```css
/* ═══════════════════════════════════════════════════════════════
   PURE CSS SORTING MAGIC - 81 GAMES  ← Increment this number!
   ═══════════════════════════════════════════════════════════════ */
```

**2. Add to Date Sorting (newest first)**

Find the correct position based on date and insert:
```css
/* If game has unique date */
#sort-date:checked ~ .crt-screen .terminal-container .games-grid .game-card[data-date="YYYYMMDD"] { order: X; }

/* If multiple games share the same date, use data-console or data-rating to differentiate */
#sort-date:checked ~ .crt-screen .terminal-container .games-grid .game-card[data-date="YYYYMMDD"][data-console="ps5"] { order: X; }
```

**3. Add to Rating Sorting (highest first)**

Find the correct position based on rating (and date for tiebreaker):
```css
/* If game has unique rating */
#sort-rating:checked ~ .crt-screen .terminal-container .games-grid .game-card[data-rating="XX"][data-date="YYYYMMDD"] { order: Y; }

/* Games with same rating are sorted by date (newest first) */
```

**4. Renumber All Subsequent Games**

After inserting the new game, **increment the `order` value** for ALL games that come after it in each sorting section.

**Example:**
If you add a new 4.5-star game reviewed on 2026-01-15:
- In date sorting: It becomes `order: 1`, all previous games shift down (1→2, 2→3, etc.)
- In rating sorting: Find where 4.5-star games are, insert by date, renumber all lower-rated games

**D. Update Games Homepage "Recently Played" Section**

**CRITICAL**: Every new game MUST be added to the "Recently Played" section on `/games/index.html`:

1. Open `/cohar.co/games/index.html`
2. Find the `<div class="game-grid">` within the "RECENTLY PLAYED" section
3. Add the new game as the **first** game card in the grid
4. Remove the **last** (5th) game card to maintain exactly 5 games
5. Update the entry count in the "MASTER ARCHIVE" section: `<div class="archive-subtitle">XX ENTRIES • SORTABLE DATABASE</div>`

```html
<div class="game-card">
    <a href="/games/{console}/{game_name}.html">
        <div class="game-card-inner">
            <img src="/images/game_covers/{game_name}.jpg" alt="Game Title">
            <div class="game-title">Game Title</div>
        </div>
    </a>
</div>
```

**E. Update Documentation Counts**

Update the Quick Reference table below with the new console entry count and total game count.

---

## Quick Reference: Console-Specific Details

| Console | Directory | Logo | Entry Count Variable |
|---------|-----------|------|---------------------|
| **All Games (Master)** | `games/all/` | N/A | **Currently: 84** |
| Nintendo DS | `games/ds/` | `ds.png` | Currently: 1 |
| GameCube | `games/gamecube/` | `gamecube.png` | Currently: 1 |
| Game Boy Advance | `games/gba/` | `gba.png` | Currently: 17 |
| Nintendo 3DS | `games/3ds/` | `3ds.png` | Currently: 6 |
| Playdate | `games/playdate/` | `playdate.png` | Currently: 6 |
| PlayStation 2 | `games/ps2/` | `ps2.png` | Currently: 1 |
| PlayStation 5 | `games/ps5/` | `ps5.png` | Currently: 7 |
| Steam/PC | `games/steam/` | `steam.png` | Currently: 22 |
| Nintendo Switch | `games/switch/` | `switch.png` | Currently: 11 |
| Nintendo Switch 2 | `games/switch2/` | `switch2.png` | Currently: 7 |
| Nintendo Wii | `games/wii/` | `wii.png` | Currently: 1 |
| Wii U | `games/wiiu/` | `wiiu.png` | Currently: 3 |

**Total Games Across All Consoles: 84**

---

## 📋 COMPLETE GUIDE: Changing a Game's Rating

Ratings may need to be adjusted retrospectively as you play more games and want to maintain consistency across your reviews. This guide covers all files that must be updated when changing a game's rating.

### Overview: Files Affected by Rating Changes

When changing a game's rating, you must update **5 files**:

| File | What to Update |
|------|----------------|
| `games/{console}/{game_name}.html` | Star symbols and "X out of 5" text |
| `games/{console}/index.html` | Comment, `data-rating` attribute, `meta-rating` stars |
| `games/{console}/console_styles.css` | Rating sorting rules (move game to correct rating group) |
| `games/all/index.html` | `data-rating` attribute, `meta-rating` stars |
| `games/all/console_styles.css` | Rating sorting rules (move game to correct rating group) |

### Step 1: Update the Review Page

Open `/cohar.co/games/{console}/{game_name}.html` and update the rating box:

**Before (example: 4 stars):**
```html
<div class="rating-box">
    <span class="stars">★★★★☆</span>
    <p>4 out of 5</p>
</div>
```

**After (example: 3.5 stars):**
```html
<div class="rating-box">
    <span class="stars">★★★⯪☆</span>
    <p>3.5 out of 5</p>
</div>
```

**Star Rating Reference:**
| Rating | Stars | Text |
|--------|-------|------|
| 5.0 | `★★★★★` | 5 out of 5 |
| 4.5 | `★★★★⯪` | 4.5 out of 5 |
| 4.0 | `★★★★☆` | 4 out of 5 |
| 3.5 | `★★★⯪☆` | 3.5 out of 5 |
| 3.0 | `★★★☆☆` | 3 out of 5 |
| 2.5 | `★★⯪☆☆` | 2.5 out of 5 |
| 2.0 | `★★☆☆☆` | 2 out of 5 |
| 1.5 | `★⯪☆☆☆` | 1.5 out of 5 |
| 1.0 | `★☆☆☆☆` | 1 out of 5 |

### Step 2: Update Console Index Page

Open `/cohar.co/games/{console}/index.html` and find the game card:

1. **Update the comment** (for documentation):
   ```html
   <!-- Game Title: YYYY-MM-DD, 3.5 -->  ← Update rating here
   ```

2. **Update `data-rating` attribute** (rating × 10):
   ```html
   <div class="game-card" data-date="20260131" data-rating="35">  ← 3.5 × 10 = 35
   ```

3. **Update `meta-rating` stars**:
   ```html
   <span class="meta-rating">★★★⯪☆</span>
   ```

### Step 3: Update Console CSS Sorting Rules

Open `/cohar.co/games/{console}/console_styles.css` and update the rating sorting section:

1. **Remove the game from its OLD rating group**
2. **Add the game to its NEW rating group** (in correct date order - newest first)
3. **Renumber ALL affected entries** to maintain sequential order

**Example: Moving a game from 4.0 to 3.5 stars**

Before:
```css
/* 4.0 star games */
#sort-rating:checked ~ ... .game-card[data-rating="40"][data-date="20260131"] { order: 4; }  ← REMOVE
#sort-rating:checked ~ ... .game-card[data-rating="40"][data-date="20250805"] { order: 5; }
/* 3.5 star games */
#sort-rating:checked ~ ... .game-card[data-rating="35"][data-date="20260107"] { order: 8; }
```

After:
```css
/* 4.0 star games - renumbered */
#sort-rating:checked ~ ... .game-card[data-rating="40"][data-date="20250805"] { order: 4; }  ← Shifted up
/* 3.5 star games - with new entry */
#sort-rating:checked ~ ... .game-card[data-rating="35"][data-date="20260131"] { order: 7; }  ← NEW (newest date first)
#sort-rating:checked ~ ... .game-card[data-rating="35"][data-date="20260107"] { order: 8; }
```

**Critical**: After moving the game:
- All games in the OLD rating group with higher order numbers shift UP by 1
- All games in the NEW rating group at or after the insertion point shift DOWN by 1
- The new entry is inserted in DATE order (newest first) within its rating group

### Step 4: Update All Games Index Page

Open `/cohar.co/games/all/index.html` and find the game card:

1. **Update `data-rating` attribute**:
   ```html
   <div class="game-card" data-date="20260131" data-rating="35" data-console="gba">
   ```

2. **Update `meta-rating` stars**:
   ```html
   <span class="meta-rating">★★★⯪☆</span>
   ```

### Step 5: Update All Games CSS Sorting Rules

Open `/cohar.co/games/all/console_styles.css` and follow the same process as Step 3:

1. Remove the game from its OLD rating group
2. Add the game to its NEW rating group (in correct date order)
3. Renumber ALL affected entries

**Note**: The All Games page has many more entries, so be careful when renumbering. Games are sorted by:
1. Rating (highest first)
2. Date (newest first within same rating)

### Step 6: Commit and Push

```bash
git add cohar.co/games/{console}/{game_name}.html
git add cohar.co/games/{console}/index.html
git add cohar.co/games/{console}/console_styles.css
git add cohar.co/games/all/index.html
git add cohar.co/games/all/console_styles.css

git commit -m "Change {Game Title} rating from X to Y stars"
git push origin main
```

### Quick Checklist for Rating Changes

- [ ] Review page: Updated stars and "X out of 5" text
- [ ] Console index: Updated comment, `data-rating`, and `meta-rating`
- [ ] Console CSS: Moved game to correct rating group, renumbered all affected entries
- [ ] All Games index: Updated `data-rating` and `meta-rating`
- [ ] All Games CSS: Moved game to correct rating group, renumbered all affected entries
- [ ] Committed and pushed all 5 files

### Common Rating Change Mistakes

| Mistake | Consequence | Prevention |
|---------|-------------|------------|
| Forgot to update CSS sorting | Game appears in wrong position when sorted by rating | Always update BOTH console and All Games CSS files |
| Didn't renumber after removal | Gap in order numbers, unpredictable sorting | Check sequence: 1, 2, 3... with no skips |
| Wrong `data-rating` value | Sorting breaks completely | Remember: rating × 10 (e.g., 3.5 → 35) |
| Updated index but not review page | Inconsistent rating displayed | Always start with the review page |
| Inserted in wrong date position | Game appears out of order within rating group | Sort by date (newest first) within each rating |

---

## Common Pitfalls & Troubleshooting

### ❌ Issue: Game not appearing on console page
**Solution**: Check that:
- Game card HTML is inside `<div class="games-grid">`
- `data-date` and `data-rating` attributes are present
- CSS sorting rules include this game

### ❌ Issue: Image not displaying
**Solution**: Verify:
- Image path is absolute from root: `/images/game_covers/...`
- Filename matches exactly (case-sensitive)
- File extension is `.jpg` (not `.png` or `.jpeg`)

### ❌ Issue: Sorting not working
**Solution**: Ensure:
- Hidden radio inputs exist at top of HTML
- `data-date` format is `YYYYMMDD` (no hyphens)
- `data-rating` is rating × 10 (integer)
- CSS sorting rules updated with correct `order` values
- All existing games have sequential `order` numbers

### ❌ Issue: Stars not displaying correctly
**Solution**: Check:
- Using proper star symbols: `★` (filled) `☆` (empty) `⯪` (half)
- Noto Sans Symbols 2 font is loaded in CSS
- Review page uses: `<span class="stars">★★★★☆</span>`
- Console index uses: `<span class="meta-rating">★★★★☆</span>`

### ❌ Issue: Game appears on console page but not on All Games page
**Solution**: You likely forgot Step 7! Verify:
- Game card exists in `/cohar.co/games/all/index.html`
- Game has `data-console` attribute (e.g., `data-console="ps5"`)
- CSS sorting rules in `/cohar.co/games/all/console_styles.css` include this game
- Entry count is updated in the All Games header
- All subsequent games have incremented `order` values

### ❌ Issue: All Games sorting broken after adding new game
**Solution**: Check that:
- You renumbered ALL games that come after the new game in BOTH sorting sections
- The new game's `order` value doesn't conflict with existing games
- You didn't skip any numbers in the sequence (1, 2, 3... not 1, 2, 4)
- Both date sorting AND rating sorting rules were updated

### ❌ Issue: Console tag not showing on All Games page
**Solution**: Verify:
- `data-console` attribute is set on the game card
- `<span class="meta-console">CONSOLE</span>` exists in the game meta section
- Console name is uppercase (e.g., "PS5" not "ps5")
- CSS for `.meta-console` is present in `/cohar.co/games/all/console_styles.css`

---

### 3. Travel Section

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

### 4. MTG Section

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
   - **IMPORTANT**: Planet pages (about, games, music, travel, mtg) must reference stylesheets as `planet-name/styles.css` due to S3/CloudFront hosting configuration
     - Example: Music page at `/music/index.html` uses `<link rel="stylesheet" href="music/styles.css">`
     - Example: About page at `/about/index.html` uses `<link rel="stylesheet" href="about/styles.css">`
     - This applies to all resources in planet directories (CSS, JS, etc.)

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
| Update About Me content | `about/index.html`, `images/about_me/` for profile images |
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


