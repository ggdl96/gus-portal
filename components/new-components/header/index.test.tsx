import { render } from '@testing-library/react-native';
import Header from '.';
import AppProvidersWrapper from '@/utils/app-providers-wrapper';

describe('Header', () => {
  describe('render', () => {
    it('should render properly header title', async () => {
      const renderResult = render(
        <AppProvidersWrapper>
          <Header />
        </AppProvidersWrapper>,
      );
      expect(() => renderResult.getByText('gus portal')).not.toThrow();
    });
  });
});
