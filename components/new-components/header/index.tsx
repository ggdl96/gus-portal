import { router } from 'expo-router';
import { Pressable, Text, View } from 'react-native';
import useSpacing from '@/hooks/useSpacing';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import HeaderRight from '../header-right';
import styles from './styles';

const Header = () => {
  const handleOnPress = () => {
    router.navigate('/');
  };

  const { defaultHorizontalSpacing } = useSpacing();
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.headerStyle,
        {
          paddingTop: insets.top,
          paddingLeft: insets.left,
          paddingRight: insets.right,
        },
      ]}
      className="w-full flex-row items-center justify-between bg-contrastPrimary-400">
      <Pressable onPress={handleOnPress} style={{ paddingHorizontal: defaultHorizontalSpacing }}>
        <Text style={styles.headerTitleStyle}>gus portal</Text>
      </Pressable>
      <View
        style={{ paddingHorizontal: defaultHorizontalSpacing }}
        className="flex flex-row w-1/2 md:w-1/3 lg:w-1/4 justify-end">
        <HeaderRight />
      </View>
    </View>
  );
};

export default Header;
