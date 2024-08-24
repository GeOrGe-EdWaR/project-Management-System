import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';

import { ProjectsComponent } from './projects.component';
import { AddEditProjectComponent } from './components/add-edit-project/add-edit-project.component';
import { ViewProjectComponent } from './components/view-project/view-project.component';
import { ProjectsListComponent } from './components/projects-list/projects-list.component';

const routes: Routes = [
  {
    path: '',
    component: ProjectsComponent,
    children: [
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      { path: 'add-edit-project', component: AddEditProjectComponent },
      { path: 'add-edit-project/:id', component: AddEditProjectComponent },
      { path: 'view-project', component: ViewProjectComponent },
      { path: 'view-project/:id', component: ViewProjectComponent },
      { path: 'list', component: ProjectsListComponent },
    ],
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectsRoutingModule {}
