import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree
} from '@angular/router';
import { Observable } from 'rxjs';

import * as fromStore from '../../todo/storev7';
import { Store } from '@ngrx/store';
import { tap, take, filter, map, switchMap } from 'rxjs/operators';
import { ITodoList } from 'src/models/list.interface';

@Injectable({
  providedIn: 'root'
})
export class TodoExistGuard implements CanActivate {
  constructor(private store: Store<fromStore.TodoAppState>) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.checkListLoaded().pipe(
      switchMap(() => {
        const id = +next.params.id;
        return this.hasTodo(id);
      })
    );
  }

  hasTodo(id: number): Observable<boolean> {
    return this.store
      .select(fromStore.getAllTodoEntites)
      .pipe(map((entities: { [key: number]: ITodoList }) => !!entities[id]));
  }

  checkListLoaded(): Observable<boolean> {
    return this.store.select(fromStore.getAllloaded).pipe(
      tap(loaded => {
        if (!loaded) {
          this.store.dispatch(new fromStore.LoadTodos());
        }
      }),
      filter((loaded: boolean) => loaded),
      take(1)
    );
  }
}
