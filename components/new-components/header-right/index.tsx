import { NativeSyntheticEvent, TextInputFocusEventData } from 'react-native';
import SearchBar from '@/components/new-components/search-bar/search-bar';
import { useState } from 'react';
import { router } from 'expo-router';

const HeaderRight = () => {
  const [value, setValue] = useState<string>('');

  const handleOnCancel = function (): void {};
  const handleOnFocus = function ({ nativeEvent }: { nativeEvent: any }): void {};
  const handleOnPressSearchHistoryItem = function (item: string): void {};
  const handleOnDeleteHistoryItem = function (item: string): void {};
  const handleOnClosePreviousSearch = function (): void {};

  const handleOnBlur = function (e: NativeSyntheticEvent<TextInputFocusEventData>): void {};
  const handleOnPressSearch = (value: string) => {
    const trimmedValue = value.trim();

    if (trimmedValue) {
      router.navigate(`/list?search=${encodeURIComponent(trimmedValue)}`);
    }
  };
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
      onPressSearch={handleOnPressSearch}
    />
  );
};

export default HeaderRight;
