import { render } from '@testing-library/react-native';
import MediumSlideSkeleton from '.';

describe('MediumSlideSkeleton', () => {
  it('should render properly', () => {
    const renderResults = render(<MediumSlideSkeleton width={200} height={200} borderRadius={2} />);

    const jsonResult = renderResults.toJSON();

    expect(jsonResult).toMatchSnapshot();
  });
});
