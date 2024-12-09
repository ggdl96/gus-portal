import { render } from '@testing-library/react-native';
import TitleWithAvatar from '.';

describe('TitleWithAvatar', () => {
  it('should render properly if no avatar image available', () => {
    const renderResult = render(<TitleWithAvatar title="Some title" />);

    const titleElement = renderResult.getByText('Some title');
    const avatarElement = renderResult.getByTestId('avatarNoImage');

    expect(() => titleElement).not.toThrow();
    expect(() => avatarElement).not.toThrow();
  });

  it('should render properly if avatar image is available', () => {
    const renderResult = render(<TitleWithAvatar title="Some title" src={{ uri: 's' }} />);

    const titleElement = renderResult.getByText('Some title');
    const avatarElement = renderResult.getByTestId('avatarImage');

    expect(() => titleElement).not.toThrow();
    expect(() => avatarElement).not.toThrow();
  });
});
