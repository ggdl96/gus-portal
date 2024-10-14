import { NativeSyntheticEvent, TextInputFocusEventData } from 'react-native';
import SearchBar from '@/components/new-components/search-bar/search-bar';
import { useState } from 'react';
const HeaderRight = () => {
  const [value, setValue] = useState<string>('');

  const handleOnCancel = function (): void {};
  const handleOnFocus = function ({ nativeEvent }: { nativeEvent: any }): void {};
  const handleOnPressSearchHistoryItem = function (item: string): void {};
  const handleOnDeleteHistoryItem = function (item: string): void {};
  const handleOnClosePreviousSearch = function (): void {};

  const handleOnBlur = function (e: NativeSyntheticEvent<TextInputFocusEventData>): void {};

  return (
    <SearchBar
      value={value}
      onChangeValue={function (text: string): void {
        setValue(text);
      }}
      cancelButton={false}
      cancelPress={handleOnCancel}
      onFocus={handleOnFocus}
      onBlur={handleOnBlur}
      showPreviousSearch={false}
      previousSearch={[]}
      onPressSearchHistoryItem={handleOnPressSearchHistoryItem}
      onDeleteHistoryItem={handleOnDeleteHistoryItem}
      onClosePreviousSearch={handleOnClosePreviousSearch}
      disabledPreviousSearch={false}
    />
  );
};

export default HeaderRight;
