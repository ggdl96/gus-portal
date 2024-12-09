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
import { SELLER_INFO } from '@/__mocks__/screens/seller';
import ParagraphSkeleton from '@/components/new-components/paragraph-skeleton';

export default function Index() {
  const dimensions = useWindowDimensions();
  const dispatch = useDispatch();
  const sellerData = useSelector((state: RootState) => state.seller);

  useEffect(() => {
    setTimeout(() => {
      dispatch(
        setSeller({
          seller: SELLER_INFO,
          detailedBannerList: DETAILED_BANNERS_DATA,
        }),
      );
    }, 3221);
  }, [dispatch]);

  return (
    <LayoutBasicNoScroll>
      <View className="flex flex-row flex-wrap w-full pb-4">
        <TitleWithAvatar
          title={sellerData.sellerInfo?.name ?? ''}
          src={{ uri: sellerData.sellerInfo?.image ?? '' }}
          isLoading={sellerData.sellerInfo.isLoading}
        />
      </View>
      <View className="flex w-full flex-1 flex-wrap">
        {!sellerData.sellerInfo.isLoading ? (
          <Text className="color-contrastSecondary-900 w-full">
            Reputation: {sellerData.sellerInfo.reputation}
          </Text>
        ) : (
          <ParagraphSkeleton />
        )}
        <View className="pt-6 w-full flex flex-row">
          {!sellerData.sellerInfo.isLoading ? (
            <BannerDescription title={sellerData.sellerInfo.description} />
          ) : (
            <ParagraphSkeleton />
          )}
        </View>
        <View className="w-full flex-1">
          {!sellerData.sellerInfo.isLoading ? (
            <Text className="color-primary-650">Location: {sellerData.sellerInfo.location}</Text>
          ) : (
            <ParagraphSkeleton />
          )}
          <View className="pt-2" />
          {!sellerData.sellerInfo.isLoading ? (
            <Text className="color-contrastSecondary-900">
              SALES IN LAST MONTH: {sellerData.sellerInfo.sales.lastMonth}
            </Text>
          ) : (
            <ParagraphSkeleton />
          )}
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
