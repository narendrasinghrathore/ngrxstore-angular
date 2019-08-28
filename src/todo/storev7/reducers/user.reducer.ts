import { IUser } from '../../../models/user.interface';
import * as FromUserActions from '../actions/user.action';

export interface UserState {
  entites: { [id: number]: IUser };
  loading: boolean;
  loaded: boolean;
}

export const initialUserState: UserState = {
  entites: {},
  loaded: false,
  loading: false
};

export function userReducer(
  state = initialUserState,
  action: FromUserActions.UserActions
): UserState {
  switch (action.type) {
    case FromUserActions.LOAD_USERS: {
      return {
        ...state,
        loading: true
      };
    }
    case FromUserActions.LOAD_USERS_SUCCESS: {
      const list = action.payload;
      const entites = list.reduce(
        (en: { [id: number]: IUser }, user: IUser) => {
          return {
            ...en,
            [user.id]: user
          };
        },
        {
          ...state.entites
        }
      );
      return {
        ...state,
        loading: false,
        loaded: true,
        entites
      };
    }
    case FromUserActions.LOAD_USERS_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false
      };
    }
  }

  return state;
}
