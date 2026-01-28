---
name: rn-security
description: Prevent common security vulnerabilities in React Native (Expo) apps. Covers secure storage, deep links, secrets management, WebViews, and biometric authentication.
---

# React Native Security Skill (Expo Multi-Platform)

## Purpose

Generate secure code for React Native + Expo projects by preventing the **Top 7 Critical Vulnerabilities** in mobile and cross-platform apps.

**Target**: Small teams (2-7 devs) who need essential security without overwhelming complexity.

**Integration**: Works alongside your existing testing patterns (Jest + RNTL) and project structure.

---

## Critical Security Rules (MUST Follow)

### 1. Secure Storage - NEVER Use AsyncStorage for Sensitive Data

AsyncStorage stores data in **plain text**. Use SecureStore for tokens, credentials, or PII.

```typescript
// ❌ VULNERABLE - Plain text storage
import AsyncStorage from '@react-native-async-storage/async-storage';

const saveToken = async (token: string) => {
  await AsyncStorage.setItem('authToken', token); // Readable by anyone with device access
};

// ✅ SECURE - Encrypted storage
import * as SecureStore from 'expo-secure-store';

const saveToken = async (token: string) => {
  await SecureStore.setItemAsync('authToken', token); // Hardware-backed encryption
};

```

**Rule**: If the data is sensitive (tokens, passwords, API keys, PII), MUST use SecureStore.

---

### 2. Deep Link Validation - NEVER Trust User-Controlled URLs

Deep links can be manipulated to navigate to unintended screens or inject malicious data.

```typescript
// ❌ VULNERABLE - No validation
Linking.addEventListener('url', ({ url }) => {
  const route = url.replace('myapp://', '');
  navigation.navigate(route); // Attacker can navigate anywhere
});

// ✅ SECURE - Whitelist validation
const ALLOWED_ROUTES = ['home', 'profile', 'settings'] as const;

Linking.addEventListener('url', ({ url }) => {
  const { path } = Linking.parse(url);
  if (!ALLOWED_ROUTES.includes(path as any)) {
    navigation.navigate('home'); // Safe fallback
    return;
  }
  navigation.navigate(path);
});

```

**Rule**: MUST validate all deep link routes and parameters against a whitelist.

---

### 3. Secrets Management - NEVER Hardcode API Keys

Hardcoded secrets in `app.json` or source code are exposed in the compiled bundle.

```json
// ❌ VULNERABLE - app.json
{ "expo": { "extra": { "apiKey": "sk_live_12345" } } }

```

```typescript
// ✅ SECURE - Use environment variables (.env + app.config.js)
export default {
  expo: {
    extra: {
      apiUrl: process.env.EXPO_PUBLIC_API_URL,
    }
  }
};

```

**Rule**: MUST use environment variables for configuration. MUST NOT commit secrets to git.

---

### 4. WebView Security - Restricted Access & Whitelists

WebViews are common entry points for XSS (Cross-Site Scripting).

```typescript
// ❌ VULNERABLE - Allows any URL and file access
<WebView source={{ uri: 'https://example.com' }} />

// ✅ SECURE - Restricted WebView
<WebView 
  source={{ uri: 'https://trusted.com' }}
  originWhitelist={['https://trusted.com']} // Only allow specific domains
  javaScriptEnabled={true}
  allowFileAccess={false} // Prevent access to local device files
  onShouldStartLoadWithRequest={(request) => {
    return request.url.startsWith('https://trusted.com');
  }}
/>

```

**Rule**: MUST use `originWhitelist` and disable `allowFileAccess` in WebViews.

---

### 5. Authentication - Use WebBrowser, NOT WebView

Standard WebViews can be inspected by the host app, allowing "credential sniffing."

