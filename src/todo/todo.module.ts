import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TodoComponent } from './todo.component';

@NgModule({
  declarations: [TodoComponent],
  imports: [
    CommonModule,
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
              import('./component/todo-list/todo-list.module').then(list => list.TodoListModule),

          },
          {
            path: 'crud',
            loadChildren: () =>
              import('./component/todo-list-crud/todo-list-crud.module').then(crud => crud.TodoListCrudModule),

          }
        ]
      }
    ])
  ]
})
export class TodoModule { }
