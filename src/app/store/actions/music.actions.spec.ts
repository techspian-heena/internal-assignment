import { provideMockStore } from '@ngrx/store/testing';
import { AddMusicAction, AddMusicFailAction, AddMusicSuccessAction, DeleteMusicAction, DeleteMusicFailAction, DeleteMusicSuccessAction, LoadMusicAction, LoadMusicFailAction, LoadMusicSucessAction, MusicActionTypes, UpdateMusicAction, UpdateMusicFailAction, UpdateMusicSuccessAction } from './music.actions';

describe('Activity Actions', () => {
    beforeEach(() => {
        provideMockStore({
            initialState: {
              music: {
                list: [],
                loading: false
              }
            },
          });
    });

    it('should load music', () => {
        expect(new LoadMusicAction()).toEqual({
            type: MusicActionTypes.LOAD_MUSIC
        });
    });

    it('should load music success', () => {
        expect(new LoadMusicSucessAction([])).toEqual({
            type: MusicActionTypes.LOAD_MUSIC_SUCCESS, payload: []
        });
    });

    it('should load music fail', () => {
        expect(new LoadMusicFailAction(null)).toEqual({
            type: MusicActionTypes.LOAD_MUSIC_FAIL, payload: null
        });
    });

    it('should add music', () => {
        const requestBody = {};
        expect(new AddMusicAction(requestBody)).toEqual({
            type: MusicActionTypes.ADD_MUSIC, payload: {}
        });
    });

    it('should add music success', () => {
        expect(new AddMusicSuccessAction({})).toEqual({
            type: MusicActionTypes.ADD_MUSIC_SUCCESS, payload: {}
        });
    });

    it('should add music fail', () => {
        expect(new AddMusicFailAction(null)).toEqual({
            type: MusicActionTypes.ADD_MUSIC_FAIL, payload: null
        });
    });

    it('should update music', () => {
        const requestBody = {};
        expect(new UpdateMusicAction(requestBody)).toEqual({
            type: MusicActionTypes.UPDATE_MUSIC, payload: {}
        });
    });

    it('should update music success', () => {
        const requestBody = {};
        expect(new UpdateMusicSuccessAction(requestBody)).toEqual({
            type: MusicActionTypes.UPDATE_MUSIC_SUCCESS, payload: {}
        });
    });

    it('should update music fail', () => {
        expect(new UpdateMusicFailAction(null)).toEqual({
            type: MusicActionTypes.UPDATE_MUSIC_FAIL, payload: null
        });
    });

    it('should delete music', () => {
        const id = 1;
        expect(new DeleteMusicAction(id)).toEqual({
            type: MusicActionTypes.DELETE_MUSIC, payload: 1
        });
    });

    it('should delete music success', () => {
        const id = 1;
        expect(new DeleteMusicSuccessAction(id)).toEqual({
            type: MusicActionTypes.DELETE_MUSIC_SUCCESS, payload: 1
        });
    });

    it('should delete music fail', () => {
        const id = 1;
        expect(new DeleteMusicFailAction(id)).toEqual({
            type: MusicActionTypes.DELETE_MUSIC_FAIL, payload: 1
        });
    });

});
