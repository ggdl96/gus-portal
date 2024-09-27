import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { SplashScreen, Stack } from 'expo-router';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function RootLayout() {
  const colorScheme = useColorScheme();
  // Prevent the splash screen from auto-hiding before asset loading is complete.
  SplashScreen.preventAutoHideAsync();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: '#333',
          },
          headerTitleStyle: {
            color: '#fff',
          },
          title: 'gus portal',
        }}>
        <Stack.Screen name="index" />
      </Stack>
    </ThemeProvider>
  );
}
