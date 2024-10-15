import { render } from '@testing-library/react-native';
import BannerSlider from '.';

describe('BannerSlider', () => {
  describe('render', () => {
    it('given empty array should not render elements', () => {
      const renderResultContent = render(<BannerSlider data={[]} type={'content'} />);
      const renderResultProduct = render(<BannerSlider data={[]} type="product" />);

      const jsonResultContent = renderResultContent.toJSON();
      const jsonResultProduct = renderResultProduct.toJSON();

      expect(jsonResultProduct.children[0].children).toBeNull();
      expect(jsonResultContent.children[0].children).toBeNull();
    });

    describe('content type', () => {
      it('given array should render elements', async () => {
        const data = [
          {
            id: 'a234df24df34534',
            title: '',
            subTitle: '',
            isOwned: false,
            image: '',
            seller: {
              id: 'a234df24da34537',
              name: 'Seller 1',
              image: '',
            },
          },
          {
            id: 'a234df24df34537',
            title: '',
            subTitle: '',
            isOwned: false,
            image: '',
            seller: {
              id: 'a234df24da34537',
              name: 'Seller 1',
              image: '',
            },
          },
        ];

        const renderResult = render(<BannerSlider data={data} type={'content'} />);

        const titleElement = await renderResult.findAllByText('Seller 1');

        const jsonResult = renderResult.toJSON();

        expect(jsonResult.children[0].children).toHaveLength(2);
        expect(titleElement).toHaveLength(2);
      });
    });
  });
});
