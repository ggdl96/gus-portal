import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { router, SplashScreen, Stack } from 'expo-router';
import { useColorScheme } from '@/hooks/useColorScheme';
import {
  NativeSyntheticEvent,
  Pressable,
  StyleSheet,
  Text,
  TextInputFocusEventData,
  View,
} from 'react-native';
import colors from '@/styles/colors';
import useSpacing from '@/hooks/useSpacing';
import SearchBar from '@/components/new-components/search-bar/search-bar';
import { useState } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { NativeStackHeaderProps } from '@react-navigation/native-stack';

const HeaderRight = () => {
  const [value, setValue] = useState<string>('');

  const handleOnCancel = function (): void {};
  const handleOnFocus = function ({ nativeEvent }: { nativeEvent: any }): void {};
  const handleOnPressSearchHistoryItem = function (item: string): void {};
  const handleOnDeleteHistoryItem = function (item: string): void {};
  const handleOnClosePreviousSearch = function (): void {};

  const handleOnBlur = function (e: NativeSyntheticEvent<TextInputFocusEventData>): void {};

  return (
    <SearchBar
      value={value}
      onChangeValue={function (text: string): void {
        setValue(text);
      }}
      cancelButton={false}
      cancelPress={handleOnCancel}
      onFocus={handleOnFocus}
      onBlur={handleOnBlur}
      showPreviousSearch={false}
      previousSearch={[]}
      onPressSearchHistoryItem={handleOnPressSearchHistoryItem}
      onDeleteHistoryItem={handleOnDeleteHistoryItem}
      onClosePreviousSearch={handleOnClosePreviousSearch}
      disabledPreviousSearch={false}
    />
  );
};

const Header = (props: NativeStackHeaderProps) => {
  const handleOnPress = () => {
    router.navigate('/');
  };

  const { defaultHorizontalSpacing } = useSpacing();
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{
        paddingTop: insets.top,
        paddingLeft: insets.left,
        paddingRight: insets.right,
        borderBottomWidth: 2,
        borderBottomColor: colors.contrastPrimary[20],
      }}
      className="w-full flex-row items-center justify-between bg-contrastPrimary-400">
      <Pressable onPress={handleOnPress} style={{ paddingHorizontal: defaultHorizontalSpacing }}>
        <Text style={styles.headerTitleStyle}>gus portal</Text>
      </Pressable>
      <View
        style={{ paddingHorizontal: defaultHorizontalSpacing }}
        className="flex-row justify-end">
        <HeaderRight />
      </View>
    </View>
  );
};

export default function RootLayout() {
  const colorScheme = useColorScheme();
  // Prevent the splash screen from auto-hiding before asset loading is complete.
  SplashScreen.preventAutoHideAsync();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack
        screenOptions={{
          header: (props) => <Header {...props} />,
        }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="product" />
      </Stack>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: colors.contrastPrimary[10],
  },
  headerTitleStyle: {
    color: colors.contrastSecondary[950],
    fontWeight: '800',
    fontSize: 18,
  },
});
