import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects.component';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { ViewProjectComponent } from './components/view-project/view-project.component';
import { AddEditProjectComponent } from './components/add-edit-project/add-edit-project.component';
import { ProjectsRoutingModule } from './projects-routing.module';



@NgModule({
  declarations: [
    ProjectsComponent,
    ViewProjectComponent,
    AddEditProjectComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ProjectsRoutingModule
  ]
})
export class ProjectsModule { }
