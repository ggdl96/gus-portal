import { screens } from '@/styles/screens';
import { useMemo } from 'react';
import { useWindowDimensions } from 'react-native';

const useSpacing = () => {
  const dimensions = useWindowDimensions();

  let defaultHorizontalSpacing = 20;

  if (dimensions.width > screens.lg) {
    defaultHorizontalSpacing = 26;
  }

  return useMemo(
    () => ({
      defaultHorizontalSpacing,
    }),
    [defaultHorizontalSpacing],
  );
};

export default useSpacing;
