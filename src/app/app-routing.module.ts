import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {

    path: 'todo',
    loadChildren: () => import('../todo/todo.module').then(todo => todo.TodoModule),

  },
  {
    path: 'home',
    loadChildren: () => import('../home/home.module').then(home => home.HomeModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
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
