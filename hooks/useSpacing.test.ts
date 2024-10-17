import { renderHook } from '@testing-library/react-native';
import useSpacing from './useSpacing';

describe('useSpacing', () => {
  it('execution of this hook should retun {current: { defaultHorizontalSpacing: 20 }}', () => {
    const hookRenderResult = renderHook(() => useSpacing());

    console.log('hookRenderResult.result: ', hookRenderResult.result);
    expect(hookRenderResult.result).toStrictEqual({ current: { defaultHorizontalSpacing: 20 } });
  });
});
