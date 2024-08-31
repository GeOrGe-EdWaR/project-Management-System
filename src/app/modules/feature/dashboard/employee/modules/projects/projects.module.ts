import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { ProjectsRoutingModule } from './projects-routing.module';

import { ProjectsComponent } from './projects.component';
import { ProjectsListComponent } from './components/projects-list/projects-list.component';

@NgModule({
  declarations: [ProjectsComponent, ProjectsListComponent],
  imports: [CommonModule, SharedModule, ProjectsRoutingModule],
})
export class ProjectsModule {}
