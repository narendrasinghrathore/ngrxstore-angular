import * as fromReducers from './todov7.reducers';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromStoreIndex from './index';

const getTodoLoading = (state: fromReducers.TodoState) => state.loading;
const getTodoLoaded = (state: fromReducers.TodoState) => state.loaded;
const getTodoData = (state: fromReducers.TodoState) => state.data;

export const getTodoAppState = createFeatureSelector<
  fromStoreIndex.TodoAppState
>(fromStoreIndex.storeName);

export const getTodoState = createSelector(
  getTodoAppState,
  (state: fromStoreIndex.TodoAppState) => state.todos
);

export const getAllTodos = createSelector(
  getTodoState,
  getTodoData
);
export const getAllLoading = createSelector(
  getTodoState,
  getTodoLoading
);
export const getAllloaded = createSelector(
  getTodoState,
  getTodoLoaded
);
