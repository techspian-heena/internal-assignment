import { Music } from '../../model/music';
import { MusicAction, MusicActionTypes } from '../actions/music.actions';

export interface MusicState {
    list: Music[];
    loading: boolean;
    error: Error;
}

const initialState: MusicState = {
    list: [],
    loading: false,
    error: undefined
};

export function musicReducer(state: MusicState = initialState, action: MusicAction) {
    switch (action.type) {
        case MusicActionTypes.LOAD_MUSIC:
            return {
                ...state,
                loading: true
            };

        case MusicActionTypes.LOAD_MUSIC_SUCCESS:
            return {
                ...state,
                list: action.payload,
                loading: false
            };

        case MusicActionTypes.LOAD_MUSIC_FAIL:
            return {
                ...state,
                error: action.payload,
                loading: false
            };

        case MusicActionTypes.ADD_MUSIC:
            return {
                ...state,
                loading: true
            };

        case MusicActionTypes.ADD_MUSIC_SUCCESS:
            return {
                ...state,
                list: [...state.list, action.payload],
                loading: false
            };
        case MusicActionTypes.ADD_MUSIC_FAIL:
            return {
                ...state,
                error: action.payload,
                loading: false
            };

        case MusicActionTypes.UPDATE_MUSIC:
            return {
                ...state,
                loading: true
            };

        case MusicActionTypes.UPDATE_MUSIC_SUCCESS:
            return {
                ...state,
                list: action.payload,
                loading: false
            };

        case MusicActionTypes.UPDATE_MUSIC_FAIL:
            return {
                ...state,
                error: action.payload,
                loading: false
            };

        case MusicActionTypes.DELETE_MUSIC:
            return {
                ...state,
                loading: true
            };

        case MusicActionTypes.DELETE_MUSIC_SUCCESS:
            return {
                ...state,
                list: state.list.filter(item => item.id !== action.payload),
                loading: false
            };

        case MusicActionTypes.DELETE_MUSIC_FAIL:
            return {
                ...state,
                error: action.payload,
                loading: false
            };

        default:
            return state;
    }
}
