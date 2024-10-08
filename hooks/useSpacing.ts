import { screens } from '@/styles/screens';
import { useEffect, useMemo, useState } from 'react';
import { useWindowDimensions } from 'react-native';

const useSpacing = () => {
  const dimensions = useWindowDimensions();

  const [defaultHorizontalSpacing, setDefaultHorizontalSpacing] = useState(20);

  useEffect(() => {
    if (dimensions.width > screens.lg) {
      setDefaultHorizontalSpacing(26);
    }
  }, [dimensions.width]);

  return useMemo(
    () => ({
      defaultHorizontalSpacing,
    }),
    [defaultHorizontalSpacing],
  );
};

export default useSpacing;
