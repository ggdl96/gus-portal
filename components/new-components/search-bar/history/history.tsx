import React from 'react';
import { Pressable, Text, TouchableHighlight, useWindowDimensions, View } from 'react-native';
import colors from '@/styles/colors';

interface Props {
  value: string;
  showPreviousSearch: boolean;
  previousSearch: string[];
  onPressSearchHistoryItem: (item: string) => void;
  onDeleteHistoryItem: (item: string) => void;
}

export default function History({
  value,
  showPreviousSearch,
  previousSearch,
  onPressSearchHistoryItem,
  onDeleteHistoryItem,
}: Props) {
  const dimensions = useWindowDimensions();

  return (
    <View
      style={{
        width: '100%',
        height: dimensions.height,
      }}>
      {showPreviousSearch && previousSearch.length
        ? previousSearch
            .filter((item) => item.includes(value) && item !== value)
            .map((item) => (
              <TouchableHighlight
                onPressOut={() => onPressSearchHistoryItem(item)}
                key={`searchHistory_${item}`}>
                <View
                  style={{
                    display: 'flex',
                    width: dimensions.width,
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    left: 0,
                    padding: 15,
                    borderBottomColor: colors.contrastPrimary[20],
                    borderBottomWidth: 1,
                  }}>
                  <View
                    style={{
                      display: 'flex',
                      width: '100%',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        color: colors.contrastSecondary[900],
                      }}>
                      {item}
                    </Text>
                    <Pressable
                      onPress={() => onDeleteHistoryItem(item)}
                      style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <View style={{ width: 14, height: 14 }} />
                    </Pressable>
                  </View>
                </View>
              </TouchableHighlight>
            ))
        : null}
    </View>
  );
}
