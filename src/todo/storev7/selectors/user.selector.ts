import { createSelector } from '@ngrx/store';

import * as fromStore from '../reducers/index';

const GETUSERLOADING = (state: fromStore.UserState) => state.loading;

const GETUSERLOADED = (state: fromStore.UserState) => state.loaded;

const GETUSERS = (state: fromStore.UserState) => state.entites;

export const getUserState = createSelector(
  fromStore.getTodoAppState,
  (state: fromStore.TodoAppState) => state.users
);

export const getUsersLoading = createSelector(
  getUserState,
  GETUSERLOADING
);

export const getUsersLoaded = createSelector(
  getUserState,
  GETUSERLOADED
);
export const getUsersEntities = createSelector(
  getUserState,
  GETUSERS
);

export const getUsers = createSelector(
  getUsersEntities,
  entities => {
    return Object.keys(entities).map(id => entities[+id]);
  }
);

export const getUser = () =>
  createSelector(
    getUsersEntities,
    (entties, props) => entties[props.id]
  );
