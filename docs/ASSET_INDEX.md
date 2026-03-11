# Asset Documentation Index

Quick reference for locating asset documentation and understanding asset structure in the Gus Portal project.

## 📱 App Icons

**Location**: `assets/app-icon/`
**Documentation**: [`assets/app-icon/README.md`](../assets/app-icon/README.md)
**Current Icon**: `assets/app-icon/app-icon.png`

### Key Files
- `app-icon.png` - Main app icon (1365x1365) currently in use
- `source/icon-master.svg` - Master SVG design file
- `source/icon-android-fg.svg` - Android adaptive icon foreground
- `exports/` - Generated PNG exports for different purposes
- `legacy/` - Backup of original assets

### Configuration
Referenced in `app.json`:
- `icon` → `./assets/app-icon/app-icon.png`
- `splash.image` → `./assets/app-icon/app-icon.png`
- `android.adaptiveIcon.foregroundImage` → `./assets/app-icon/app-icon.png`
- `web.favicon` → `./assets/app-icon/app-icon.png`

### Quick Commands
```bash
# Verify icon dimensions
sips -g pixelWidth -g pixelHeight assets/app-icon/*.png

# Clear cache and rebuild after icon changes
npx expo start -c
```

---

## 🔤 Fonts

**Location**: `assets/fonts/`
**Documentation**: None (configuration in `app.json`)

### Installed Fonts
- **SpaceMono**: `SpaceMono-Regular.ttf` - Monospace font
- **Spectral** (serif family):
  - Regular, Light, Medium, SemiBold, ExtraBold
  - Italic variants for Light, Medium, SemiBold, ExtraBold

### Configuration
Fonts are loaded via expo-font plugin in `app.json`:
```json
"plugins": [
  ["expo-font", {
    "fonts": [
      "./assets/fonts/spectral/Spectral-Regular.ttf",
      "./assets/fonts/spectral/Spectral-Light.ttf",
      // ... other variants
    ]
  }]
]
```

### Usage in Code
```tsx
// Fonts are automatically loaded by Expo
style={{ fontFamily: 'Spectral-Regular' }}
```

---

## 🖼️ Images

**Location**: `assets/images/`
**Documentation**: None (legacy Expo template images)

### Files
- `splash.png` - Legacy splash screen (not in use)
- `icon.png`, `adaptive-icon.png`, `favicon.png` - Legacy icons (not in use)
- `react-logo*.png` - React logo assets at various resolutions
- `partial-react-logo.png` - Partial logo variant

**Note**: These are template images from Expo initialization. The active app icons are in `assets/app-icon/`.

---

## 🎨 Asset Guidelines

### Adding New Assets
1. Place files in appropriate subdirectory under `assets/`
2. Create a README.md if the asset requires documentation
3. Update this index file
4. Reference in `app.json` if needed for build process

### Image Optimization
- Use PNG for icons and images with transparency
- Keep app icons at 1024x1024 minimum
- Android adaptive icons need 66% safe zone (see app-icon README)

### Platform Considerations
- iOS: Requires square icons, system applies corner radius
- Android: Requires adaptive icons with foreground/background layers
- Web: Uses standard favicon formats

---

## 🔗 Related Documentation

- [`docs/ENVIRONMENTS.md`](./ENVIRONMENTS.md) - Platform compatibility
- [`docs/LLM_CONTEXT.md`](./LLM_CONTEXT.md) - Project overview
- [`app.json`](../app.json) - Asset configuration