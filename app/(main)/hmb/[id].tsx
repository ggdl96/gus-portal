import React, { useEffect } from 'react';

import '../../../global.css';

import { DETAILED_BANNERS_DATA } from '../../../__mocks__/screens/home';
import BannerDetailedSlider from '@/components/new-components/banner-detailed-slider';
import TitleWithAvatar from '@/components/new-components/title-with-avatar';
import { useWindowDimensions, View } from 'react-native';
import LayoutBasic from '@/components/new-components/layout-basic';
import { RootState } from '@/store';
import { useDispatch, useSelector } from 'react-redux';
import { setHbmListData } from '@/features/hmbSlice';

export default function Index() {
  const dimensions = useWindowDimensions();
  const dispatch = useDispatch();
  const hmbData = useSelector((state: RootState) => state.hmb);

  useEffect(() => {
    dispatch(
      setHbmListData([
        {
          list: DETAILED_BANNERS_DATA,
          sellerInfo: DETAILED_BANNERS_DATA[0].seller,
          id: DETAILED_BANNERS_DATA[0].seller.id + 'avb1',
        },
        {
          list: DETAILED_BANNERS_DATA,
          sellerInfo: DETAILED_BANNERS_DATA[0].seller,
          id: DETAILED_BANNERS_DATA[0].seller.id + 'avb2',
        },
        {
          list: DETAILED_BANNERS_DATA,
          sellerInfo: DETAILED_BANNERS_DATA[0].seller,
          id: DETAILED_BANNERS_DATA[0].seller.id + 'avb3',
        },
      ]),
    );
  }, [dispatch]);
  return (
    <LayoutBasic>
      <View
        className="w-full flex"
        style={{
          minHeight: dimensions.height,
        }}>
        {hmbData.hmbListData.map((item) => (
          <View className="w-full flex pb-6" key={item.id}>
            <TitleWithAvatar
              title={item.sellerInfo.name}
              id={item.sellerInfo.id}
              src={{ uri: item.sellerInfo.image }}
            />
            <BannerDetailedSlider data={item.list} horizontal displaySeller={false} />
          </View>
        ))}
      </View>
    </LayoutBasic>
  );
}
