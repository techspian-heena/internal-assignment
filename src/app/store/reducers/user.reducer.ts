import { User } from 'src/app/model/user';
import { UserAction, UserActionTypes } from '../actions/user.actions';

export interface UserState {
    list: User[];
    loading: boolean;
    error: Error;
}

const initialState: UserState = {
    list: [],
    loading: false,
    error: undefined
};

export function userReducer(state: UserState = initialState, action: UserAction) {
    switch (action.type) {
        case UserActionTypes.LOAD_USER:
            return {
                ...state,
                loading: true
            };

        case UserActionTypes.LOAD_USER_SUCCESS:
            return {
                ...state,
                list: action.payload,
                loading: false
            };

        case UserActionTypes.LOAD_USER_FAIL:
            return {
                ...state,
                error: action.payload,
                loading: false
            };

        case UserActionTypes.ADD_USER:
            return {
                ...state,
                loading: true
            };

        case UserActionTypes.ADD_USER_SUCCESS:
            return {
                ...state,
                list: [...state.list, action.payload],
                loading: false
            };
        case UserActionTypes.ADD_USER_FAIL:
            return {
                ...state,
                error: action.payload,
                loading: false
            };

        default:

            return state;

    }

}
