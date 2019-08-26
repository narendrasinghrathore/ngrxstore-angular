import * as fromReducers from '../reducers/todov7.reducers';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromStoreIndex from '../reducers/index';

const getTodoLoading = (state: fromReducers.TodoState) => state.loading;
const getTodoLoaded = (state: fromReducers.TodoState) => state.loaded;
const getTodoEntites = (state: fromReducers.TodoState) => state.entites;

export const getTodoAppState = createFeatureSelector<
  fromStoreIndex.TodoAppState
>(fromStoreIndex.storeName);

export const getTodoState = createSelector(
  getTodoAppState,
  (state: fromStoreIndex.TodoAppState) => state.todos
);

export const getAllTodoEntites = createSelector(
  getTodoState,
  getTodoEntites
);

export const getAllTodos = createSelector(
  getAllTodoEntites,
  (entites => {
    return Object.keys(entites).map(id => entites[id]);
  })
);
export const getAllLoading = createSelector(
  getTodoState,
  getTodoLoading
);
export const getAllloaded = createSelector(
  getTodoState,
  getTodoLoaded
);
