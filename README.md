# Gus Portal

A cross-platform mobile app built with React Native and Expo, running on Android, iOS, and Web.

## Tech Stack

- **Framework**: React Native 0.76 + Expo 52
- **Language**: TypeScript
- **Styling**: NativeWind (Tailwind for React Native)
- **State**: Redux Toolkit
- **Routing**: Expo Router (file-based)
- **Testing**: Jest + React Native Testing Library
- **Runtime**: Node 22

## Get Started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npm start           # Metro bundler
   npm run android     # Android emulator
   npm run ios         # iOS simulator
   npm run web         # Web browser
   ```

## Development

```bash
npm test               # Run tests with coverage
npm run lint           # Check code style
npm run update-snapshots  # Update test snapshots
```

## AI Assistant Support

This project includes comprehensive documentation for AI coding assistants:

- **[AI_INSTRUCTIONS.md](AI_INSTRUCTIONS.md)** - Quick start guide for AI assistants
- **[ai.config.yml](ai.config.yml)** - Full project configuration
- **[docs/](docs/)** - Platform rules and stack reference
- **[skills/](skills/)** - Specialized workflows (test generation, platform validation, security)

Works with Claude Code, Cursor, GitHub Copilot, and other AI coding tools.
