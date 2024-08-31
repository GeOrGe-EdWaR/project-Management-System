import { Component, OnDestroy, OnInit } from '@angular/core';

import { DeleteComponent } from 'src/app/modules/shared/delete/delete.component';

import { Subscription } from 'rxjs';

import { PageEvent } from '@angular/material/paginator';

import { MatDialog } from '@angular/material/dialog';

import { ProjectsService } from '../../services/projects.service';
import { ToastrService } from 'ngx-toastr';

import { ListHeader } from 'src/app/modules/shared/models/list-header.model';
import { Project } from '../../models/project-model';

import { Router } from '@angular/router';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.scss'],
})
export class ProjectsListComponent implements OnInit, OnDestroy {
  projectsList!: Project[];

  searchKey: string = 'title';
  searchValue: string = '';

  filters = ['title', 'description'];

  length: number = 0;
  pageSize = 10;
  pageNumber = 0;

  pageEvent!: PageEvent;

  headers: ListHeader[] = [];

  projectsSubscription!: Subscription;

  constructor(
    private _projects: ProjectsService,
    public dialog: MatDialog,
    private _toastr: ToastrService,
    private _router: Router
  ) {
    this.headers = this._projects.listHeaders;
  }

  ngOnInit() {
    this.getProjectsList();
  }

  getProjectsList(): void {
    this.projectsSubscription = this._projects
      .getProjectsList(
        this.pageNumber + 1,
        this.pageSize,
        this.searchKey,
        this.searchValue
      )
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

  onSearchAction(e: any): void {
    if (e) {
      this.searchKey = e.searchKey;
      this.searchValue = e.searchValue;
    }

    this.getProjectsList();
  }

  onResetAction(): void {
    this.pageNumber = 0;

    this.searchValue = '';
    this.searchKey = '';

    this.getProjectsList();
  }

  ngOnDestroy() {
    this.projectsSubscription.unsubscribe();
  }
}
