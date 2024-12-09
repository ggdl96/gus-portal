import React from 'react';

import '../../../global.css';

import { View } from 'react-native';
import BannerDescription from '@/components/new-components/banner-description';
import BannerTitle from '@/components/new-components/banner-title';

interface Props {
  searchValue: string;
  resultCount: number;
  isLoading: boolean;
}

const SearchListHead = ({ searchValue, resultCount, isLoading }: Props) => {
  return (
    <View className="flex w-full">
      {searchValue ? (
        <View className="w-full flex flex-row pb-4">
          <BannerDescription title={`Search Results by: ${searchValue}`} />
        </View>
      ) : null}
      {resultCount === 0 && !isLoading ? (
        <View className="w-full flex flex-row justify-center">
          <BannerTitle title="No Results" />
        </View>
      ) : null}
    </View>
  );
};

export default SearchListHead;
