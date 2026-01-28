---
name: rn-test-generator
description: Generate tests for React Native (Expo) using TypeScript and RNTL. Optimized for strict object assertions, integrated snapshots, and Expo vector icon mocking.
---

# React Native Test Generator Skill (Project-Aligned)

## Purpose

Generate high-quality tests that match the project's specific style:

* **Jest + RNTL**: Primary testing stack.
* **Strict Assertions**: Testing against the full `result` object for hooks.
* **Integrated Snapshots**: Using RNTL's `toJSON()` for UI consistency.
* **Expo Compatibility**: Handling `@expo/vector-icons` and Expo constants.

## Project Identity & Style Guide

Prioritize these patterns to ensure generated code passes peer review:

1. **Hook Assertions**: Prefer `expect(hook.result).toStrictEqual({ current: ... })`.
2. **Snapshot Method**: Use `render().toJSON()` rather than `react-test-renderer`.
3. **Naming**: Use descriptive strings (e.g., *"execution of this hook with X should return Y"*).
4. **Icons**: Mock `@expo/vector-icons` to keep snapshots clean.

---

## Testing Patterns

### 1. Component & Snapshot Testing

Matches the `BannerSliderSkeleton` pattern.

```typescript
import { render } from '@testing-library/react-native';
import { MyComponent } from './index';

describe('MyComponent', () => {
  it('should render properly', () => {
    // Capture the render result object
    const renderResults = render(<MyComponent />);
    
    // Use toJSON() from RNTL results for snapshots
    const jsonResult = renderResults.toJSON();
    expect(jsonResult).toMatchSnapshot();
  });
});

```

### 2. Custom Hook Testing (Strict Pattern)

Matches the `useThemeColor` pattern.

```typescript
import { renderHook } from '@testing-library/react-native';
import { useMyHook } from './useMyHook';

describe('useMyHook', () => {
  it('execution of this hook with [Params] should return {current: [Value]}', () => {
    const hookRenderResult = renderHook(() => useMyHook('param'));

    // Strict equality check against the result object wrapper
    expect(hookRenderResult.result).toStrictEqual({ current: 'expected_value' });
  });
});

```

### 3. Handling Expo Icons & Mocks

Prevents icons from bloating snapshots or causing "font not found" errors.

```typescript
// Add this to the top of test files using TabBarIcon or Ionicons
jest.mock('@expo/vector-icons/Ionicons', () => 'Ionicons');

// Or mock the createIconSet utility
jest.mock('@expo/vector-icons/build/createIconSet', () => {
  return () => 'Icon';
});

```

---

## Essential Testing Utilities

### Project-Specific Mock Generator

Use this to simulate the project's theme behavior:

```typescript
// Mocking useThemeColor for component tests
jest.mock('./useThemeColor', () => ({
  useThemeColor: jest.fn((props, colorName) => props.light || '#000')
}));

```

---

## Workflow (Style Reconnaissance)

1. **Detect Hook Return Type**: Does the hook return a single value or an object? Match the `toStrictEqual({ current: ... })` pattern accordingly.
2. **Verify Asset Usage**: If `Ionicons` or `Image` are used, ensure mocks are generated to keep snapshots deterministic.
3. **Check for "index" imports**: As seen in `BannerSliderSkeleton`, use `import Component from '.';` if the file is an index.
4. **Accessibility Check**: While using snapshots, also add at least one functional test using `screen.getByRole` to ensure accessibility isn't regressing.

## Best Practices

* **Avoid over-mocking**: Only mock native Expo modules or external APIs.
* **Snapshot Skeletons**: Always provide snapshots for "Skeleton" or "Layout" components.
* **Descriptive `it` blocks**: Follow the project's lead: `execution of [Hook] with [X] should return [Y]`.
