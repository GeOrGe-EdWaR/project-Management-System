import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpTasksComponent } from './emp-tasks.component';

const routes: Routes = [
  { path: 'list', component: EmpTasksComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmpTasksRoutingModule { }
