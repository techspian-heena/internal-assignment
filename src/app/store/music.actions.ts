import { Action } from '@ngrx/store';
import { Music } from '../model/music';


export enum MusicActionTypes {
    LOAD_MUSIC = '[MUSIC] Load Music',
    LOAD_MUSIC_SUCCESS= '[MUSIC] Load Music Success',
    LOAD_MUSIC_FAIL = '[MUSIC] Load Music Fail',
    ADD_MUSIC = '[MUSIC] Add Music',
    ADD_MUSIC_SUCCESS = '[MUSIC] Add Music Success',
    ADD_MUSIC_FAIL = '[MUSIC] Add Music Fail',
    UPDATE_MUSIC = '[MUSIC] Update Music',
    UPDATE_MUSIC_SUCCESS = '[MUSIC] Update Music Success',
    UPDATE_MUSIC_FAIL  = '[MUSIC] Update Music Fail',
    DELETE_MUSIC = '[MUSIC] Delete Music',
    DELETE_MUSIC_SUCCESS = '[MUSIC] Delete Music Success',
    DELETE_MUSIC_FAIL = '[MUSIC] Delete Music Fail'
}

export class LoadMusicAction implements Action {
    readonly type = MusicActionTypes.LOAD_MUSIC
}

export class LoadMusicSucessAction implements Action {
  readonly type = MusicActionTypes.LOAD_MUSIC_SUCCESS

  constructor(public payload: Array<Music>) {}
}

export class LoadMusicFailAction implements Action {
  readonly type = MusicActionTypes.LOAD_MUSIC_FAIL

  constructor(public payload: Error) {}
}

export class AddMusicAction implements Action {
  readonly type = MusicActionTypes.ADD_MUSIC;

  constructor(public payload: Music) {}
}

export class AddMusicSuccessAction implements Action {
    readonly type = MusicActionTypes.ADD_MUSIC_SUCCESS;
  
    constructor(public payload: Music) {}
  }

export class AddMusicFailAction implements Action {
    readonly type = MusicActionTypes.ADD_MUSIC_FAIL;
  
    constructor(public payload: Error) {}
}

export class UpdateMusicAction implements Action {
  readonly type = MusicActionTypes.UPDATE_MUSIC;

  constructor(public payload: Music) {}
}

export class UpdateMusicSuccessAction implements Action {
  readonly type = MusicActionTypes.UPDATE_MUSIC_SUCCESS;

  constructor(public payload: Music) {}
}

export class UpdateMusicFailAction implements Action {
  readonly type = MusicActionTypes.UPDATE_MUSIC_FAIL;

  constructor(public payload: Error) {}
}

export class DeleteMusicAction implements Action {
  readonly type = MusicActionTypes.DELETE_MUSIC;

  constructor(public payload: number) {}
}

export class DeleteMusicSuccessAction implements Action {
  readonly type = MusicActionTypes.DELETE_MUSIC_SUCCESS;

  constructor(public payload: number) {}
}

export class DeleteMusicFailAction implements Action {
  readonly type = MusicActionTypes.DELETE_MUSIC_FAIL;

  constructor(public payload: number) {}
}

export type MusicAction = LoadMusicAction |
LoadMusicSucessAction |
LoadMusicFailAction |
AddMusicAction |
AddMusicSuccessAction |
AddMusicFailAction |
UpdateMusicAction |
UpdateMusicSuccessAction |
UpdateMusicFailAction |
DeleteMusicAction |
DeleteMusicSuccessAction |
DeleteMusicFailAction;