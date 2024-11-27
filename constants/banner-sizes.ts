import { screens } from '@/styles/screens';
import { Dimensions } from 'react-native';

export const setHighlightMainSize = (windowWidth = Dimensions.get('window').width) => {
  windowWidth = (windowWidth > screens.lg ? 660 : windowWidth) * 0.8;

  return {
    width: windowWidth,
    height: windowWidth * 1.8,
  };
};

const BannerSizes = {
  highlightMain: setHighlightMainSize(),
};

export default BannerSizes;