```typescript
// ❌ VULNERABLE - Using WebView for OAuth login
<WebView source={{ uri: 'https://github.com/login/oauth' }} />

// ✅ SECURE - Use System Browser for Auth
import * as WebBrowser from 'expo-web-browser';

const handleLogin = async () => {
  const result = await WebBrowser.openAuthSessionAsync(authUrl, redirectUrl);
  // Session is isolated from the app's memory
};

```

**Rule**: MUST use `expo-web-browser` for third-party authentication flows.

---

### 6. Biometric Step-up - Protect Sensitive Actions

SecureStore is safe, but adding a biometric "gate" prevents unauthorized use of an unlocked phone.

```typescript
// ✅ SECURE - Local Authentication before secret access
import * as LocalAuthentication from 'expo-local-authentication';

const viewTaxID = async () => {
  const { success } = await LocalAuthentication.authenticateAsync({
    promptMessage: 'Verify identity to view sensitive data',
  });

  if (success) {
    const taxId = await SecureStore.getItemAsync('tax_id');
    // Display data...
  }
};

```

**Rule**: MUST use `expo-local-authentication` for high-stakes actions (payments, PII access).

---

### 7. Redux State & Background Privacy

Redux state is easily compromised; screen snapshots in the app switcher can leak PII.

```typescript
// ✅ SECURE - Masking screen in background
import { useAppState } from '@react-native-community/hooks';

// In your root component:
const appState = useAppState();
if (appState !== 'active') {
  return <View style={{ backgroundColor: 'black', flex: 1 }} />; // Hide PII in app switcher
}

```

**Rule**: MUST NOT store tokens/PII in Redux. MUST hide sensitive UI when the app is in the background.

---

## Security Testing Patterns

### Testing Secure Storage (Mocking)

```typescript
import * as SecureStore from 'expo-secure-store';
jest.mock('expo-secure-store');

it('stores token securely', async () => {
  const { result } = renderHook(() => useAuth());
  await result.current.login('token_123');
  expect(SecureStore.setItemAsync).toHaveBeenCalledWith('authToken', 'token_123');
});

```

### Testing WebView Restrictions

```typescript
it('limits WebView to trusted domains', () => {
  const { getByTestId } = render(<MyWebView />);
  const webview = getByTestId('secure-webview');
  expect(webview.props.originWhitelist).toContain('https://trusted.com');
});

```

---

## Quick Security Checklist

* [ ] **Storage**: No sensitive data in AsyncStorage.
* [ ] **Deep Links**: Whitelist validation implemented for all routes.
* [ ] **Secrets**: `.env` used and excluded from git via `.gitignore`.
* [ ] **WebView**: `originWhitelist` active and `allowFileAccess={false}`.
* [ ] **Auth**: `WebBrowser` (system browser) used for login, not a WebView.
* [ ] **Biometrics**: FaceID/Fingerprint gate for sensitive operations.
* [ ] **Privacy**: Screen masked/blurred when app is backgrounded.

---

## Common Anti-Patterns

### ❌ Anti-Pattern: The "Spy" WebView

Using a WebView for login to "control the UI" allows the app to intercept user passwords.
**Fix**: Use `expo-web-browser` for OAuth/OIDC.

### ❌ Anti-Pattern: Cleartext Traffic

Allowing `http://` instead of `https://`.
**Fix**: Enforce HTTPS in `app.json` via `expo-build-properties`.

---

## Resources

* [Expo SecureStore](https://docs.expo.dev/versions/latest/sdk/securestore/)
* [OWASP Mobile Top 10](https://owasp.org/www-project-mobile-top-10/)
* [Expo WebBrowser (Auth)](https://docs.expo.dev/versions/latest/sdk/webbrowser/)

---

## Integration with Your Workflow

1. **Automation**: Add this checklist to your PR template.
2. **Environment**: Use `direnv` or similar to manage local `.env` files.
3. **Audit**: Run `npx expo-doctor` regularly to check for basic config issues.

**Remember**: Security isn't a feature—it's the foundation your users' trust is built on.

---
