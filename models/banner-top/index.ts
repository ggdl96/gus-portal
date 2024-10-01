import { Owner } from '../owner';

export interface BannerTop {
  id: string;
  title: string;
  subTitle: string;
  isOwned: boolean;
  image: string;
  owner: Owner;
}
