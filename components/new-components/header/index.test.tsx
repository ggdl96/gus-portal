import { render } from '@testing-library/react-native';
import Header from '.';
import SafeAreaProviderTestWrapper from '@/utils/safe-area-provider-test-wrapper';

describe('Header', () => {
  describe('render', () => {
    it('should render properly header title', async () => {
      const renderResult = render(
        <SafeAreaProviderTestWrapper>
          <Header />
        </SafeAreaProviderTestWrapper>,
      );
      expect(() => renderResult.getByText('gus portal')).not.toThrow();
    });
  });
});
