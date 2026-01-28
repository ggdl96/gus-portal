---
name: rn-platform-validation
description: Validate cross-platform compatibility for React Native (Expo) apps. Ensure code, dependencies, and architectural decisions work seamlessly across Android, iOS, and Web platforms.
---

# React Native/Expo Platform Validation Skill

## Purpose

Validate cross-platform React Native/Expo code to ensure compatibility across Android, iOS, and Web platforms by detecting:

- **HTML/Web API Usage**: Prevent web-only APIs and HTML elements in cross-platform code.
- **Dependency Compatibility**: Ensure all dependencies work on all three platforms.
- **Architecture Validation**: Guide platform-compatible architectural decisions.
- **Navigation/Storage Patterns**: Validate proper use of expo-router and AsyncStorage.

## Core Principles

### Platform Compatibility Rules

**CRITICAL VIOLATIONS** (Must be fixed immediately):

- ❌ Using HTML elements (`<div>`, `<span>`, `<button>`, `<input>`)
- ❌ Using web-only APIs (`localStorage`, `sessionStorage`, `window.location`, `document.*`)
- ❌ Using web-only libraries (`react-router-dom`, browser-specific packages)
- ❌ CSS files or browser-specific CSS (hover states, media queries)
- ❌ Assuming web context without platform checks

**REQUIRED PATTERNS** (Must be used):

- ✅ React Native components (`View`, `Text`, `TouchableOpacity`, `TextInput`, `ScrollView`)
- ✅ Expo APIs for cross-platform features (`expo-constants`, `expo-linking`, etc.)
- ✅ AsyncStorage for persistent storage (NOT localStorage)
- ✅ Platform.OS checks when platform-specific code needed
- ✅ StyleSheet or NativeWind for styling
- ✅ expo-router for navigation (NOT react-router-dom)

## Workflow

When invoked, follow this process:

### 1. **Scope Identification**

Ask the user what they want to validate:

- [ ] Specific files or components
- [ ] Entire directory/feature
- [ ] Architecture decision
- [ ] Dependency additions
- [ ] Existing code audit

### 2. **Code Analysis**

For each file/component:

**Check Imports:**

```typescript
// ❌ VIOLATIONS
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // If using browser-specific interceptors

// ✅ CORRECT
import { useRouter } from 'expo-router';
import axios from 'axios'; // OK if used correctly
```

**Check Components:**

```typescript
// ❌ VIOLATIONS
<div className="container">
  <button onClick={handler}>Click</button>
  <input type="text" />
</div>

// ✅ CORRECT
<View style={styles.container}>
  <TouchableOpacity onPress={handler}>
    <Text>Click</Text>
  </TouchableOpacity>
  <TextInput />
</View>
```

**Check Storage:**

```typescript
// ❌ VIOLATIONS
localStorage.setItem('key', 'value');
sessionStorage.getItem('key');

// ✅ CORRECT
import AsyncStorage from '@react-native-async-storage/async-storage';
await AsyncStorage.setItem('key', 'value');
```

**Check Navigation:**

```typescript
// ❌ VIOLATIONS
import { useNavigate, Link } from 'react-router-dom';
const navigate = useNavigate();
navigate('/profile');

// ✅ CORRECT
import { useRouter, Link } from 'expo-router';
const router = useRouter();
router.push('/profile');
```

**Check Platform-Specific Code:**

```typescript
// ✅ GOOD - Proper platform checks
import { Platform } from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === 'ios' ? 20 : 0,
  },
});

// ✅ GOOD - Platform.select
const fontSize = Platform.select({
  ios: 16,
  android: 14,
  web: 18,
});

// ✅ GOOD - Conditional rendering
{Platform.OS === 'web' && <WebOnlyComponent />}
```

### 3. **Dependency Validation**

When new dependencies are proposed:

**Check compatibility:**

- Does it have React Native support?
- Does it work on all three platforms (Android, iOS, Web)?
- Are there Expo alternatives that are better?
- Does it require native code (needs expo-dev-client)?

**Common Safe Libraries:**

- `@react-native-async-storage/async-storage` ✅
- `react-native-svg` ✅
- `expo-*` packages ✅
- `axios` ✅ (if used correctly)
- `date-fns` ✅
- `zustand`, `jotai` ✅

**Common Problematic Libraries:**

- `react-router-dom` ❌ (use expo-router)
- `js-cookie` ❌ (use AsyncStorage)
- `chart.js` ❌ (use react-native-svg or victory-native)
- Browser-only packages ❌

### 4. **Architecture Guidance**

For architectural decisions:

**Storage Strategy:**

- Persistent data → AsyncStorage
- Sensitive data (tokens) → expo-secure-store (mobile) or AsyncStorage (web)
- File operations → expo-file-system (mobile only)
- Cache → AsyncStorage with TTL

**Navigation Strategy:**

- Use expo-router (file-based routing)
- Deep linking via expo-linking
- Tab navigation via expo-router tabs

**Styling Strategy:**

- StyleSheet for React Native styles
- NativeWind for Tailwind-like utility classes
- Platform-specific styles via Platform.select
- No CSS files, no browser-specific CSS

**API Communication:**

- axios or fetch (both work cross-platform)
- No browser-specific interceptors
- Handle network errors gracefully on mobile

### 5. **Generate Report**

Provide structured output:

