import { Seller } from '../seller';

export interface BannerTop {
  id: string;
  title: string;
  subTitle: string;
  isOwned: boolean;
  image: string;
  seller: Seller;
}
