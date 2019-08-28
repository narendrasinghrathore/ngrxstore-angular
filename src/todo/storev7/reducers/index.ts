import * as FromReducers from './todov7.reducers';
import * as FromUserReducer from './user.reducer';
import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

export * from './todov7.reducers';
export * from './user.reducer';

export const storeName = 'todosapp';

export interface TodoAppState {
  todos: FromReducers.TodoState;
  users: FromUserReducer.UserState;
}

export const reducers: ActionReducerMap<TodoAppState> = {
  todos: FromReducers.reducer,
  users: FromUserReducer.userReducer
};

export const getTodoAppState = createFeatureSelector<
  TodoAppState
>(storeName);


