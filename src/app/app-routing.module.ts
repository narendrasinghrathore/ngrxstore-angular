import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '', component: AppComponent,
    children: [
      {
        path: 'todo',
        loadChildren: () => import('../todo/todo.module').then(todo => todo.TodoModule),
      },
    ]
  },
  {
    path: '**', loadChildren: () => import('../pagenotfound/pagenotfound.module').then(p => p.PagenotfoundModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
