import { useColorScheme } from './useColorScheme.web';

describe('useColorScheme web', () => {
  it('execution of this hook should retun "light', () => {
    expect(useColorScheme()).toBe('light');
  });
});
