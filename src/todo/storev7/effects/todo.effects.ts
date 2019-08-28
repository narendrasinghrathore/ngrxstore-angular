import { Injectable } from '@angular/core';

import { Effect, Actions, ofType } from '@ngrx/effects';

import * as fromTodoActions from '../actions/todov7.actions';
import { map, switchMap, catchError } from 'rxjs/operators';
import { ApiServiceService } from '../../services/api-service.service';
import { of } from 'rxjs';
@Injectable()
export class TodoEffectsService {
  constructor(private action: Actions, private service: ApiServiceService) {}

  @Effect()
  loadTodoList$ = this.action.pipe(
    ofType(fromTodoActions.LOAD_TODOS),
    switchMap(() => {
      return this.service.getList().pipe(
        map(data => new fromTodoActions.LoadTodosSuccess(data)),
        catchError(err => of(new fromTodoActions.LoadTodosFail(err)))
      );
    })
  );
}
