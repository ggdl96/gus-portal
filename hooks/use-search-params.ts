import { useCallback, useState } from 'react';

import '../global.css';
import { useFocusEffect, useLocalSearchParams } from 'expo-router';
import { startLoading } from '@/features/searchSlice';
import { useDispatch } from 'react-redux';

export default function useSearchParams() {
  const params = useLocalSearchParams();
  const [searchValue, setSearchValue] = useState<string>('');
  const dispatch = useDispatch();

  const getSearchParam = useCallback(() => {
    let decodedSearchParam = '';

    if (typeof params.search === 'string') {
      decodedSearchParam = decodeURIComponent(params.search).trim();
    }

    if (decodedSearchParam.length !== 0) {
      dispatch(startLoading());
      const unsubscribe = setTimeout(() => {
        setSearchValue(decodedSearchParam);
      }, 3111);

      return () => {
        clearTimeout(unsubscribe);
      };
    }
  }, [params.search, dispatch]);

  useFocusEffect(getSearchParam);

  return searchValue;
}
