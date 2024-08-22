import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects.component';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { ViewProjectComponent } from './components/view-project/view-project.component';
import { AddEditProjectComponent } from './components/add-edit-project/add-edit-project.component';
import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsListComponent } from './components/projects-list/projects-list.component';



@NgModule({
  declarations: [
    ProjectsComponent,
    ViewProjectComponent,
    AddEditProjectComponent,
    ProjectsListComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ProjectsRoutingModule
  ]
})
export class ProjectsModule { }
