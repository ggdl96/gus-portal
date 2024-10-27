import React from 'react';
import { View, Image, Modal, Text, Pressable } from 'react-native';

import '../../../global.css';
import Ionicons from '@expo/vector-icons/Ionicons';

import { useSafeAreaInsets } from 'react-native-safe-area-context';
import styles from './styles';

interface Props {
  url: string;
  visible: boolean;
  toggleVisibility: () => void;
}

const ModalImge = ({ url, toggleVisibility, visible }: Props) => {
  const insets = useSafeAreaInsets();

  return (
    <Modal transparent visible={visible}>
      <View
        className="flex flex-row justify-between absolute w-full align-middle"
        style={[
          styles.modalTopContent,
          {
            paddingTop: insets.top,
            paddingLeft: 10 + insets.left,
            paddingRight: 10 + insets.right,
            paddingBottom: insets.bottom,
          },
        ]}>
        <Pressable className="flex flex-row align-middle" onPress={toggleVisibility}>
          <Ionicons name="arrow-back" style={styles.backArrow} size={18} />
        </Pressable>
        <Text className="color-contrastSecondary-900 text-lg" style={styles.text}>
          1/1
        </Text>
      </View>
      <Image
        style={[
          styles.image,
          {
            flex: 1,
          },
        ]}
        source={{
          uri: url,
        }}
        resizeMode="center"
      />
    </Modal>
  );
};

export default ModalImge;
