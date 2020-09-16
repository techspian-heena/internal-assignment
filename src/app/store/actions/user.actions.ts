import { Action } from '@ngrx/store';
import { User } from 'src/app/model/user';

export enum UserActionTypes {
  LOAD_USER = '[USER] Load User',
  LOAD_USER_SUCCESS = '[USER] Load User Success',
  LOAD_USER_FAIL = '[USER] Load User Fail',
  ADD_USER = '[USER] Add User',
  ADD_USER_SUCCESS = '[USER] Add User Success',
  ADD_USER_FAIL = '[USER] Add User Fail'
}

export class LoadUserAction implements Action {
  readonly type = UserActionTypes.LOAD_USER;
}

export class LoadUserSuccessAction implements Action {
  readonly type = UserActionTypes.LOAD_USER_SUCCESS;

  constructor(public payload: Array<User>) { }
}

export class LoadUserFailAction implements Action {
  readonly type = UserActionTypes.LOAD_USER_FAIL;

  constructor(public payload: Error) { }
}

export class AddUserAction implements Action {
  readonly type = UserActionTypes.ADD_USER;

  constructor(public payload: User) { }
}

export class AddUserSuccessAction implements Action {
  readonly type = UserActionTypes.ADD_USER_SUCCESS;

  constructor(public payload: User) { }
}

export class AddUserFailAction implements Action {
  readonly type = UserActionTypes.ADD_USER_FAIL;

  constructor(public payload: Error) { }
}

export type UserAction = LoadUserAction |
  LoadUserSuccessAction |
  LoadUserFailAction |
  AddUserAction |
  AddUserSuccessAction |
  AddUserFailAction;
