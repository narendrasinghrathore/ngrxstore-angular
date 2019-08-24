import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TodoComponent } from './todo.component';

import { StoreModule, Store } from '@ngrx/store';
import * as fromReducer from './state/todo.reducers';
import { ApiServiceService } from './services/api-service.service';

@NgModule({
  declarations: [TodoComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromReducer.name, fromReducer.reducer),
    RouterModule.forChild([
      {
        path: '', component: TodoComponent,
        children: [
          {
            path: 'home',
            loadChildren: () =>
              import('./container/todo-home/todo-home.module').then(todoHome => todoHome.TodoHomeModule)
          },
          {
            path: 'list',
            loadChildren: () =>
              import('./container/todo-list/todo-list.module').then(list => list.TodoListModule),

          },
          {
            path: 'crud/:id',
            loadChildren: () =>
              import('./container/todo-list-crud/todo-list-crud.module').then(crud => crud.TodoListCrudModule),
          },
          {
            path: 'crud',
            loadChildren: () =>
              import('./container/todo-list-crud/todo-list-crud.module').then(crud => crud.TodoListCrudModule),

          }
        ]
      }
    ])
  ],
  providers: [ApiServiceService]
})
export class TodoModule { }
