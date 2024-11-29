import { BannerDetailed } from '../banner-detailed';

export interface BannerDetailedComponent extends BannerDetailed {
  isLoading: boolean;
  displaySeller: boolean;
}
