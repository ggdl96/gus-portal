import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { router, SplashScreen, Stack } from 'expo-router';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Pressable, StyleSheet, Text } from 'react-native';
import colors from '@/styles/colors';
import useSpacing from '@/hooks/useSpacing';

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
