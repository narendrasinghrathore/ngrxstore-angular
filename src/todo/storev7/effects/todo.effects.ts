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
  @Effect()
  createTodo$ = this.action.pipe(
    ofType(fromTodoActions.CREATE_TODO),
    map((actions: fromTodoActions.CreateTodo) => actions.payload),
    switchMap(todo =>
      this.service.createItem(todo).pipe(
        map(data => new fromTodoActions.CreateTodoSuccess(data)),
        catchError(err => of(new fromTodoActions.CreateTodoFail(err)))
      )
    )
  );

  @Effect()
  updateTodo$ = this.action.pipe(
    ofType(fromTodoActions.UPDATE_TODO),
    map((actions: fromTodoActions.UpdateTodo) => actions.payload),
    switchMap(todo =>
      this.service.updateItem(todo).pipe(
        map(data => new fromTodoActions.UpdateTodoSuccess(data)),
        catchError(err => of(new fromTodoActions.UpdateTodoFail(err)))
      )
    )
  );

  @Effect()
  deleteTodo$ = this.action.pipe(
    ofType(fromTodoActions.DELETE_TODO),
    map((actions: fromTodoActions.DeleteTodo) => actions.payload),
    switchMap(todo =>
      this.service.removeItem(todo.id).pipe(
        map(() => new fromTodoActions.DeleteTodoSuccess(todo)),
        catchError(err => of(new fromTodoActions.DeleteTodoFail(err)))
      )
    )
  );
}
