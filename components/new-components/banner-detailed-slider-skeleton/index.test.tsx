import { render } from '@testing-library/react-native';
import BannerDetailedSliderSkeleton from '.';

describe('BannerDetailedSliderSkeleton', () => {
  it('should render properly', () => {
    const renderResults = render(
      <BannerDetailedSliderSkeleton width={222} height={22} borderRadius={2} />,
    );

    const jsonResult = renderResults.toJSON();

    expect(jsonResult).toMatchSnapshot();
  });
});
