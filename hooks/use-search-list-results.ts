import { useEffect } from 'react';

import '../global.css';

import { DETAILED_BANNERS_DATA } from '../__mocks__/screens/home';
import { useDispatch, useSelector } from 'react-redux';
import { selectSearchList, setResults } from '@/features/searchSlice';

export default function useSearchListResults() {
  const results = useSelector(selectSearchList);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setResults({ results: DETAILED_BANNERS_DATA, pageCount: 3 }));
  }, [dispatch]);

  return results;
}
