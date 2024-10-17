import { render, userEvent } from '@testing-library/react-native';
import Banner from '.';

describe('Banner', () => {
  it('should render properly', () => {
    const renderResult = render(
      <Banner
        source={{
          uri: '',
        }}
      />,
    );

    const banner = () => renderResult.getByTestId('bannerId');

    expect(banner).not.toThrow();
  });

  it('given an on Press event over the component, it should trigger the action', async () => {
    const handleOnPress = jest.fn(() => {});

    const renderResult = render(
      <Banner
        source={{
          uri: '',
        }}
        onPress={handleOnPress}
      />,
    );

    const banner = renderResult.getByTestId('bannerId');

    await userEvent.press(banner);

    expect(handleOnPress).toHaveBeenCalledTimes(1);
  });

  it('given an on Press event over the component when no onPress prop, it should not break', async () => {
    const renderResult = render(
      <Banner
        source={{
          uri: '',
        }}
      />,
    );

    const banner = renderResult.getByTestId('bannerId');

    await userEvent.press(banner);

    expect(() => banner).not.toThrow();
  });
});
