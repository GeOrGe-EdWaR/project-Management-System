import { Component, OnDestroy, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';

import { PageEvent } from '@angular/material/paginator';

import { MatDialog } from '@angular/material/dialog';

import { ProjectsService } from '../../services/projects.service';
import { ToastrService } from 'ngx-toastr';

import { ListHeader } from 'src/app/modules/shared/models/list-header.model';
import { Project } from '../../models/project-model';

import { DeleteComponent } from 'src/app/modules/shared/delete/delete.component';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.scss'],
})
export class ProjectsListComponent implements OnInit, OnDestroy {
  projectsList!: Project[];

  length: number = 0;
  pageSize = 10;
  pageNumber = 0;

  deleteDialogRef: any;

  pageEvent!: PageEvent;

  headers: ListHeader[] = [];

  projectsSubscription!: Subscription;
  deleteProjectSubscription!: Subscription;

  constructor(
    private _projects: ProjectsService,
    public dialog: MatDialog,
    private _toastr: ToastrService
  ) {
    this.headers = this._projects.listHeaders;
  }

  ngOnInit() {
    this.getProjectsList();
  }

  getProjectsList(): void {
    this.projectsSubscription = this._projects
      .getProjectsList(this.pageNumber + 1, this.pageSize, '')
      .subscribe({
        next: ({ data, totalNumberOfRecords }) => {
          this.length = totalNumberOfRecords;
          this.projectsList = data;
        },
        error: () => {},
      });
  }

  onPageEvent(e: PageEvent): void {
    this.pageEvent = e;
    this.pageSize = e.pageSize;
    this.pageNumber = e.pageIndex;

    this.getProjectsList();
  }

  onViewAction(e: any): void {}

  onEditAction(e: any): void {}

  onDeleteAction(id: number): void {
    this.deleteDialogRef = this.dialog.open(DeleteComponent, {
      data: { id, name: 'Project' },
    });

    this.deleteDialogRef.afterClosed().subscribe((result: { id: number }) => {
      this.deleteProject(result.id);
    });
  }

  deleteProject(id: number): void {
    this.deleteProjectSubscription = this._projects
      .deleteProject(id)
      .subscribe({
        next: () => {
          this._toastr.success('Project deleted successfully');

          this.getProjectsList();
        },
        error: () => {
          this._toastr.success('Something went wrong');
        },
      });
  }

  ngOnDestroy() {
    this.projectsSubscription.unsubscribe();

    if (this.deleteProjectSubscription) {
      this.deleteProjectSubscription.unsubscribe();
    }
  }
}
