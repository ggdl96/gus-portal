import { render } from '@testing-library/react-native';
import Header from '.';
import { initialWindowMetrics, SafeAreaProvider } from 'react-native-safe-area-context';

describe('Header', () => {
  describe('render', () => {
    it('should render properly header title', async () => {
      const renderResult = render(
        <SafeAreaProvider initialMetrics={initialWindowMetrics}>
          <Header />
        </SafeAreaProvider>,
      );

      expect(renderResult).toBeDefined();
    });
  });
});
