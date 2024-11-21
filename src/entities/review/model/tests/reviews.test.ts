import { addReview, setIsLoadingReview, setReviewsOnPage } from '../action';
import { reviewsReducer } from '../reviews';

describe('Review slice', ()=>{
  it('should return initial state with empty action',()=>{
    const expectedRes = {
      reviews: [],
      isLoading: false,
      isError: false
    };
    const action = {type:''};
    const calculatedRes = reviewsReducer(expectedRes, action);
    expect(calculatedRes).toEqual(expectedRes);
  });

  it('should return default initial state with empty action and undefined state',()=>{
    const expectedRes = {
      reviews: [],
      isLoading: false,
      isError: false
    };
    const action = {type:''};
    const calculatedRes = reviewsReducer(undefined, action);
    expect(calculatedRes).toEqual(expectedRes);
  });

  it('should return state with filled reviews state',()=>{
    const expectedRes = {
      reviews: [ {
        'id': 'b67ddfd5-b953-4a30-8c8d-bd083cd6b62a',
        'date': '2019-05-08T14:13:56.569Z',
        'user': {
          'name': 'Oliver Conner',
          'avatarUrl': 'https://url-to-image/image.png',
          'isPro': false
        },
        'comment': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
        'rating': 4
      }
      ],
      isLoading: false,
      isError: false
    };
    const calculatedRes = reviewsReducer(undefined, setReviewsOnPage([ {
      'id': 'b67ddfd5-b953-4a30-8c8d-bd083cd6b62a',
      'date': '2019-05-08T14:13:56.569Z',
      'user': {
        'name': 'Oliver Conner',
        'avatarUrl': 'https://url-to-image/image.png',
        'isPro': false
      },
      'comment': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
      'rating': 4
    }
    ]));
    expect(calculatedRes).toEqual(expectedRes);
  });

  it('should return state with filled reviews state',()=>{
    const expectedRes = {
      reviews: [],
      isLoading: true,
      isError: false
    };
    const calculatedRes = reviewsReducer(undefined, setIsLoadingReview(true));
    expect(calculatedRes).toEqual(expectedRes);
  });
  it('should return state while pending action add review',()=>{
    const expectedRes = {
      reviews: [],
      isLoading: true,
      isError: false
    };
    const calculatedRes = reviewsReducer(undefined, addReview.pending);
    expect(calculatedRes).toEqual(expectedRes);
  });
  it('should return state after action add review was rejected',()=>{
    const expectedRes = {
      reviews: [],
      isLoading: false,
      isError: true
    };
    const calculatedRes = reviewsReducer(undefined, addReview.rejected);
    expect(calculatedRes).toEqual(expectedRes);
  });
  it('should return state after action add review was fulfilled',()=>{
    const expectedRes = {
      reviews: [],
      isLoading: false,
      isError: false
    };
    const calculatedRes = reviewsReducer(undefined, addReview.fulfilled);
    expect(calculatedRes).toEqual(expectedRes);
  });
});
