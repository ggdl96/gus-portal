import React, { Fragment, useEffect } from 'react';

import '../../../global.css';

import { DETAILED_BANNERS_DATA } from '../../../__mocks__/screens/home';
import BannerDetailedSlider from '@/components/new-components/banner-detailed-slider';
import TitleWithAvatar from '@/components/new-components/title-with-avatar';
import LayoutBasic from '@/components/new-components/layout-basic';
import { useDispatch, useSelector } from 'react-redux';
import {} from '@/features/hmbsSlice';
import { RootState } from '@/store';
import { setMbListData } from '@/features/mbSlice';

export default function Index() {
  const dispatch = useDispatch();
  const mbData = useSelector((state: RootState) => state.mb);

  useEffect(() => {
    dispatch(
      setMbListData([
        {
          list: DETAILED_BANNERS_DATA,
          sellerInfo: DETAILED_BANNERS_DATA[0].seller,
          id: DETAILED_BANNERS_DATA[0].seller.id + 'nnght1',
        },
        {
          list: DETAILED_BANNERS_DATA,
          sellerInfo: DETAILED_BANNERS_DATA[0].seller,
          id: DETAILED_BANNERS_DATA[0].seller.id + 'nnght2',
        },
        {
          list: DETAILED_BANNERS_DATA,
          sellerInfo: DETAILED_BANNERS_DATA[0].seller,
          id: DETAILED_BANNERS_DATA[0].seller.id + 'nnght3',
        },
      ]),
    );
  }, [dispatch]);

  return (
    <LayoutBasic>
      {mbData.mbListData.map((item) => (
        <Fragment key={item.id}>
          <TitleWithAvatar
            title={DETAILED_BANNERS_DATA[0].seller.name}
            id={DETAILED_BANNERS_DATA[0].seller.id}
            src={{ uri: DETAILED_BANNERS_DATA[0].seller.image }}
          />
          <BannerDetailedSlider data={DETAILED_BANNERS_DATA} horizontal displaySeller={false} />
        </Fragment>
      ))}
    </LayoutBasic>
  );
}
