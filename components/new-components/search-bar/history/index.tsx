import React from 'react';
import { Pressable, Text, TouchableHighlight, useWindowDimensions, View } from 'react-native';
import styles from './styles';

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
    <View style={[styles.wrapper, { height: dimensions.height }]}>
      {showPreviousSearch && previousSearch.length
        ? previousSearch
            .filter((item) => item.includes(value) && item !== value)
            .map((item) => (
              <TouchableHighlight
                onPressOut={() => onPressSearchHistoryItem(item)}
                key={`searchHistory_${item}`}>
                <View
                  style={[
                    {
                      width: dimensions.width,
                    },
                    styles.container,
                  ]}>
                  <View style={styles.containerText}>
                    <Text style={styles.text}>{item}</Text>
                    <Pressable
                      onPress={() => onDeleteHistoryItem(item)}
                      style={styles.containerDelete}>
                      <View style={styles.delete} />
                    </Pressable>
                  </View>
                </View>
              </TouchableHighlight>
            ))
        : null}
    </View>
  );
}
