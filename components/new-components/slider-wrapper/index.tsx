import React from 'react';
import { Pressable, View, Text } from 'react-native';

type Props = {
  text?: any;
  children: React.ReactNode;
  seeAll?: boolean;
  onSeeAll?: () => void;
  top?: number;
  bottom?: number;
};
const ContentWrapper = ({ text, children, seeAll, onSeeAll, top, bottom }: Props) => {
  const handleOnSeeAll = () => {
    if (typeof onSeeAll === 'function') onSeeAll();
  };
  return (
    <View style={{ flex: 1, marginTop: 0, marginBottom: 0, width: '100%' }}>
      <View
        style={{
          display: 'flex',
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        {text && (
          <Text
            style={{
              fontStyle: 'normal',
              fontWeight: '500',
              fontSize: 16,
              textTransform: 'uppercase',
              color: '#ffffff',
            }}>
            {text}
          </Text>
        )}
        {seeAll && (
          <Pressable onPress={handleOnSeeAll}>
            <Text
              style={{
                fontStyle: 'italic',
                fontWeight: 500,
                fontSize: 14,
                textTransform: 'uppercase',
                lineHeight: 20,
                color: '#fff',
              }}>
              SEE ALL
            </Text>
          </Pressable>
        )}
      </View>
      <View
        style={{
          width: '100%',
        }}>
        {children}
      </View>
    </View>
  );
};

export default ContentWrapper;
