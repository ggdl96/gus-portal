import { render } from '@testing-library/react-native';
import BannerDetailedSlider from '.';

describe('BannerDetailedSlider', () => {
  it('given an element in the data arary it should render it properly', () => {
    const renderResults = render(
      <BannerDetailedSlider
        data={[
          {
            seller: {
              id: 'sad34kl54h45g7',
              name: 'Seller Name',
              image: '',
            },
            id: 'sad34kl54h45c54n58g7',
            image: '',
            title: 'Banner Name',
            isLoading: false,
            displaySeller: true,
            price: 0,
            currencyDisplay: '',
            currencyCode: '',
            description: '',
            variants: [],
          },
        ]}
        horizontal={false}
      />,
    );

    const sellerNameElementFunction = () => renderResults.getAllByText('Seller Name');
    const bannerNameElementFunction = renderResults.getAllByText('Banner Name');

    expect(sellerNameElementFunction).not.toThrow(
      'Unable to find an element with text: Seller Name',
    );
    expect(bannerNameElementFunction).toHaveLength(1);
  });

  it('given the key "displaySeller" in false of data pro it should not display seller', () => {
    const renderResults = render(
      <BannerDetailedSlider
        data={[
          {
            seller: {
              id: 'sad34kl54h45g7',
              name: 'Seller Name',
              image: '',
            },
            id: 'sad34kl54h45c54n58g7',
            image: '',
            title: 'Banner Name',
            isLoading: false,
            displaySeller: false,
            price: 0,
            currencyDisplay: '',
            currencyCode: '',
            description: '',
            variants: [],
          },
        ]}
        horizontal={false}
      />,
    );

    const sellerNameElementFunction = () => renderResults.getAllByText('Seller Name');

    expect(sellerNameElementFunction).toThrow('Unable to find an element with text: Seller Name');
  });
});
