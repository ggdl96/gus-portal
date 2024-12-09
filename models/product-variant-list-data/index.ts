import { ProductVariant } from '../product-variant';

export type ProductVariantListData = ProductVariant & {
  onSelectVariant: (index: number) => void;
  active: boolean;
  isLoading: boolean;
};
