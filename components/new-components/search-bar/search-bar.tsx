import React, { useState } from 'react';
import {
  Keyboard,
  View,
  Text,
  TextInput,
  Pressable,
  TextInputKeyPressEventData,
  NativeSyntheticEvent,
  TextInputFocusEventData,
  TextInputSubmitEditingEventData,
} from 'react-native';
import History from './history';
import colors from '@/styles/colors';
import styles from './styles';
import Ionicons from '@expo/vector-icons/Ionicons';

interface Props {
  value: string;
  onChangeValue: (text: string) => void;
  cancelButton: boolean;
  cancelPress: () => void;
  placeholder?: string;
  handleKeyDown?: (e: NativeSyntheticEvent<TextInputKeyPressEventData>) => void;
  onFocus: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
  onBlur: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
  showPreviousSearch: boolean;
  previousSearch: string[];
  onPressSearchHistoryItem: (item: string) => void;
  onDeleteHistoryItem: (item: string) => void;
  onClosePreviousSearch: () => void;
  disabledPreviousSearch: boolean;
  onPressSearch: (search: string) => void;
}

const SearchBar = ({
  value,
  onChangeValue,
  cancelButton,
  cancelPress,
  placeholder,
  onFocus,
  onBlur,
  showPreviousSearch,
  previousSearch,
  onPressSearchHistoryItem,
  onDeleteHistoryItem,
  onClosePreviousSearch,
  handleKeyDown,
  disabledPreviousSearch,
  onPressSearch,
}: Props) => {
  const [active, setActive] = useState<boolean>(false);

  const handlePressOutside = (): void => {
    Keyboard.dismiss();
    onClosePreviousSearch();
    setActive(false);
  };

  const handleOnFocus = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    onFocus(e);
    setActive(true);
  };

  const handleOnDeleteHistoryItem = (item: string) => {
    onDeleteHistoryItem(item);
    Keyboard.dismiss();
  };

  const handleOnPressSearchHistoryItem = (item: string) => {
    onPressSearchHistoryItem(item);
    Keyboard.dismiss();
  };

  const handleOnSubmit = (e: NativeSyntheticEvent<TextInputSubmitEditingEventData>) => {
    onPressSearch(e.nativeEvent.text);
  };

  const handleOnPressSearch = () => {
    onPressSearch(value);
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.sectionInput}>
        <TextInput
          value={value}
          onChangeText={onChangeValue}
          placeholder={placeholder ?? 'Search'}
          onFocus={handleOnFocus}
          onBlur={onBlur}
          onKeyPress={handleKeyDown}
          autoCorrect={false}
          returnKeyType="search"
          style={styles.input}
          placeholderTextColor={colors.contrastPrimary[300]}
          onSubmitEditing={handleOnSubmit}
        />
      </View>
      {cancelButton ? (
        <Pressable onPress={cancelPress} style={styles.cancel}>
          <Text className="color-contrastPrimary-500">Cancel</Text>
        </Pressable>
      ) : null}
      <Pressable
        style={styles.containerSearchIcon}
        onPress={handleOnPressSearch}
        testID="searchIcon">
        <Ionicons name="search-outline" color={colors.contrastSecondary[800]} size={22} />
      </Pressable>

      {active && !disabledPreviousSearch ? (
        <Pressable onPress={handlePressOutside}>
          <History
            onDeleteHistoryItem={handleOnDeleteHistoryItem}
            onPressSearchHistoryItem={handleOnPressSearchHistoryItem}
            value={value}
            showPreviousSearch={showPreviousSearch}
            previousSearch={previousSearch}
          />
        </Pressable>
      ) : null}
    </View>
  );
};

export default SearchBar;
