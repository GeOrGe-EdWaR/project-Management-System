import { SharedModule } from './../../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagerRoutingModule } from './manager.routing';
import { ManagerComponent } from './manager.component';
import { ManagerChartComponent } from './components/manager-chart/manager-chart.component';
import { TasksModule } from './tasks/tasks.module';
import { UsersModule } from './users/users.module';
import { ProjectsModule } from './projects/projects.module';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
    ManagerComponent,
  ],
  imports: [
    CommonModule,
    ManagerRoutingModule,
    SharedModule,
    TasksModule,
    UsersModule,
    ProjectsModule,
    ManagerChartComponent,
    MatDialogModule
  ]
})
export class ManagerModule { }
