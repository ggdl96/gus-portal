export interface BannerTop {
  id: string;
  title: string;
  subTitle: string;
  isOwned: boolean;
  image: string;
  owner: {
    id: string;
    name: string;
    image: string;
  };
}
