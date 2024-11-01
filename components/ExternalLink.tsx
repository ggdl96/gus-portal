import fonts from '@/styles/fonts';
import { Href, Link } from 'expo-router';
import { openBrowserAsync } from 'expo-web-browser';
import { type ComponentProps } from 'react';
import { Platform, TextStyle, StyleSheet } from 'react-native';

type Props = Omit<ComponentProps<typeof Link>, 'href' | 'style'> & {
  href: Href<string>;
  style?: TextStyle;
};

export function ExternalLink({ href, style, ...rest }: Props) {
  return (
    <Link
      target="_blank"
      {...rest}
      style={[styles.link, style]}
      className="text-link text-sm"
      href={href}
      onPress={async (event) => {
        if (Platform.OS !== 'web') {
          // Prevent the default behavior of linking to the default browser on native.
          event.preventDefault();
          // Open the link in an in-app browser.
          await openBrowserAsync(href.toString());
        }
      }}
    />
  );
}

const styles = StyleSheet.create({
  link: { fontFamily: fonts.fontFamilies.spectral.Light },
});
