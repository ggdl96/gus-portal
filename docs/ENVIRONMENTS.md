Core Platform Support: React Native/Expo app running on Android, iOS, and Web

Key Constraints for AI Assistants:

- ❌ NO web-only APIs (localStorage, window.\*, HTML elements)
- ✅ YES React Native components (View, Text, TouchableOpacity)
- ✅ YES Expo APIs and AsyncStorage for cross-platform storage
- ✅ YES Platform.OS checks when platform-specific code needed  


Development Commands (default mode):  
 npm start # Metro bundler  
 npm run android/ios/web

Storage Hierarchy:

- AsyncStorage: Cross-platform persistent storage
- SecureStore: Mobile-only sensitive data
- localStorage: Web-only (avoid)  


Default Assumption: Local development mode unless explicitly stated otherwise

Critical Rule: Always use React Native components and cross-platform APIs. Never suggest web-only libraries or HTML elements since this must work on all three platforms.

---

This document essentially serves as guardrails for AI assistants to prevent suggesting web-only solutions for a cross-platform mobile app. The actual implementation details for each platform would be in separate skills or documentation.
