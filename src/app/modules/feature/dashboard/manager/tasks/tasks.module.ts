import { SharedModule } from 'src/app/modules/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksComponent } from './tasks.component';
import { ViewTaskComponent } from './components/view-task/view-task.component';
import { AddEditTaskComponent } from './components/add-edit-task/add-edit-task.component';

import { TasksRoutingModule } from './tasks-routing.module';


@NgModule({
  declarations: [
    TasksComponent,
    ViewTaskComponent,
    AddEditTaskComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    TasksRoutingModule
  ]
})
export class TasksModule { }
