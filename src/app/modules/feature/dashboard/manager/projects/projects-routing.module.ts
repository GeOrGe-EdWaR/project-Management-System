import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from './projects.component';
import { AddEditProjectComponent } from './components/add-edit-project/add-edit-project.component';
import { ViewProjectComponent } from './components/view-project/view-project.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path: '', component: ProjectsComponent },
  { path: 'add-edit-project', component: AddEditProjectComponent },
  { path: 'view-project', component: ViewProjectComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
