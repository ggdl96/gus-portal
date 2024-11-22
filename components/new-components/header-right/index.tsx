import { NativeSyntheticEvent, TextInputFocusEventData } from 'react-native';
import SearchBar from '@/components/new-components/search-bar/search-bar';
import { router } from 'expo-router';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store';
import { search } from '@/features/searchSlice';

const HeaderRight = () => {
  const searchValue = useSelector((state: RootState) => state.search.searchValue);
  const dispatch = useDispatch();
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
  const handleOnChangeValue = function (text: string): void {
    dispatch(search(text));
  };

  const previousSearch: string[] = [];

  return (
    <SearchBar
      value={searchValue}
      onChangeValue={handleOnChangeValue}
      cancelButton={false}
      cancelPress={handleOnCancel}
      onFocus={handleOnFocus}
      onBlur={handleOnBlur}
      showPreviousSearch={false}
      previousSearch={previousSearch}
      onPressSearchHistoryItem={handleOnPressSearchHistoryItem}
      onDeleteHistoryItem={handleOnDeleteHistoryItem}
      onClosePreviousSearch={handleOnClosePreviousSearch}
      disabledPreviousSearch={false}
      onPressSearch={handleOnPressSearch}
    />
  );
};

export default HeaderRight;
