import { configureStore } from '@reduxjs/toolkit';
//import createSagaMiddleware from 'redux-saga';

import searchReducer from '../features/searchSlice';
import homeSlice from '@/features/homeSlice';
import sellerSlice from '@/features/sellerSlice';

// export const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    search: searchReducer,
    home: homeSlice,
    seller: sellerSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(), //.concat(sagaMiddleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
