import { render } from '@testing-library/react-native';
import BannerSmallSkeleton from '.';

describe('MediumSlideSkeleton', () => {
  it('should render properly', () => {
    const renderResults = render(
      <BannerSmallSkeleton width={200} height={200} borderRadius={2} id={'2'} />,
    );

    const jsonResult = renderResults.toJSON();

    expect(jsonResult).toMatchSnapshot();
  });
});
