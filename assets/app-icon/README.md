# App Icon Assets

This directory contains the source files and exported assets for the Gus Portal app icon.

## Directory Structure

```
app-icon/
├── source/               # SVG source files (version controlled)
│   ├── icon-master.svg     # Master design at 1024x1024
│   └── icon-android-fg.svg # Android safe-zone optimized version
├── exports/              # Generated PNGs (do not edit directly)
│   ├── icon-1024.png       # iOS/web standard icon
│   ├── icon-adaptive-fg.png # Android foreground layer
│   └── splash-icon.png     # Splash screen icon
└── legacy/               # Backup of original assets
    └── app-icon.png        # Original 1365x1365 icon
```

## Design Specifications

### Master Icon (`icon-master.svg`)
- **Canvas Size**: 1024x1024 px
- **Design**: "G P" logo with geometric shapes
- **Colors**: Brown/tan (#8B7F6A) and light gray circles
- **Elements**: Central vertical bar with rounded ends, circular/arc elements on left
- **Background**: Transparent

### Android Adaptive Icon (`icon-android-fg.svg`)
- **Canvas Size**: 1024x1024 px
- **Safe Zone**: Center 660x660 px circle (66% of canvas)
- **Critical Requirement**: ALL design elements must fit within the center 660px circle
- **Reason**: Android applies device-specific masks (circle, squircle, rounded square) that crop outer 17% from each edge

### Visual Safe Zone Guide
```
┌─────────────────────────────┐
│         Outer 182px         │  ← May be cropped on Android
│    ┌─────────────────┐      │
│    │                 │      │
│    │   Safe Zone     │      │  ← 660x660 center circle
│    │   660x660       │      │     Keep all content here
│    │                 │      │
│    └─────────────────┘      │
│                             │
└─────────────────────────────┘
      1024x1024 total canvas
```

## Export Workflow

### From `icon-master.svg`:
1. Export as PNG at 1024x1024
2. Save to `exports/icon-1024.png`
3. Copy to `exports/splash-icon.png`

### From `icon-android-fg.svg`:
1. Export as PNG at 1024x1024
2. Save to `exports/icon-adaptive-fg.png`

### Export Methods:
- **Figma**: Select frame → Export → PNG @ 1x (1024x1024)
- **Inkscape**: File → Export PNG → Width: 1024, Height: 1024
- **Online Tools**: svgtopng.com, cloudconvert.com

## Testing Checklist

### Pre-Build
```bash
# Verify dimensions
sips -g pixelWidth -g pixelHeight assets/app-icon/exports/*.png

# Should output 1024x1024 for all files

# Clear Expo cache
npx expo start -c
```

### Build & Test
```bash
# Android build
npx expo run:android

# iOS build
npx expo run:ios

# Web test
npm run web
```

### Visual Testing

#### Android (Critical)
- [ ] Test on Pixel device (circular mask)
- [ ] Test on Samsung device (rounded square mask)
- [ ] Check app launcher grid - no cropping
- [ ] Check recent apps switcher
- [ ] Verify all logo parts visible

#### iOS
- [ ] Check home screen icon
- [ ] Verify rounded corners applied correctly
- [ ] Test at different zoom levels

#### Web
- [ ] Browser tab favicon
- [ ] PWA "Add to Home Screen" icon

#### Splash Screen
- [ ] Launch app - check splash displays correctly
- [ ] Verify no cropping or distortion

## Future Updates

1. **Always edit the SVG source files** - Never edit PNG exports directly
2. Edit `source/icon-master.svg` for design changes
3. Edit `source/icon-android-fg.svg` if safe zone needs adjustment
4. Re-export all PNG files from updated SVGs
5. Test on both Android and iOS devices
6. Commit both source SVGs and exported PNGs

## Configuration

The app icon is referenced in `app.json`:

```json
{
  "expo": {
    "icon": "./assets/app-icon/exports/icon-1024.png",
    "splash": {
      "image": "./assets/app-icon/exports/splash-icon.png",
      "backgroundColor": "#F8F9F7"
    },
    "android": {
      "adaptiveIcon": {
        "foregroundImage": "./assets/app-icon/exports/icon-adaptive-fg.png",
        "backgroundColor": "#F8F9F7"
      }
    },
    "web": {
      "favicon": "./assets/app-icon/exports/icon-1024.png"
    }
  }
}
```

## Android Adaptive Icon Background

- **Color**: `#F8F9F7` (light gray, matches current branding)
- **Purpose**: Shows behind the foreground icon when system applies masks
- **Note**: This color fills the background of the adaptive icon on Android devices

## Troubleshooting

### Icon appears cropped on Android
- Check that `icon-android-fg.svg` has all elements within the 660px center circle
- Re-export `icon-adaptive-fg.png` from the corrected SVG
- Clear Expo cache: `npx expo start -c`
- Rebuild Android app

### Icon looks blurry
- Verify PNG exports are exactly 1024x1024 (not scaled)
- Ensure SVG exports at proper resolution
- Check that transparent background is preserved

### Changes not appearing
- Clear Expo cache: `npx expo start -c`
- Rebuild the app completely
- Check that `app.json` paths are correct

## Resources

- [Expo Icon Guidelines](https://docs.expo.dev/develop/user-interface/splash-screen-and-app-icon/)
- [Android Adaptive Icons](https://developer.android.com/guide/practices/ui_guidelines/icon_design_adaptive)
- [iOS App Icons](https://developer.apple.com/design/human-interface-guidelines/app-icons)
