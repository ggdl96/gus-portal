import { Seller } from '../seller';

export interface BannerDetailed {
  seller: Seller;
  id: string;
  image: string;
  title: string;
  price: number;
  currencyDisplay: string;
  currencyCode: string;
}
