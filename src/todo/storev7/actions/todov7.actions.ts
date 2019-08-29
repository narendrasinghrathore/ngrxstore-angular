import { Action } from '@ngrx/store';
import { ITodoList } from 'src/models/list.interface';

export const LOAD_TODOS = '[Todos] Load Todos';
export const LOAD_TODOS_FAIL = '[Todos] Load Todos Fail';
export const LOAD_TODOS_SUCCESS = '[Todos] Load Todos Success';

export class LoadTodos implements Action {
  readonly type = LOAD_TODOS;
}

export class LoadTodosFail implements Action {
  readonly type = LOAD_TODOS_FAIL;
  constructor(public payload: any) {}
}

export class LoadTodosSuccess implements Action {
  readonly type = LOAD_TODOS_SUCCESS;
  constructor(public payload: ITodoList[]) {}
}

// create todo

export const CREATE_TODO = '[Todos] Create Todo';
export const CREATE_TODO_FAIL = '[Todos] Create Todo Fail';
export const CREATE_TODO_SUCCESS = '[Todos] Create Todo Success';

export class CreateTodo implements Action {
  readonly type = CREATE_TODO;
  constructor(public payload: ITodoList) {}
}

export class CreateTodoSuccess implements Action {
  readonly type = CREATE_TODO_SUCCESS;
  constructor(public payload: ITodoList) {}
}

export class CreateTodoFail implements Action {
  readonly type = CREATE_TODO_FAIL;
  constructor(public payload: any) {}
}

// update todo

export const UPDATE_TODO = '[Todos] Update Todo';
export const UPDATE_TODO_FAIL = '[Todos] Update Todo Fail';
export const UPDATE_TODO_SUCCESS = '[Todos] Update Todo Success';

export class UpdateTodo implements Action {
  readonly type = UPDATE_TODO;
  constructor(public payload: ITodoList) {}
}

export class UpdateTodoSuccess implements Action {
  readonly type = UPDATE_TODO_SUCCESS;
  constructor(public payload: ITodoList) {}
}

export class UpdateTodoFail implements Action {
  readonly type = UPDATE_TODO_FAIL;
  constructor(public payload: any) {}
}

// update todo

export const DELETE_TODO = '[Todos] Delete Todo';
export const DELETE_TODO_FAIL = '[Todos] Delete Todo Fail';
export const DELETE_TODO_SUCCESS = '[Todos] Delete Todo Success';

export class DeleteTodo implements Action {
  readonly type = DELETE_TODO;
  constructor(public payload: ITodoList) {}
}

export class DeleteTodoSuccess implements Action {
  readonly type = DELETE_TODO_SUCCESS;
  constructor(public payload: ITodoList) {}
}

export class DeleteTodoFail implements Action {
  readonly type = DELETE_TODO_FAIL;
  constructor(public payload: any) {}
}

export type TodoActions =
  | LoadTodos
  | LoadTodosFail
  | LoadTodosSuccess
  | CreateTodo
  | CreateTodoSuccess
  | CreateTodoFail
  | UpdateTodo
  | UpdateTodoSuccess
  | UpdateTodoFail
  | DeleteTodo
  | DeleteTodoFail
  | DeleteTodoSuccess;
