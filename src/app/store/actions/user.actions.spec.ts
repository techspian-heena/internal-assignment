import { provideMockStore } from '@ngrx/store/testing';
import { AddUserAction, AddUserFailAction, AddUserSuccessAction,
    LoadUserAction, LoadUserFailAction, LoadUserSuccessAction, UserActionTypes } from './user.actions';

describe('Activity Actions', () => {
    beforeEach(() => {
        provideMockStore({
            initialState: {
              user: {
                list: [],
                loading: false
              }
            },
          });
    });

    it('should load user', () => {
        expect(new LoadUserAction()).toEqual({
            type: UserActionTypes.LOAD_USER
        });
    });

    it('should load user success', () => {
        expect(new LoadUserSuccessAction([])).toEqual({
            type: UserActionTypes.LOAD_USER_SUCCESS, payload: []
        });
    });

    it('should load user fail', () => {
        expect(new LoadUserFailAction(null)).toEqual({
            type: UserActionTypes.LOAD_USER_FAIL, payload: null
        });
    });

    it('should add user', () => {
        const requestBody = {};
        expect(new AddUserAction(requestBody)).toEqual({
            type: UserActionTypes.ADD_USER, payload: {}
        });
    });

    it('should add user success', () => {
        expect(new AddUserSuccessAction({})).toEqual({
            type: UserActionTypes.ADD_USER_SUCCESS, payload: {}
        });
    });

    it('should add user fail', () => {
        expect(new AddUserFailAction(null)).toEqual({
            type: UserActionTypes.ADD_USER_FAIL, payload: null
        });
    });



});
