import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmpTasksRoutingModule } from './emp-tasks-routing.module';
import { EmpTasksComponent } from './emp-tasks.component';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { ViewTaskComponent } from './components/view-task/view-task.component';


@NgModule({
  declarations: [
    EmpTasksComponent,
    ViewTaskComponent
  ],
  imports: [
    CommonModule,
    EmpTasksRoutingModule,
    SharedModule
  ]
})
export class EmpTasksModule { }
