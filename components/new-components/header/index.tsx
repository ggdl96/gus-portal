import { router } from 'expo-router';
import { Pressable, Text, View } from 'react-native';
import useSpacing from '@/hooks/useSpacing';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import HeaderRight from '../header-right';
import styles from './styles';

interface Props {
  displayRightSection?: boolean;
}

const Header = ({ displayRightSection = true }: Props) => {
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
          height: insets.top + 62,
        },
      ]}
      className="w-full flex-row items-center justify-center bg-contrastPrimary-400">
      <View className="w-full lg:w-3/4 flex align-middle flex-row items-center justify-between bg-contrastPrimary-400">
        <Pressable onPress={handleOnPress} style={{ paddingHorizontal: defaultHorizontalSpacing }}>
          <Text style={styles.headerTitleStyle} className="text-lg">
            gus portal
          </Text>
        </Pressable>
        {displayRightSection ? (
          <View
            style={{ paddingHorizontal: defaultHorizontalSpacing }}
            className="flex flex-row w-1/2 md:w-1/3 lg:w-1/4 justify-end">
            <HeaderRight />
          </View>
        ) : null}
      </View>
    </View>
  );
};

export default Header;
