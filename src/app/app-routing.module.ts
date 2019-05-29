import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QPLListComponent } from './datagrid/datagrid.component';

const routes: Routes = [
  { path: 'list', component: QPLListComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
