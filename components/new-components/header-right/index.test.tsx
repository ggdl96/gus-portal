import { render } from '@testing-library/react-native';
import HeaderRight from '.';
import AppProvidersWrapper from '@/utils/app-providers-wrapper';

describe('HeaderRight', () => {
  it('should render properly with a default placeholder and search icon', () => {
    const renderResults = render(
      <AppProvidersWrapper>
        <HeaderRight />
      </AppProvidersWrapper>,
    );

    expect(() => renderResults.getByPlaceholderText('Search')).not.toThrow();
    expect(() => renderResults.getByTestId('searchIcon')).not.toThrow();
  });
});
