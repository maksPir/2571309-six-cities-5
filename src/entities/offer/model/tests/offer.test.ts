import { SortingOptionsEnum } from '../../../../features/sorting-panel';
import { Cities } from '../../../../shared/api';
import { PlaceType } from '../../../../shared/types';
import { changeCity, changeSort, setFavorites, setNearOffer, setOfferOnPage, setOffers, setOffersDataLoadingStatus } from '../action';
import { offersReducer } from '../offer';

describe('Offer slice', ()=>{
  it('should return initial state with empty action',()=>{
    const expectedRes = {
      city: Cities.Paris,
      offers: [],
      nearOffers: [],
      sort: SortingOptionsEnum.Popular,
      isLoading: false,
      offerOnPage: null,
      favorites: [],
    };
    const action = {type:''};
    const calculatedRes = offersReducer(expectedRes, action);
    expect(calculatedRes).toEqual(expectedRes);
  });

  it('should return default initial state with empty action and undefined state',()=>{
    const expectedRes = {
      city: Cities.Paris,
      offers: [],
      nearOffers: [],
      sort: SortingOptionsEnum.Popular,
      isLoading: false,
      offerOnPage: null,
      favorites: [],
    };
    const action = {type:''};
    const calculatedRes = offersReducer(undefined, action);
    expect(calculatedRes).toEqual(expectedRes);
  });

  it('should return state city Amsterdam',()=>{
    const expectedRes = {
      city: Cities.Amsterdam,
      offers: [],
      nearOffers: [],
      sort: SortingOptionsEnum.Popular,
      isLoading: false,
      offerOnPage: null,
      favorites: [],
    };
    const calculatedRes = offersReducer(undefined, changeCity(Cities.Amsterdam));
    expect(calculatedRes).toEqual(expectedRes);
  });

  it('should return state with filled offers',()=>{
    const expectedRes = {
      city: Cities.Paris,
      offers: [
        {
          'id': 'a20a52b2-efc2-4b0f-9396-4bdfbe5e9543',
          'title': 'Wood and stone place',
          'type': 'apartment' as PlaceType,
          'price': 576,
          'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/14.jpg',
          'city': {
            'name': Cities.Amsterdam,
            'location': {
              'latitude': 48.85661,
              'longitude': 2.351499,
              'zoom': 13
            }
          },
          'location': {
            'latitude': 48.868610000000004,
            'longitude': 2.342499,
            'zoom': 16
          },
          'isFavorite': false,
          'isPremium': false,
          'rating': 2.1,
          'description': 'TEst',
          'bedrooms': 1,
          'goods': [],
          maxAdults: 1,
          images: [''],
          host:{ 'name': 'Oliver Conner',
            'avatarUrl': 'https://url-to-image/image.png',
            'isPro': false
          }
        },
      ],
      nearOffers: [],
      sort: SortingOptionsEnum.Popular,
      isLoading: false,
      offerOnPage: null,
      favorites: [],
    };
    const calculatedRes = offersReducer(undefined, setOffers(expectedRes.offers));
    expect(calculatedRes).toEqual(expectedRes);
  });
  it('should return state with filled offerOnPage',()=>{
    const expectedRes = {
      city: Cities.Paris,
      offers: [],
      nearOffers: [],
      sort: SortingOptionsEnum.Popular,
      isLoading: false,
      offerOnPage: {
        'id': 'a20a52b2-efc2-4b0f-9396-4bdfbe5e9543',
        'title': 'Wood and stone place',
        'type': 'apartment' as PlaceType,
        'price': 576,
        'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/14.jpg',
        'city': {
          'name': Cities.Amsterdam,
          'location': {
            'latitude': 48.85661,
            'longitude': 2.351499,
            'zoom': 13
          }
        },
        'location': {
          'latitude': 48.868610000000004,
          'longitude': 2.342499,
          'zoom': 16
        },
        'isFavorite': false,
        'isPremium': false,
        'rating': 2.1,
        'description': 'TEst',
        'bedrooms': 1,
        'goods': [],
        maxAdults: 1,
        images: [''],
        host:{ 'name': 'Oliver Conner',
          'avatarUrl': 'https://url-to-image/image.png',
          'isPro': false
        }
      },
      favorites: [],
    };
    const calculatedRes = offersReducer(undefined, setOfferOnPage(expectedRes.offerOnPage));
    expect(calculatedRes).toEqual(expectedRes);
  });
  it('should return state with filled offerOnPage',()=>{
    const expectedRes = {
      city: Cities.Paris,
      offers: [],
      nearOffers: [{
        'id': 'a20a52b2-efc2-4b0f-9396-4bdfbe5e9543',
        'title': 'Wood and stone place',
        'type': 'apartment' as PlaceType,
        'price': 576,
        'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/14.jpg',
        'city': {
          'name': Cities.Amsterdam,
          'location': {
            'latitude': 48.85661,
            'longitude': 2.351499,
            'zoom': 13
          }
        },
        'location': {
          'latitude': 48.868610000000004,
          'longitude': 2.342499,
          'zoom': 16
        },
        'isFavorite': false,
        'isPremium': false,
        'rating': 2.1,
        'description': 'TEst',
        'bedrooms': 1,
        'goods': [],
        maxAdults: 1,
        images: [''],
        host:{ 'name': 'Oliver Conner',
          'avatarUrl': 'https://url-to-image/image.png',
          'isPro': false
        }
      }],
      sort: SortingOptionsEnum.Popular,
      isLoading: false,
      offerOnPage: null,
      favorites: [],
    };
    const calculatedRes = offersReducer(undefined, setNearOffer(expectedRes.nearOffers));
    expect(calculatedRes).toEqual(expectedRes);
  });

  it('should return state with PriceHighToLow sort',()=>{
    const expectedRes = {
      city: Cities.Paris,
      offers: [],
      nearOffers: [],
      sort: SortingOptionsEnum.PriceHighToLow,
      isLoading: false,
      offerOnPage: null,
      favorites: [],
    };
    const calculatedRes = offersReducer(undefined, changeSort(SortingOptionsEnum.PriceHighToLow));
    expect(calculatedRes).toEqual(expectedRes);
  });

  it('should return state with isLoading field true',()=>{
    const expectedRes = {
      city: Cities.Paris,
      offers: [],
      nearOffers: [],
      sort: SortingOptionsEnum.Popular,
      isLoading: true,
      offerOnPage: null,
      favorites: [],
    };
    const calculatedRes = offersReducer(undefined, setOffersDataLoadingStatus(true));
    expect(calculatedRes).toEqual(expectedRes);
  });

  it('should return state with isLoading field true',()=>{
    const expectedRes = {
      city: Cities.Paris,
      offers: [],
      nearOffers: [],
      sort: SortingOptionsEnum.Popular,
      isLoading: true,
      offerOnPage: null,
      favorites: [],
    };
    const calculatedRes = offersReducer(undefined, setOffersDataLoadingStatus(true));
    expect(calculatedRes).toEqual(expectedRes);
  });

  it('should return state with filled favorites',()=>{
    const expectedRes = {
      city: Cities.Paris,
      offers: [],
      nearOffers: [],
      sort: SortingOptionsEnum.Popular,
      isLoading: false,
      offerOnPage: null,
      favorites: [{
        'id': 'a20a52b2-efc2-4b0f-9396-4bdfbe5e9543',
        'title': 'Wood and stone place',
        'type': 'apartment' as PlaceType,
        'price': 576,
        'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/14.jpg',
        'city': {
          'name': Cities.Amsterdam,
          'location': {
            'latitude': 48.85661,
            'longitude': 2.351499,
            'zoom': 13
          }
        },
        'location': {
          'latitude': 48.868610000000004,
          'longitude': 2.342499,
          'zoom': 16
        },
        'isFavorite': false,
        'isPremium': false,
        'rating': 2.1,
        'description': 'TEst',
        'bedrooms': 1,
        'goods': [],
        maxAdults: 1,
        images: [''],
        host:{ 'name': 'Oliver Conner',
          'avatarUrl': 'https://url-to-image/image.png',
          'isPro': false
        }
      }],
    };
    const calculatedRes = offersReducer(undefined, setFavorites(expectedRes.favorites));
    expect(calculatedRes).toEqual(expectedRes);
  });
});
