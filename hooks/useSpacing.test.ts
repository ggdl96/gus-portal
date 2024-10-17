import { renderHook } from '@testing-library/react-native';
import useSpacing from './useSpacing';

describe('useSpacing', () => {
  it('execution of this hook should retun {current: { defaultHorizontalSpacing: 20 }}', () => {
    const hookRenderResult = renderHook(() => useSpacing());

    expect(hookRenderResult.result).toStrictEqual({ current: { defaultHorizontalSpacing: 20 } });
  });
});
