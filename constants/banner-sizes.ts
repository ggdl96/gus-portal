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

export const setBannerSmallSize = (windowWidth = Dimensions.get('window').width) => {
  const width = (windowWidth > screens.lg ? 430 : windowWidth) * 0.32;

  return {
    width,
    height: width * 1.7,
  };
};

export const setBannerMediumSize = (windowWidth = Dimensions.get('window').width) => {
  const width = (windowWidth > screens.lg ? 500 : windowWidth) * 0.54;

  return {
    width,
    height: width * 1.5,
  };
};

const BannerSizes = {
  highlightMain: setHighlightMainSize(),
  Detailed: setBannerDetailedSize(),
  small: setBannerSmallSize(),
  medium: setBannerMediumSize(),
};

export default BannerSizes;
