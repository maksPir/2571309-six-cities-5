import { changeAuthStatus, setUser } from '../action';
import { AuthEnum } from '../types';
import { userReducer } from '../user';

describe('User slice', ()=>{
  it('should return initial state with empty action',()=>{
    const expectedRes = {
      authorizationStatus: AuthEnum.UNKNOWN,
      user: null
    };
    const action = {type:''};
    const calculatedRes = userReducer(expectedRes, action);
    expect(calculatedRes).toEqual(expectedRes);
  });

  it('should return default initial state with empty action and undefined state',()=>{
    const expectedRes = {
      authorizationStatus: AuthEnum.UNKNOWN,
      user: null
    };
    const action = {type:''};
    const calculatedRes = userReducer(undefined, action);
    expect(calculatedRes).toEqual(expectedRes);
  });
  it('should return state with setted authStatus as AUTHENTICATED',()=>{
    const expectedRes = {
      authorizationStatus: AuthEnum.AUTHENTICATED,
      user: null
    };
    const calculatedRes = userReducer(undefined, changeAuthStatus(AuthEnum.AUTHENTICATED));
    expect(calculatedRes).toEqual(expectedRes);
  });
  it('should return state with setted authStatus as AUTHENTICATED and filled user',()=>{
    const expectedRes = {
      authorizationStatus: AuthEnum.AUTHENTICATED,
      user: {
        name: 'Oliver Conner',
        avatarUrl: 'https://url-to-image/image.png',
        isPro: false
      }
    };
    const calculatedRes = userReducer(undefined, setUser({
      name: 'Oliver Conner',
      avatarUrl: 'https://url-to-image/image.png',
      isPro: false
    }));
    expect(calculatedRes).toEqual(expectedRes);
  });
  it('should return state with setted authStatus as NO AUTHENTICATED and empty field user',()=>{
    const expectedRes = {
      authorizationStatus: AuthEnum.NO_AUTHENTICATED,
      user: null
    };
    const calculatedRes = userReducer(undefined, setUser(null));
    expect(calculatedRes).toEqual(expectedRes);
  });
});
