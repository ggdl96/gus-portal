import { renderHook } from '@testing-library/react-native';
import { useThemeColor } from './useThemeColor';

describe('useThemeColor', () => {
  it('execution of this hook with {light: "#000"} and text as params should retun {current: "light"}', () => {
    const hookRenderResult = renderHook(() => useThemeColor({ light: '#000' }, 'text'));

    expect(hookRenderResult.result).toStrictEqual({ current: '#000' });
  });

  it('execution of this hook with light and text as params should retun {current: "#11181C"}', () => {
    const hookRenderResult = renderHook(() => useThemeColor({}, 'text'));

    expect(hookRenderResult.result).toStrictEqual({ current: '#11181C' });
  });
});
