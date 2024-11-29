import { screens } from '@/styles/screens';
import { Dimensions } from 'react-native';

export const setHighlightMainSize = (windowWidth = Dimensions.get('window').width) => {
  const width = (windowWidth > screens.lg ? 660 : windowWidth) * 0.8;

  return {
    width,
    height: width * 1.8,
  };
};

export const setBannerDetailedSize = (windowWidth = Dimensions.get('window').width) => {
  const width = (windowWidth > screens.lg ? 580 : windowWidth) * 0.8;

  return {
    width,
    height: width * 0.44,
  };
};

const BannerSizes = {
  highlightMain: setHighlightMainSize(),
  Detailed: setBannerDetailedSize(),
};

export default BannerSizes;
