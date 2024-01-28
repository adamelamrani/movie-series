import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { moviesApi } from './api/moviesApi';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { setupListeners } from '@reduxjs/toolkit/query';
import moviesReducer from './reducers/moviesSlice';

const rootReducer = combineReducers({
  movies: moviesReducer,
});

export const store = configureStore({
  reducer: {
    rootReducer,
    [moviesApi.reducerPath]: moviesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(moviesApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;