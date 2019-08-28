import { createSelector } from '@ngrx/store';
import * as fromStoreIndex from '../reducers/index';
import * as fromReducers from '../reducers/todov7.reducers';


import { getRouteState } from '../../../app/storev7/index';

import { ITodoList } from '../../../models/list.interface';

const getTodoLoading = (state: fromReducers.TodoState) => state.loading;
const getTodoLoaded = (state: fromReducers.TodoState) => state.loaded;
const getTodoEntites = (state: fromReducers.TodoState) => state.entites;

export const getTodoState = createSelector(
  fromStoreIndex.getTodoAppState,
  (state: fromStoreIndex.TodoAppState) => state.todos
);

export const getAllTodoEntites = createSelector(
  getTodoState,
  getTodoEntites
);

export const getSelectedTodo = createSelector(
  getAllTodoEntites,
  getRouteState,
  (entities, router): ITodoList => {
    return router.state && entities[router.state.params.id];
  }
);

export const getAllTodos = createSelector(
  getAllTodoEntites,
  entites => {
    return Object.keys(entites).map(id => entites[id]);
  }
);
export const getAllLoading = createSelector(
  getTodoState,
  getTodoLoading
);
export const getAllloaded = createSelector(
  getTodoState,
  getTodoLoaded
);
