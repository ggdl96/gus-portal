import React, { useState } from 'react';
import {
  Keyboard,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  TextInput,
  Platform,
} from 'react-native';
import History from './history/history';
import colors from '@/styles/colors';

interface Props {
  value: string;
  onChangeValue: (text: string) => void;
  cancelButton: boolean;
  cancelPress: () => void;
  placeholder?: string;
  dark?: boolean;
  handleKeyDown?: ({ nativeEvent }) => void;
  onFocus: ({ nativeEvent }) => void;
  onBlur: ({ nativeEvent }) => void;
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
  dark,
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

  const handleOnFocus = (e) => {
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

  return (
    <View
      style={{
        backgroundColor: 'brown',
        height: Platform.OS === 'ios' ? 48 : 60,
        width: '60%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
      }}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          paddingHorizontal: 4,
          width: '100%',
          alignItems: 'stretch',
          justifyContent: 'center',
          borderBottomColor: 'red',
        }}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            borderWidth: 1,
            borderColor: '#404040',
            borderRadius: 5,
            padding: 8,
            backgroundColor: 'blue',
            width: '100%',
          }}>
          <View style={styles.image} />
          <View style={{ flexGrow: 1 }}>
            <TextInput
              value={value}
              onChangeText={onChangeValue}
              placeholder={placeholder ?? 'Search'}
              onFocus={handleOnFocus}
              onBlur={onBlur}
              onKeyPress={handleKeyDown}
              autoCorrect={false}
              returnKeyType="search"
              style={{ fontSize: 16, width: '100%', color: colors.contrastSecondary[950] }}
              placeholderTextColor={colors.contrastPrimary[300]}
            />
          </View>
        </View>
        {cancelButton ? (
          <View
            onPress={() => cancelPress()}
            style={{
              padding: 2,
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              flexGrow: 0,
            }}>
            <Text style={{ color: colors.contrastPrimary[500] }}>Cancel</Text>
          </View>
        ) : null}
      </View>
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

const styles = StyleSheet.create({
  image: {
    height: 16,
    width: 16,
  },
});

export default SearchBar;
