import { Seller } from '../seller';

export interface SellerComponent extends Seller {
  isLoading: boolean;
}
