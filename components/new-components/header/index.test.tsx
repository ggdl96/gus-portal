import { render } from '@testing-library/react-native';
import Header from '.';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { SAFE_ARE_INITIAL_METRICS } from '@/constants/safe-area';

describe('Header', () => {
  describe('render', () => {
    it('should render properly header title', async () => {
      const renderResult = render(
        <SafeAreaProvider initialMetrics={SAFE_ARE_INITIAL_METRICS}>
          <Header />
        </SafeAreaProvider>,
      );
      expect(() => renderResult.getByText('gus portal')).not.toThrow();
    });
  });
});
