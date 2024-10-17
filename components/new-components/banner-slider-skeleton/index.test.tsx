import { render } from '@testing-library/react-native';
import BannerSliderSkeleton from '.';

describe('BannerSliderSkeleton', () => {
  it('should render properly', () => {
    const renderResults = render(<BannerSliderSkeleton />);

    const jsonResult = renderResults.toJSON();

    expect(jsonResult).toMatchSnapshot();
  });
});
