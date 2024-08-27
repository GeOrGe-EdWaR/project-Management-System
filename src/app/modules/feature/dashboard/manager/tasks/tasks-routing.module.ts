import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { TasksComponent } from './tasks.component';
import { AddEditTaskComponent } from './components/add-edit-task/add-edit-task.component';
import { ViewTaskComponent } from './components/view-task/view-task.component';
import { TasksListComponent } from './components/tasks-list/tasks-list.component';

const routes: Routes = [
  { path: '', component: TasksComponent },
  { path: 'add-edit-task', component: AddEditTaskComponent },
  { path: 'add-edit-task/:id', component: AddEditTaskComponent },
  { path: 'view-task', component: ViewTaskComponent },
  { path: 'view-task/:id', component: ViewTaskComponent },
  { path: 'list', component: TasksListComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes), CommonModule],
  exports: [RouterModule],
})
export class TasksRoutingModule {}
