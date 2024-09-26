export interface BannerTop {
  id: string;
  title: string;
  subTitle: string;
  isOwned: boolean;
  owner: {
    id: string;
    name: string;
    image: string;
  };
}
