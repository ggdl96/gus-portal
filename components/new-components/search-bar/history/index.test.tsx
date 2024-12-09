import { render } from '@testing-library/react-native';

import History from '.';

describe('History', () => {
  it('should render properly with "showPreviousSearch" in true', () => {
    const renderResults = render(
      <History
        value={'item'}
        showPreviousSearch
        previousSearch={['item 1', 'item 2']}
        onPressSearchHistoryItem={() => {}}
        onDeleteHistoryItem={() => {}}
      />,
    );

    expect(() => renderResults.getByText('item 1')).not.toThrow();
  });

  it('should render properly with "showPreviousSearch" in true', () => {
    const renderResults = render(
      <History
        value={'item'}
        showPreviousSearch={false}
        previousSearch={['item 1', 'item 2']}
        onPressSearchHistoryItem={() => {}}
        onDeleteHistoryItem={() => {}}
      />,
    );

    expect(() => renderResults.getByText('item 1')).toThrow(
      'Unable to find an element with text: item 1',
    );
  });
});
