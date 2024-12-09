import { render, userEvent } from '@testing-library/react-native';
import ContentWrapper from '.';
import { Text } from 'react-native';

const AuxComponent = () => <Text>Some Text</Text>;

describe('ContentWrapper', () => {
  test('given a "text" and the "seeAll" prop it should display both', () => {
    const renderResults = render(
      <ContentWrapper text="title" seeAll>
        <AuxComponent />
      </ContentWrapper>,
    );

    const titleElement = renderResults.getByText('title');
    const seeAllElement = renderResults.getByText('SEE ALL');

    expect(() => titleElement).not.toThrow();
    expect(() => seeAllElement).not.toThrow();
  });

  test('given a text children should render it', () => {
    const renderResults = render(
      <ContentWrapper text="title" seeAll>
        <AuxComponent />
      </ContentWrapper>,
    );

    expect(() => renderResults.getByText('Some Text')).not.toThrow();
  });

  test('given an on press event over "see all" it has to tigger only once', async () => {
    const handleOnPressSeeAll = jest.fn(() => {});

    const renderResults = render(
      <ContentWrapper text="title" seeAll onSeeAll={handleOnPressSeeAll}>
        <AuxComponent />
      </ContentWrapper>,
    );

    const seeAllElement = renderResults.getByText('SEE ALL');

    await userEvent.press(seeAllElement);
    expect(handleOnPressSeeAll).toHaveBeenCalledTimes(1);
  });
});
