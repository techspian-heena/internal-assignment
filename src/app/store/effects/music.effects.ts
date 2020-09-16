import { Inject, Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { MusicService } from '../../services/music.service';
import { LoadMusicAction, MusicActionTypes, LoadMusicSucessAction, LoadMusicFailAction, AddMusicAction,
   AddMusicSuccessAction, AddMusicFailAction, UpdateMusicAction, UpdateMusicSuccessAction,
   UpdateMusicFailAction, DeleteMusicAction, DeleteMusicSuccessAction, DeleteMusicFailAction } from '../actions/music.actions';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class MusicEffects {

  @Effect() loadMusic$ = this.actions$
    .pipe(
      ofType<LoadMusicAction>(MusicActionTypes.LOAD_MUSIC),
      mergeMap(
        () => this.musicService.getAllMusic()
          .pipe(
            map(data => {
              return new LoadMusicSucessAction(data);
            }),
            catchError(error => of(new LoadMusicFailAction(error)))
          )
      ),
    );


  @Effect() addMusic$ = this.actions$
    .pipe(
      ofType<AddMusicAction>(MusicActionTypes.ADD_MUSIC),
      mergeMap(
        (data) => this.musicService.addMusic(data.payload)
          .pipe(
            map(() => {
              return new AddMusicSuccessAction(data.payload);
            }),
            catchError(error => of(new AddMusicFailAction(error)))
          )
      ),
    );

  @Effect() updateMusic$ = this.actions$
    .pipe(
      ofType<UpdateMusicAction>(MusicActionTypes.UPDATE_MUSIC),
      mergeMap(
        (data) => this.musicService.updateMusic(data.payload)
          .pipe(
            map(() => {
              return new UpdateMusicSuccessAction(data.payload);
            }),
            catchError(error => of(new UpdateMusicFailAction(error)))
          )
      ),
    );

  @Effect() deleteMusic$ = this.actions$
    .pipe(
      ofType<DeleteMusicAction>(MusicActionTypes.DELETE_MUSIC),
      mergeMap(
        (data) => this.musicService.deleteMusic(data.payload)
          .pipe(
            map(() => {
              return new DeleteMusicSuccessAction(data.payload);
            }),
            catchError(error => of(new DeleteMusicFailAction(error)))
          )
      ),
    );


  constructor(
    private actions$: Actions,
    private musicService: MusicService
  ) { }
}
