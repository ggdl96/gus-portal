import React from 'react';
import { FlatList, FlatListProps, View } from 'react-native';
import styles from './styles';

const Separator = () => <View style={{ width: 16, height: 20 }} />;

interface Props<List> extends FlatListProps<List> {}

const DefaultList = <T extends unknown>(props: Props<T>) => {
  return (
    <FlatList
      ItemSeparatorComponent={Separator}
      style={[styles.list, props.style]}
      contentContainerStyle={{ alignItems: props.horizontal ? 'flex-start' : 'center' }}
      {...props}
    />
  );
};

export default DefaultList;
