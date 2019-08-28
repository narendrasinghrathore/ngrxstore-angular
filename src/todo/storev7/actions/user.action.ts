import { Action } from '@ngrx/store';
import { IUser } from '../../../models/user.interface';

export const LOAD_USER = '[Todos] Load User';
export const LOAD_USERS = '[Todos] Load All Users';
export const LOAD_USERS_FAIL = '[Todos] Load User Fail';
export const LOAD_USERS_SUCCESS = '[Todos] Load User Success';

export class LoadUser implements Action {
  readonly type = LOAD_USER;
  constructor(public payload: number) {}
}

export class LoadUsers implements Action {
  readonly type = LOAD_USERS;
}

export class LoadUsersFail implements Action {
  readonly type = LOAD_USERS_FAIL;
  constructor(public payload: any) {}
}

export class LoadUsersSuccess implements Action {
  readonly type = LOAD_USERS_SUCCESS;
  constructor(public payload: IUser[]) {}
}

export type UserActions =
  | LoadUser
  | LoadUsers
  | LoadUsersFail
  | LoadUsersSuccess;
