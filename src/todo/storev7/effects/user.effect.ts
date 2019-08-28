import { Injectable } from '@angular/core';

import { Effect, Actions, ofType } from '@ngrx/effects';
import { ApiServiceService } from '../../../todo/services/api-service.service';

import * as FromUserActions from '../actions/user.action';
import { switchMap, map, catchError, tap } from 'rxjs/operators';
import { Action } from '@ngrx/store';
import { IUser } from '../../../models/user.interface';
import { of } from 'rxjs';

@Injectable()
export class UserEffectService {
  constructor(private action: Actions, private service: ApiServiceService) {}

  @Effect()
  loadUsers$ = this.action.pipe(
    ofType(FromUserActions.LOAD_USERS),
    switchMap((action: any) => {
      return this.service.getAllUsers().pipe(
        map((data: IUser[]) => new FromUserActions.LoadUsersSuccess(data)),
        catchError(err => of(new FromUserActions.LoadUsersFail(err)))
      );
    })
  );
}
