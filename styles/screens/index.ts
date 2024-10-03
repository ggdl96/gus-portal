export const screens = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const;

type S = keyof typeof screens;

export const screensPX: { [key in S]: string } = {
  sm: `${screens.sm}px`,
  md: `${screens.md}px`,
  lg: `${screens.lg}px`,
  xl: `${screens.xl}px`,
  '2xl': `${screens['2xl']}px`,
} as const;
