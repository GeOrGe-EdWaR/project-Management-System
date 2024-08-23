import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManagerComponent } from './manager.component';
import { ManagerChartComponent } from './components/manager-chart/manager-chart.component';
import { UsersModule } from './users/users.module';

const routes: Routes = [
  {
    path: '',
    component: ManagerComponent,
    children: [
      {
        path: 'users',
        loadChildren: () =>
          import('./users/users.module').then((m) => m.UsersModule),
      },
      {
        path: 'projects',
        loadChildren: () =>
          import('./projects/projects.module').then((m) => m.ProjectsModule),
      },
      {
        path: 'tasks',
        loadChildren: () =>
          import('./tasks/tasks.module').then((m) => m.TasksModule),
      },
      { path: 'manager-chart', component: ManagerChartComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManagerRoutingModule {}
