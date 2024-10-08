import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { router, SplashScreen, Stack } from 'expo-router';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Pressable, StyleSheet, Text } from 'react-native';
import colors from '@/styles/colors';
import useSpacing from '@/hooks/useSpacing';
import SearchBar from '@/components/new-components/search-bar/search-bar';
import { useState } from 'react';

const HeaderRight = () => {
  const [value, setValue] = useState<string>('');

  const handleOnCancel = function (): void {};
  const handleOnFocus = function ({ nativeEvent }: { nativeEvent: any }): void {};
  const handleOnPressSearchHistoryItem = function (item: string): void {};
  const handleOnDeleteHistoryItem = function (item: string): void {};
  const handleOnClosePreviousSearch = function (): void {};

  const handleOnBlur = function ({ nativeEvent }: { nativeEvent: any }): void {};

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

export default function RootLayout() {
  const colorScheme = useColorScheme();
  // Prevent the splash screen from auto-hiding before asset loading is complete.
  SplashScreen.preventAutoHideAsync();
  const handleOnPress = () => {
    router.navigate('/');
  };

  const { defaultHorizontalSpacing } = useSpacing();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack
        screenOptions={{
          headerStyle: styles.headerStyle,
          statusBarColor: colors.contrastSecondary[950],
          headerTitleAlign: 'left',
          contentStyle: {
            paddingHorizontal: 0,
            marginHorizontal: 0,
          },
          headerLeft: () => (
            <Pressable
              onPress={handleOnPress}
              style={{ paddingHorizontal: defaultHorizontalSpacing }}>
              <Text style={styles.headerTitleStyle}>gus portal</Text>
            </Pressable>
          ),
          headerRight: HeaderRight,
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
