# AI Assistant Instructions - Gus Portal

> **For all AI coding assistants**: Claude Code, Cursor, GitHub Copilot, Cody, Continue, etc.

## Quick Start

This is a **React Native 0.76 + Expo 52** mobile app (Android, iOS, Web).

**🚨 CRITICAL**: This app runs on **three platforms**. Never use web-only APIs (`window`, `document`, `localStorage`) or HTML elements (`<div>`, `<button>`). Always use React Native components.

## Documentation Structure

📁 **Detailed Instructions**:
- [`docs/LLM_CONTEXT.md`](docs/LLM_CONTEXT.md) - Stack overview & project structure
- [`docs/ENVIRONMENTS.md`](docs/ENVIRONMENTS.md) - Platform compatibility rules (**READ FIRST**)
- [`ai.config.yml`](ai.config.yml) - Testing & documentation config

📁 **Specialized Skills** (for specific tasks):
- [`skills/rn-test-generator/`](skills/rn-test-generator/SKILL.md) - Generate Jest/RNTL tests
- [`skills/rn-platform-validation/`](skills/rn-platform-validation/SKILL.md) - Platform compatibility checks
- [`skills/rn-security/`](skills/rn-security/SKILL.md) - Security best practices

## Essential Rules

### Platform Compatibility

| ✅ USE | ❌ NEVER USE |
|--------|--------------|
| `View`, `Text`, `TouchableOpacity` | `<div>`, `<span>`, `<button>` |
| `AsyncStorage` | `localStorage`, `sessionStorage` |
| Expo SDK APIs | Browser APIs (`window.*`, `document.*`) |
| React Native libraries | Web-only npm packages |

**Before writing any code**, ask: *"Will this work on Android, iOS, AND Web?"*

### Styling
- **Primary**: NativeWind (Tailwind for RN) - use `className` prop
- **Example**: `<View className="flex-1 p-4 bg-white">`
- **Fallback**: StyleSheet only when NativeWind insufficient

### Testing
- **Framework**: Jest + React Native Testing Library
- **Coverage target**: 80%
- **Always mock**: `@expo/vector-icons` in tests
- **See**: `skills/rn-test-generator/SKILL.md` for patterns

### State Management
- **Global**: Redux Toolkit
- **Local**: React hooks (`useState`, `useReducer`)
- **Routing**: Expo Router (file-based in `app/`)

## Development Commands

```bash
npm start              # Metro bundler (default)
npm run android/ios/web
npm test               # Run Jest tests
npm run lint           # ESLint check
```

## Before You Code

1. ✅ Read `docs/ENVIRONMENTS.md` for platform constraints
2. ✅ Check existing code patterns for consistency
3. ✅ Verify any new packages are React Native compatible
4. ✅ Write tests for new features (80% coverage target)

## Common Mistakes to Avoid

1. ❌ Using `window.localStorage` instead of `AsyncStorage`
2. ❌ Using `<div>` instead of `<View>`
3. ❌ Importing web-only libraries
4. ❌ Forgetting to mock Expo icons in tests
5. ❌ Not using `Platform.OS` checks for platform-specific code

---

**Note**: Different AI tools read project instructions differently:
- **Claude Code**: Reads `CLAUDE.md` (tool-specific, not recommended here)
- **Cursor**: Reads `.cursorrules` (tool-specific, not recommended here)
- **Generic**: This file (`AI_INSTRUCTIONS.md`) works for all tools when referenced

This project prioritizes **tool-agnostic** documentation that works with any AI assistant.
