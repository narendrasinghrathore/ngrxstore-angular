import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TodoComponent } from './todo.component';

import { StoreModule } from '@ngrx/store';
import { ApiServiceService } from './services/api-service.service';

import { storeName, reducers, effects } from './storev7';
import { EffectsModule } from '@ngrx/effects';

import * as fromGuards from './guards';
@NgModule({
  declarations: [TodoComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature(storeName, reducers),
    EffectsModule.forFeature(effects),
    // StoreModule.forFeature(fromReducer.name, fromReducer.reducer),
    RouterModule.forChild([
      {
        path: '',
        component: TodoComponent,
        children: [
          {
            path: 'home',
            loadChildren: () =>
              import('./container/todo-home/todo-home.module').then(
                todoHome => todoHome.TodoHomeModule
              )
          },
          {
            path: 'list',
            loadChildren: () =>
              import('./container/todo-list/todo-list.module').then(
                list => list.TodoListModule
              )
          },
          {
            path: 'crud/:id',
            loadChildren: () =>
              import('./container/todo-list-crud/todo-list-crud.module').then(
                crud => crud.TodoListCrudModule
              ),
            canActivate: [fromGuards.TodoExistGuard]
          },
          {
            path: 'crud',
            loadChildren: () =>
              import('./container/todo-list-crud/todo-list-crud.module').then(
                crud => crud.TodoListCrudModule
              )
          }
        ]
      }
    ])
  ],
  providers: [ApiServiceService, ...fromGuards.guards]
})
export class TodoModule {}
