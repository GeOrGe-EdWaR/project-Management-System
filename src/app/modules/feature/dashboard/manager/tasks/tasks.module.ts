import { SharedModule } from 'src/app/modules/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksComponent } from './tasks.component';
import { ViewTaskComponent } from './components/view-task/view-task.component';
import { AddEditTaskComponent } from './components/add-edit-task/add-edit-task.component';

import { TasksRoutingModule } from './tasks-routing.module';
import { TasksListComponent } from './components/tasks-list/tasks-list.component';


@NgModule({
  declarations: [
    TasksComponent,
    ViewTaskComponent,
    AddEditTaskComponent,
    TasksListComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    TasksRoutingModule
  ]
})
export class TasksModule { }
