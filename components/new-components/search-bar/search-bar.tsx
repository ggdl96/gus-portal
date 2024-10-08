import React, { useState } from 'react';
import {
  Keyboard,
  TouchableOpacity,
  View,
  Text,
  TextInput,
  Pressable,
  TextInputKeyPressEventData,
  NativeSyntheticEvent,
  TextInputFocusEventData,
} from 'react-native';
import History from './history/history';
import colors from '@/styles/colors';
import styles from './styles';
import { router } from 'expo-router';

interface Props {
  value: string;
  onChangeValue: (text: string) => void;
  cancelButton: boolean;
  cancelPress: () => void;
  placeholder?: string;
  dark?: boolean;
  handleKeyDown?: (e: NativeSyntheticEvent<TextInputKeyPressEventData>) => void;
  onFocus: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
  onBlur: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
  showPreviousSearch: boolean;
  previousSearch: string[];
  onPressSearchHistoryItem: (item: string) => void;
  onDeleteHistoryItem: (item: string) => void;
  onClosePreviousSearch: () => void;
  disabledPreviousSearch: boolean;
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

  const handleOnPressSearch = () => {
    router.navigate('/list');
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.sectionInput}>
        <View style={styles.wrapperInput}>
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
            onSubmitEditing={(e) => {
              console.log('onSubmitEditing', e.nativeEvent.text);
            }}
          />
        </View>
      </View>
      {cancelButton ? (
        <Pressable onPress={() => cancelPress()} style={styles.cancel}>
          <Text className="color-contrastPrimary-500">Cancel</Text>
        </Pressable>
      ) : null}
      <Pressable style={styles.image} onPress={handleOnPressSearch} />

      {active && !disabledPreviousSearch ? (
        <TouchableOpacity onPress={handlePressOutside}>
          <History
            onDeleteHistoryItem={handleOnDeleteHistoryItem}
            onPressSearchHistoryItem={handleOnPressSearchHistoryItem}
            value={value}
            showPreviousSearch={showPreviousSearch}
            previousSearch={previousSearch}
          />
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

export default SearchBar;
