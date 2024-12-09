import { render } from '@testing-library/react-native';
import ProductVariants from '.';

describe('ProductVariants', () => {
  it('given 2 variant elements it should display 2 elements', () => {
    const renderResults = render(
      <ProductVariants
        variants={[
          {
            id: 'dfg8fdg89d4h3j',
            name: 'Some Name',
            image: '',
          },
          {
            id: 'dfg8fdg89dzc2h',
            name: 'Some Name 2',
            image: '',
          },
        ]}
      />,
    );

    expect(() => renderResults.getByText('Some Name')).not.toThrow();
    expect(() => renderResults.getByText('Some Name 2')).not.toThrow();
  });
});
