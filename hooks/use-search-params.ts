import { useCallback, useState } from 'react';

import '../global.css';
import { useFocusEffect, useLocalSearchParams } from 'expo-router';

export default function useSearchParams() {
  const params = useLocalSearchParams();
  const [searchValue, setSearchValue] = useState<string>('');

  const getSearchParam = useCallback(() => {
    let decodedSearchParam = '';

    if (typeof params.search === 'string') {
      decodedSearchParam = decodeURIComponent(params.search).trim();
    }

    if (decodedSearchParam.length !== 0) {
      setSearchValue(decodedSearchParam);
    }
  }, [params.search]);

  useFocusEffect(getSearchParam);

  return searchValue;
}
