import { Seller } from '../seller';

export interface SellerDetail extends Seller {
  description: string;
  reputation: string;
  sales: {
    lastMonth: number;
  };
  location: string;
}
