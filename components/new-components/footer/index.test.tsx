import { render } from '@testing-library/react-native';
import Footer from '.';
import SafeAreaProviderTestWrapper from '@/utils/safe-area-provider-test-wrapper';

describe('Footer', () => {
  it('should render properly', () => {
    const renderResults = render(
      <SafeAreaProviderTestWrapper>
        <Footer />
      </SafeAreaProviderTestWrapper>,
    );
    expect(renderResults.toJSON()).toMatchSnapshot();
  });
});
