import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { SortingOptionsEnum } from '../../../features/sorting-panel';
import { AppDispatch, RootState } from '../../../shared/lib/types';
import { AxiosInstance } from 'axios';
import { OfferType } from '../../../shared/types';
import { ApiRoutes } from './config';
import { redirectToRoute } from '../../user/model/action';
import { RoutesEnum } from '../../../shared/config';
import { Cities } from '../../../shared/api';
import { ChangeFavoriteStatus } from './types';

export const changeCity = createAction<Cities>('offer/changeCity');
export const setOffers = createAction<OfferType[]>('offer/setOffers');
export const setOfferOnPage = createAction<OfferType|null>('offer/setOfferOnPage');
export const setNearOffer = createAction<OfferType[]>('offer/setNearOffer');
export const changeSort = createAction<SortingOptionsEnum>('offer/changeSort');
export const setOffersDataLoadingStatus = createAction<boolean>('offer/setOffersDataLoadingStatus');
export const setFavorites = createAction<OfferType[]>('favorite/setFavorites');
export const changeStatusOfFavorite = createAction<OfferType>('favorite/changeStatusOfFavorite');


export const fetchOffers = createAsyncThunk<void, undefined,
{
    dispatch: AppDispatch;
    state: RootState;
    extra: AxiosInstance;
}>
(
  'offer/fetchOffers',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setOffersDataLoadingStatus(true));
    const {data} = await api.get<OfferType[]>(ApiRoutes.GET_OFFERS);
    dispatch(setOffersDataLoadingStatus(false));
    dispatch(setOffers(data));
  },
);

export const fetchNearOffersById = createAsyncThunk<void, string,
{
    dispatch: AppDispatch;
    state: RootState;
    extra: AxiosInstance;
}>
(
  'offer/fetchNearOffersById',
  async (offerId, {dispatch, extra: api}) => {
    const {data} = await api.get<OfferType[]>(`${ApiRoutes.GET_OFFERS}/${offerId}/nearby`);
    dispatch(setNearOffer(data?.slice(0,3)));
  },
);

export const fetchOfferById = createAsyncThunk<void, string,
{
    dispatch: AppDispatch;
    state: RootState;
    extra: AxiosInstance;
}>
(
  'offer/fetchOfferById',
  async (offerId, {dispatch, extra: api}) => {
    try {
      dispatch(setOffersDataLoadingStatus(true));
      const {data} = await api.get<OfferType>(`${ApiRoutes.GET_OFFERS}/${offerId}`);
      dispatch(setOfferOnPage(data));
    } catch(e) {
      dispatch(redirectToRoute(RoutesEnum.NOT_FOUND));
    } finally {
      dispatch(setOffersDataLoadingStatus(false));
    }
  },
);

export const fetchFavorites = createAsyncThunk<void, undefined,
{
    dispatch: AppDispatch;
    state: RootState;
    extra: AxiosInstance;
}>
(
  '/fetchFavorites',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<OfferType[]>(ApiRoutes.GET_FAVORITES);
    dispatch(setFavorites(data));
  },
);

export const changeFavoriteStatus = createAsyncThunk<
    void, ChangeFavoriteStatus, {
    dispatch: AppDispatch;
    state: RootState;
    extra: AxiosInstance;
  }
  >(
    'favorite/changeFavoriteStatus',
    async ({status,offerId}, {dispatch, extra: api, getState}) => {
      await api.post(`${ApiRoutes.GET_FAVORITES}/${offerId}/${status}`);
      await dispatch(fetchFavorites());
      await dispatch(fetchOffers());
      if(getState().offer.offerOnPage){
        await dispatch(fetchOfferById(offerId));
      }
    },
  );

