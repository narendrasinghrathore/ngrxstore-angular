import { Injectable } from '@angular/core';

import { Effect, Actions, ofType } from '@ngrx/effects';

import * as fromTodoActions from '../actions/todov7.actions';
import { map, switchMap, catchError, tap, takeLast } from 'rxjs/operators';
import { ApiServiceService } from '../../services/api-service.service';
import { of } from 'rxjs';

import * as FromRoot from '../../../app/storev7';

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
  createTodoSuccess$ = this.action.pipe(
    ofType(fromTodoActions.CREATE_TODO_SUCCESS),
    map((actions: fromTodoActions.CreateTodoSuccess) => actions.payload),
    map(todo => {
      return new FromRoot.Go({
        path: ['/todo/crud', todo.id]
      });
    })
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
  updateTodoSuccess$ = this.action.pipe(
    ofType(fromTodoActions.UPDATE_TODO_SUCCESS),
    map((actions: fromTodoActions.UpdateTodoSuccess) => actions.payload),
    map(todo => {
      return new FromRoot.Go({
        path: ['/todo/list']
      });
    })
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
  @Effect()
  deleteTodoSuccess$ = this.action.pipe(
    ofType(fromTodoActions.DELETE_TODO_SUCCESS),
    map((actions: fromTodoActions.DeleteTodoSuccess) => actions),
    map(() => {
      return new FromRoot.Go({
        path: ['/todo/list']
      });
    })
  );
}
