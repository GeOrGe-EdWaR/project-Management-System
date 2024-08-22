import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TasksComponent } from './tasks.component';
import { AddEditTaskComponent } from './components/add-edit-task/add-edit-task.component';
import { ViewTaskComponent } from './components/view-task/view-task.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path: '', component: TasksComponent },
  { path: 'add-edit-task', component: AddEditTaskComponent },
  { path: 'view-task', component: ViewTaskComponent },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
  ],
  exports: [RouterModule]
})
export class TasksRoutingModule { }
