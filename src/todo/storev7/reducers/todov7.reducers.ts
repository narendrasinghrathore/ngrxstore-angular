import { ITodoList } from 'src/models/list.interface';

import * as FromTodoActions from '../actions/todov7.actions';

export interface TodoState {
  data: ITodoList[];
  loaded: boolean;
  loading: boolean;
}

export const initialStateTodo: TodoState = {
  data: [],
  loaded: false,
  loading: false
};

export function reducer(
  state = initialStateTodo,
  action: FromTodoActions.TodoActions
): TodoState {
  switch (action.type) {
    case FromTodoActions.LOAD_TODOS: {
      return {
        ...state,
        loading: true
      };
    }
    case FromTodoActions.LOAD_TODOS_SUCCESS: {
      const data = action.payload;
      console.log(data);
      return {
        ...state,
        loaded: true,
        loading: false,
        data
      };
    }
    case FromTodoActions.LOAD_TODOS_FAIL: {
      return {
        ...state,
        loaded: false,
        loading: false
      };
    }
  }

  return state;
}
