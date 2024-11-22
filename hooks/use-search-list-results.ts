import { useCallback, useEffect, useMemo } from 'react';

import '../global.css';

import { DETAILED_BANNERS_DATA } from '../__mocks__/screens/home';
import { useDispatch, useSelector } from 'react-redux';
import { resetResults, selectSearchList, setResults } from '@/features/searchSlice';
import { useFocusEffect } from 'expo-router';
import useSearchParams from './use-search-params';

export default function useSearchListResults() {
  const results = useSelector(selectSearchList);
  const searchValue = useSearchParams();

  const dispatch = useDispatch();

  const onFocusScreen = useCallback(() => {
    return () => {
      dispatch(resetResults());
    };
  }, [dispatch]);
  useFocusEffect(onFocusScreen);

  useEffect(() => {
    if (searchValue) {
      const pageCount = 3;
      dispatch(
        setResults({
          results: DETAILED_BANNERS_DATA,
          pageCount,
          count: DETAILED_BANNERS_DATA.length * pageCount,
          searchValue,
        }),
      );
    }
  }, [dispatch, searchValue]);

  const value = useMemo(
    () => ({
      results,
    }),
    [results],
  );
  return value;
}
