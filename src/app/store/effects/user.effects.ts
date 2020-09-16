import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { UserService } from 'src/app/services/user.service';
import { AddUserAction, AddUserFailAction, AddUserSuccessAction, LoadUserAction,
   LoadUserFailAction, LoadUserSuccessAction, UserActionTypes } from '../actions/user.actions';

@Injectable()
export class UserEffects {

  @Effect() loadUser$ = this.actions$
    .pipe(
      ofType<LoadUserAction>(UserActionTypes.LOAD_USER),
      mergeMap(
        () => this.userService.getAllUsers()
          .pipe(
            map(data => {
              return new LoadUserSuccessAction(data);
            }),
            catchError(error => of(new LoadUserFailAction(error)))
          )
      ),
    );

  @Effect() addUser$ = this.actions$
    .pipe(
      ofType<AddUserAction>(UserActionTypes.ADD_USER),
      mergeMap(
        (data) => this.userService.addUser(data.payload)
          .pipe(
            map(() => {
              return new AddUserSuccessAction(data.payload);
            }),
            catchError(error => of(new AddUserFailAction(error)))
          )
      ),
    );

  constructor(
    private actions$: Actions,
    private userService: UserService
  ) {

  }
}
