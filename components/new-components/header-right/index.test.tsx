import { render } from '@testing-library/react-native';
import HeaderRight from '.';

describe('HeaderRight', () => {
  it('should render properly with a default placeholder and search icon', () => {
    const renderResults = render(<HeaderRight />);

    expect(() => renderResults.getByPlaceholderText('Search')).not.toThrow();
    expect(() => renderResults.getByTestId('searchIcon')).not.toThrow();
  });
});
