import React from 'react';
import { FlatList, FlatListProps, View } from 'react-native';
import styles from './styles';

const Separator = () => <View style={{ width: 16, height: 20 }} />;

interface Props<List> extends FlatListProps<List> {}

const DefaultList = <T extends unknown>({
  data,
  renderItem,
  keyExtractor,
  horizontal,
}: Props<T>) => {
  return (
    <FlatList
      horizontal={horizontal}
      renderItem={renderItem}
      data={data}
      keyExtractor={keyExtractor}
      ItemSeparatorComponent={Separator}
      style={styles.list}
    />
  );
};

export default DefaultList;
