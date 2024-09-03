import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { EmployeeComponent } from './employee.component';

const routes: Routes = [
  {
    path: '',
    component: EmployeeComponent,
    children: [
      {
        path: 'projects',
        loadChildren: () =>
          import('./modules/projects/projects.module').then(
            (m) => m.ProjectsModule
          ),
      },
      {
        path: 'tasks',
        loadChildren: () =>
          import('./modules/emp-tasks/emp-tasks.module').then(
            (m) => m.EmpTasksModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeeRoutingModule { }
