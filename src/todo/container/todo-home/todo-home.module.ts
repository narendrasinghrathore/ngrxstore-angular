import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoHomeComponent } from './todo-home.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [TodoHomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(
      [
        {
          path: '', component: TodoHomeComponent
        }
      ]
    )
  ]
})
export class TodoHomeModule { }
