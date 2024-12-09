import React, { ReactElement, useEffect } from 'react';
import BannerDetailedItem from '../banner-detailed-item';
import { useWindowDimensions } from 'react-native';
import { styles } from './styles';
import DefaultList from '../default-list';
import borders from '@/styles/borders';
import BannerSizes, { setBannerDetailedSize } from '@/constants/banner-sizes';
import { BannerDetailedComponent } from '@/models/banner-detailed-component';

type Props = {
  data: BannerDetailedComponent[];
  horizontal: boolean;
  displaySeller?: boolean;
  HeaderComponent?: React.JSX.Element;
  FooterComponent?: ReactElement;
};

const RenderItem = ({ item }: { item: BannerDetailedComponent }) => {
  const height = BannerSizes.Detailed.height + (item.displaySeller ? 160 : 86);

  return (
    <BannerDetailedItem
      data={item}
      width={BannerSizes.Detailed.width}
      height={height}
      borderRadius={borders.radius.medium}
      imageHeight={BannerSizes.Detailed.height}
    />
  );
};

const BannerDetailedSlider = ({
  data,
  horizontal = true,
  HeaderComponent,
  FooterComponent,
}: Props) => {
  const dimensions = useWindowDimensions();

  useEffect(() => {
    setBannerDetailedSize(dimensions.width);
  }, [dimensions]);

  const keyExtractor = (item: BannerDetailedComponent): string => `bannerDetailedSlider_${item.id}`;

  return (
    <DefaultList
      horizontal={horizontal}
      data={data}
      style={styles.list}
      pagingEnabled={true}
      renderItem={RenderItem}
      keyExtractor={keyExtractor}
      ListHeaderComponent={HeaderComponent}
      ListFooterComponent={FooterComponent}
    />
  );
};

export default BannerDetailedSlider;
