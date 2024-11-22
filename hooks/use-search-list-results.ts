import { useCallback, useEffect, useMemo, useState } from 'react';

import '../global.css';

import { DETAILED_BANNERS_DATA } from '../__mocks__/screens/home';
import { useDispatch, useSelector } from 'react-redux';
import { selectSearchList, setResults } from '@/features/searchSlice';
import { router, useFocusEffect, useLocalSearchParams } from 'expo-router';

export default function useSearchListResults() {
  const results = useSelector(selectSearchList);
  const [searchValue, setSearchValue] = useState<string>('');

  const dispatch = useDispatch();

  useEffect(() => {
    if (searchValue) {
      const pageCount = 3;
      dispatch(
        setResults({
          results: DETAILED_BANNERS_DATA,
          pageCount,
          count: DETAILED_BANNERS_DATA.length * pageCount,
        }),
      );
    } else {
    }
  }, [dispatch, searchValue]);

  const params = useLocalSearchParams();

  const getSearchParam = useCallback(() => {
    let decodedSearchParam = '';
    console.log('params: ', params, typeof params.search);
    if (typeof params.search === 'string') {
      decodedSearchParam = decodeURIComponent(params.search).trim();
    }

    if (decodedSearchParam.length === 0) {
      router.navigate('/');
    } else {
      setSearchValue(decodeURIComponent(decodedSearchParam).trim());
    }
  }, [params]);
  useFocusEffect(getSearchParam);

  const value = useMemo(
    () => ({
      results,
      searchValue,
    }),
    [results, searchValue],
  );
  return value;
}