```markdown
## Platform Validation Report

### ❌ Critical Issues Found: X

[List each violation with file:line reference]

### ⚠️ Warnings: X

[List potential issues or suboptimal patterns]

### ✅ Recommendations

[Suggest improvements and alternatives]

### 📝 Action Items

- [ ] Replace localStorage with AsyncStorage in auth.ts:45
- [ ] Change <div> to <View> in Header.tsx:12
- [ ] Replace react-router-dom with expo-router
- [ ] Add Platform.OS checks for iOS-specific code

### 🔧 Example Fixes

[Provide before/after code examples for top issues]
```

## Common Patterns to Validate

### Storage Pattern

```typescript
// ❌ BAD
const saveToken = (token: string) => {
  localStorage.setItem('authToken', token);
};

// ✅ GOOD
import AsyncStorage from '@react-native-async-storage/async-storage';

const saveToken = async (token: string) => {
  await AsyncStorage.setItem('authToken', token);
};
```

### Component Pattern

```typescript
// ❌ BAD
const Button = ({ onClick, children }) => (
  <button className="btn" onClick={onClick}>
    {children}
  </button>
);

// ✅ GOOD
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Button = ({ onPress, children }) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <Text style={styles.text}>{children}</Text>
  </TouchableOpacity>
);
```

### Navigation Pattern

```typescript
// ❌ BAD
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const navigate = useNavigate();
  return <button onClick={() => navigate('/settings')}>Settings</button>;
};

// ✅ GOOD
import { useRouter } from 'expo-router';
import { TouchableOpacity, Text } from 'react-native';

const Profile = () => {
  const router = useRouter();
  return (
    <TouchableOpacity onPress={() => router.push('/settings')}>
      <Text>Settings</Text>
    </TouchableOpacity>
  );
};
```

### Conditional Platform Code

```typescript
// ✅ GOOD - When you need platform-specific behavior
import { Platform } from 'react-native';

const getStatusBarHeight = () => {
  if (Platform.OS === 'ios') {
    return 44;
  } else if (Platform.OS === 'android') {
    return 24;
  }
  return 0; // web
};

// ✅ GOOD - Platform-specific imports
const ImagePicker = Platform.select({
  native: () => require('expo-image-picker'),
  web: () => null,
})();
```

## Architectural Decision Framework

When the user asks for guidance on implementing a feature:

1. **Confirm platform requirements**: "Does this need to work on Android, iOS, and Web?"
2. **Identify platform-specific constraints**: "Are there any platform-specific features needed?"
3. **Recommend cross-platform approach**: Suggest solutions that work on all platforms
4. **Provide platform-specific fallbacks**: If needed, show how to handle platform differences
5. **Validate dependencies**: Ensure all proposed libraries work cross-platform

## Red Flags to Watch For

### In User Requests

- "Use localStorage" → Suggest AsyncStorage
- "Add a div/button/input" → Suggest View/TouchableOpacity/TextInput
- "Install react-router-dom" → Suggest expo-router
- "Add CSS file" → Suggest StyleSheet or NativeWind
- "Use window.location" → Suggest expo-linking

### In Existing Code

- HTML elements in JSX
- Web-only imports
- Missing Platform checks where needed
- Inconsistent navigation patterns
- Browser-specific APIs

## Output Format

Always structure your response as:

1. **Summary**: Brief overview of findings
2. **Critical Issues**: Must-fix violations
3. **Warnings**: Should-fix items
4. **Recommendations**: Best practices
5. **Code Examples**: Before/after snippets
6. **Action Plan**: Checklist of tasks

## Edge Cases

### When Platform-Specific Code IS Needed

Sometimes platform-specific code is legitimate:

- iOS notch/safe area handling
- Android back button behavior
- Web URL manipulation
- Platform-specific permissions

In these cases:

1. Acknowledge the need
2. Show proper Platform.OS usage
3. Provide fallbacks for other platforms
4. Document why it's platform-specific

### When to Use Native Modules

If a feature truly requires native code:

1. Check if an Expo module exists first
2. Warn that expo-dev-client is needed
3. Suggest prebuild implications
4. Consider if web support is possible

## Success Criteria

A passing validation means:

- ✅ No HTML elements
- ✅ No web-only APIs without Platform checks
- ✅ All storage uses AsyncStorage
- ✅ Navigation uses expo-router
- ✅ Styling uses StyleSheet or NativeWind
- ✅ All dependencies are cross-platform compatible
- ✅ Platform-specific code is properly guarded

## Example Invocations

**Validate specific file:**
User: `/react-native-expo-platform-validate src/components/Header.tsx`

**Validate architecture decision:**
User: `/react-native-expo-platform-validate How should I implement user authentication with token storage?`

**Audit entire feature:**
User: `/react-native-expo-platform-validate Audit the authentication flow in src/auth/`

**Check dependency:**
User: `/react-native-expo-platform-validate Should I use react-hook-form or formik?`

## Remember

- **Default to cross-platform**: Always assume code must work on Android, iOS, and Web
- **Be specific**: Reference exact file locations and line numbers
- **Provide examples**: Show correct patterns, not just what's wrong
- **Think mobile-first**: Mobile constraints are stricter than web
- **Test on all platforms**: Encourage testing on all three platforms

---

**Primary Goal**: Ensure every line of code works seamlessly across Android, iOS, and Web without platform-specific hacks or workarounds.
