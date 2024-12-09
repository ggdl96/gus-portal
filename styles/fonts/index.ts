const fontFamilies = {
  spectral: {
    Medium: 'Spectral-Medium',
    Regular: 'Spectral-Regular',
    ExtraBold: 'Spectral-ExtraBold',
    Light: 'Spectral-Light',
    MediumItalic: 'Spectral-MediumItalic',
    ExtraBoldItalic: 'Spectral-ExtraBoldItalic',
    LightItalic: 'Spectral-LightItalic',
  },
} as const;

export const importFontsSetup = {
  [fontFamilies.spectral.Medium]: require('../../assets/fonts/spectral/Spectral-Medium.ttf'),
  [fontFamilies.spectral.Regular]: require('../../assets/fonts/spectral/Spectral-Regular.ttf'),
  [fontFamilies.spectral.ExtraBold]: require('../../assets/fonts/spectral/Spectral-ExtraBold.ttf'),
  [fontFamilies.spectral.Light]: require('../../assets/fonts/spectral/Spectral-Light.ttf'),
  [fontFamilies.spectral
    .MediumItalic]: require('../../assets/fonts/spectral/Spectral-MediumItalic.ttf'),
  [fontFamilies.spectral
    .ExtraBoldItalic]: require('../../assets/fonts/spectral/Spectral-ExtraBoldItalic.ttf'),
  [fontFamilies.spectral
    .LightItalic]: require('../../assets/fonts/spectral/Spectral-LightItalic.ttf'),
} as const;

export type FontsAvailable = keyof typeof importFontsSetup;

const fonts = {
  fontFamilies,
} as const;

export default fonts;
