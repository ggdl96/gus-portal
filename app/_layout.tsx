import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { SplashScreen, Stack } from 'expo-router';
import { useColorScheme } from '@/hooks/useColorScheme';
import { useEffect } from 'react';
import { useFonts } from 'expo-font';
import { importFontsSetup } from '@/styles/fonts';
import Header from '@/components/new-components/header';
import { NativeStackHeaderProps } from '@react-navigation/native-stack';

const HeaderProp = (_props: NativeStackHeaderProps) => <Header />;
const HeaderPropExtras = (_props: NativeStackHeaderProps) => <Header displayRightSection={false} />;

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
          header: () => null,
        }}>
        <Stack.Screen
          name="(main)"
          options={{
            header: HeaderProp,
          }}
        />
        <Stack.Screen
          name="(extras)"
          options={{
            header: HeaderPropExtras,
          }}
        />
        <Stack.Screen name="+not-found" />
      </Stack>
    </ThemeProvider>
  );
}
