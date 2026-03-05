# Lyrics Display App

A beautiful, keyboard-accessible web application for displaying song lyrics one line at a time.

![Lyrics Display](https://img.shields.io/badge/status-active-success) ![HTML5](https://img.shields.io/badge/HTML5-CSS3--JS-blue) ![No Dependencies](https://img.shields.io/badge/Dependencies-None-green)

## Features

- **Smooth Transitions** — Elegant fade animations between lyrics lines
- **Auto-Play Mode** — Automatically advances through lyrics with configurable timing
- **Keyboard Shortcuts** — Fully navigable without a mouse
  - `Space` — Play/Pause
  - `←` — Previous line
  - `→` — Next line
- **Progress Tracking** — Visual progress bar and line counter
- **Responsive Design** — Works on desktop, tablet, and mobile devices
- **Music-Themed Aesthetic** — Elegant dark theme with gold accents

## Quick Start

1. Clone or download the repository
2. Open `index.html` in any modern web browser

```
lyrics-display/
├── index.html    # Main HTML structure
├── style.css     # Styling and animations
├── script.js     # Application logic
├── lyrics.txt    # Source lyrics
└── README.md     # This file
```

## Usage

1. Click **Play** or press `Space` to start auto-advancing through lyrics
2. Use **Previous**/`Next` buttons or `←`/`→` arrow keys to navigate manually
3. The progress bar shows your current position in the song

## Customization

### Change Lyrics

Edit the `lyrics` array in `script.js`:

```javascript
const lyrics = [
    "Your first line here",
    "Your second line here",
    // ... add more lines
];
```

### Adjust Timing

Modify the interval in `script.js` (currently 2000ms):

```javascript
}, 2000); // Change to desired milliseconds
```

### Update Styling

CSS custom properties in `style.css`:

```css
:root {
    --accent-primary: #c9a227;    /* Main gold color */
    --accent-secondary: #e8d5a3; /* Light gold */
    --bg-dark: #0d0d12;           /* Background */
    --bg-card: #16161f;           /* Card background */
}
```

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Works on all modern mobile browsers

## License

MIT License — Feel free to use and modify for your own projects.
