import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrudComponent } from './crud.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [CrudComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '', component: CrudComponent
      }
    ])
  ]
})
export class TodoListCrudModule { }
