import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { SplashScreen, Stack } from 'expo-router';
import { useColorScheme } from '@/hooks/useColorScheme';
import { useEffect } from 'react';
import { useFonts } from 'expo-font';
import { importFontsSetup } from '@/styles/fonts';
import Header from '@/components/new-components/header';

export default function RootLayout() {
  const colorScheme = useColorScheme();
  // Prevent the splash screen from auto-hiding before asset loading is complete.
  SplashScreen.preventAutoHideAsync();

  const [loaded, error] = useFonts(importFontsSetup);

  useEffect(() => {
    if (loaded || error) {
      console.info('FONTS LOADED STATUS: ', loaded);
      if (error) {
        console.error('FONTS LOADED ERROR: ', error);
      }
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

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
