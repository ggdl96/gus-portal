import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { SplashScreen, Stack } from 'expo-router';
import { useColorScheme } from '@/hooks/useColorScheme';
import { StyleSheet } from 'react-native';
import colors from '@/styles/colors';

export default function RootLayout() {
  const colorScheme = useColorScheme();
  // Prevent the splash screen from auto-hiding before asset loading is complete.
  SplashScreen.preventAutoHideAsync();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack
        screenOptions={{
          headerStyle: styles.headerStyle,
          headerTitleStyle: styles.headerTitleStyle,
          title: 'gus portal',
          headerTitleAlign: 'left',
          statusBarColor: colors.contrastSecondary[950],
          headerBackVisible: false,
        }}>
        <Stack.Screen name="index" />
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
