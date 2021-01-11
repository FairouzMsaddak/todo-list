import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoPageComponent } from './pages/todo-page/todo-page.component';

const routes: Routes = [
  {
    path: 'op',
    pathMatch: 'prefix',
    redirectTo: 'todo'
  },
  {
    path: 'todo',
    component: TodoPageComponent
  },
  // {
  //   path: '**',
  //   pathMatch: 'prefix',
  //   redirectTo: 'todo'
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
