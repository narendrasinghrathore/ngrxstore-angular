import { createAction } from '@ngrx/store';

export enum TodosActionsTypes {
  LoadTodos = '[TODO] Loading todos',
  LoadTodosSuccess = '[TODO] Loading todos success',
  LoadTodosFail = '[TODO] Loading todos fail'
}

export const LoadTodo = createAction(
  TodosActionsTypes.LoadTodos
);

export const LoadTodoSuccess = createAction(
  TodosActionsTypes.LoadTodosSuccess
);

export const LoadTodoFail = createAction(
  TodosActionsTypes.LoadTodosFail
);
