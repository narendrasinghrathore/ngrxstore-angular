import { ITodoList } from '../../models/list.interface';
import { Action, createReducer, on } from '@ngrx/store';

import * as TodoPageActions from './todo.actions';

export interface ITodoState {
  list: ITodoList[];
  loading: boolean;
  loaded: boolean;
}

const intialState: ITodoState = {
  list: [],
  loaded: false,
  loading: false
};

const todoReducer = createReducer(
  intialState,
  on(TodoPageActions.LoadTodo, state => ({ ...state, loading: true })),
  on(TodoPageActions.LoadTodoSuccess, state => ({ ...state, loading: false, loaded: true })),
  on(TodoPageActions.LoadTodoFail, state => ({ ...state, loaded: false }))
);

export function reducer(state: ITodoState | undefined, action: Action) {
  return todoReducer(state, action);
}


export const name = 'todos';
