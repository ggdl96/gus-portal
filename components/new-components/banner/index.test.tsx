import { render, userEvent } from '@testing-library/react-native';
import Banner from '.';
import { BannerTopComponent } from '@/models/banner-top-component';

describe('Banner', () => {
  it('should render properly', () => {
    const item: BannerTopComponent = {
      isLoading: false,
      id: 'id',
      title: '',
      subTitle: '',
      isOwned: false,
      image: '',
      seller: {
        id: '',
        name: '',
        image: '',
      },
      type: 'content',
    };

    const renderResult = render(<Banner item={item} />);

    const banner = () => renderResult.getByTestId('bannerId');

    expect(banner).not.toThrow();
  });

  it('given an on Press event over the component, it should trigger the action', async () => {
    const handleOnPress = jest.fn(() => {});
    const item: BannerTopComponent = {
      isLoading: false,
      id: 'id',
      title: '',
      subTitle: '',
      isOwned: false,
      image: '',
      seller: {
        id: '',
        name: '',
        image: '',
      },
      type: 'content',
    };
    const renderResult = render(<Banner item={item} onPress={handleOnPress} />);

    const banner = renderResult.getByTestId('bannerId');

    await userEvent.press(banner);

    expect(handleOnPress).toHaveBeenCalledTimes(1);
  });

  it('given an on Press event over the component when no onPress prop, it should not break', async () => {
    const item: BannerTopComponent = {
      isLoading: false,
      id: 'id',
      title: '',
      subTitle: '',
      isOwned: false,
      image: '',
      seller: {
        id: '',
        name: '',
        image: '',
      },
      type: 'content',
    };
    const renderResult = render(<Banner item={item} />);

    const banner = renderResult.getByTestId('bannerId');

    await userEvent.press(banner);

    expect(() => banner).not.toThrow();
  });
});
