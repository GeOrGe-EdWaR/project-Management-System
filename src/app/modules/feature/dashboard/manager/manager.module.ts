import { SharedModule } from './../../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagerRoutingModule } from './manager.routing';
import { TasksModule } from './tasks/tasks.module';
import { ProjectsModule } from './projects/projects.module';
import { MatDialogModule } from '@angular/material/dialog';
import { UsersModule } from './users/users.module';

import { ManagerComponent } from './manager.component';

@NgModule({
  declarations: [ManagerComponent],
  imports: [
    CommonModule,
    ManagerRoutingModule,
    SharedModule,
    TasksModule,
    ProjectsModule,
    UsersModule,
    MatDialogModule,
  ],
})
export class ManagerModule {}
