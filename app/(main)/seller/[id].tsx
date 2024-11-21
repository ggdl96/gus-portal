import React, { useEffect } from 'react';

import { DETAILED_BANNERS_DATA } from '../../../__mocks__/screens/home';
import TitleWithAvatar from '@/components/new-components/title-with-avatar';
import { View, Text, useWindowDimensions } from 'react-native';
import BannerDescription from '@/components/new-components/banner-description';
import ContentWrapper from '@/components/new-components/content-wrapper';
import BannerDetailedSlider from '@/components/new-components/banner-detailed-slider';
import '../../../global.css';
import LayoutBasicNoScroll from '@/components/new-components/layout-basic-no-scroll';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store';
import { setSeller } from '@/features/sellerSlice';

export default function Index() {
  const dimensions = useWindowDimensions();
  const dispatch = useDispatch();
  const sellerData = useSelector((state: RootState) => state.seller);

  useEffect(() => {
    dispatch(
      setSeller({
        seller: DETAILED_BANNERS_DATA[0].seller,
        detailedBannerList: DETAILED_BANNERS_DATA,
      }),
    );
  }, [dispatch]);

  return (
    <LayoutBasicNoScroll>
      <View className="flex flex-row flex-wrap w-full pb-4">
        <TitleWithAvatar
          title={sellerData.sellerInfo?.name ?? ''}
          src={{ uri: sellerData.sellerInfo?.image ?? '' }}
        />
      </View>
      <View className="flex w-full flex-1 flex-wrap">
        <Text className="color-contrastSecondary-900 w-full">Reputation: TOP</Text>
        <View className="pt-6 w-full flex flex-row">
          <BannerDescription title="Here should go a short description of this particular seller." />
        </View>
        <View className="w-full flex-1">
          <Text className="color-primary-650">Location: Country state/province City ST 12345</Text>
          <View className="pt-2" />
          <Text className="color-contrastSecondary-900">SALES IN LAST MONTH: 1235.00</Text>
          <View className="pt-2" />
          <View className="pt-6" />
          <View className="flex flex-row w-full">
            <ContentWrapper text={'Data 1'} key={`ThemedContentWrapper`} seeAll>
              <BannerDetailedSlider
                data={sellerData.detailedBannerList}
                horizontal={true}
                displaySeller={false}
              />
            </ContentWrapper>
          </View>
          <View
            className="flex flex-row w-full border-t-2 border-t-contrastPrimary-80"
            style={{
              height: dimensions.height * 0.18,
            }}
          />
        </View>
      </View>
    </LayoutBasicNoScroll>
  );
}
