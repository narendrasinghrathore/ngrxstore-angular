import { ITodoList } from 'src/models/list.interface';

import * as FromTodoActions from './todov7.actions';

export interface TodoState {
  data: ITodoList[];
  loaded: boolean;
  loading: boolean;
}

export const initialStateTodo: TodoState = {
  data: [
    {
      id: 1,
      title: 'New Todo 1',
      timestamp: 1565870883778,
      userId: 1
    },
    {
      title: 'New Todo 2sdfd',
      userId: 1,
      timestamp: 1566635511601,
      id: 2
    }
  ],
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
      return {
        ...state,
        loaded: true,
        loading: false
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
