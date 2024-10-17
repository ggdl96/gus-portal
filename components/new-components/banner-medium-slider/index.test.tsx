import { render } from '@testing-library/react-native';
import BannerMediumSlider from '.';

describe('BannerMediumSlider', () => {
  it('given an array with one element, it should render properly', () => {
    const renderResults = render(
      <BannerMediumSlider
        data={[
          {
            image: '',
            categories: ['cat 1'],
            text: 'Banner 1',
          },
        ]}
      />,
    );

    const bannerTextElement = renderResults.getAllByText('Banner 1');
    const bannerCatTextElement = renderResults.getAllByText('cat 1');

    expect(bannerTextElement).toHaveLength(1);
    expect(bannerCatTextElement).toHaveLength(1);
  });
});
