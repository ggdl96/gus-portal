import { render } from '@testing-library/react-native';
import BannerSmallSectionCarousel from '.';

describe('BannerSmallSectionCarousel', () => {
  it('should render properly setting "some title" title', () => {
    const renderResults = render(<BannerSmallSectionCarousel data={[]} />);

    const sectionTitleElement = () => renderResults.getByText('some title');

    expect(sectionTitleElement).not.toThrow();
  });

  it('given an element in the data array, it should render 1 element only', () => {
    const renderResults = render(
      <BannerSmallSectionCarousel
        data={[
          {
            id: 'dfgd4g3g3y8gj9lv7',
            title: 'The title',
            urlImage: '',
            views: 0,
          },
        ]}
      />,
    );

    const sectionTitleElement = renderResults.getAllByText('The title');

    expect(sectionTitleElement).toHaveLength(1);
  });
});
