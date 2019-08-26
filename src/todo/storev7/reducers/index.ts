import * as FromReducers from './todov7.reducers';
import { ActionReducerMap } from '@ngrx/store';

export interface TodoAppState {
  todos: FromReducers.TodoState;
}

export const reducers: ActionReducerMap<TodoAppState> = {
  todos: FromReducers.reducer
};

export const storeName = 'todosapp';
export * from './todov7.reducers';
