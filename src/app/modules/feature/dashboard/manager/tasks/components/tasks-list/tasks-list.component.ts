import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { PageEvent } from '@angular/material/paginator';

import { MatDialog } from '@angular/material/dialog';

import { ToastrService } from 'ngx-toastr';
import { TaskService } from '../../services/task.service';

import { ListHeader } from 'src/app/modules/shared/models/list-header.model';
import { Task } from '../../models/task-model';
import { FormControl, FormGroup } from '@angular/forms';
import { DeleteComponent } from 'src/app/modules/shared/delete/delete.component';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss'],
})
export class TasksListComponent {
  tasksList!: Task[];

  searchValue: string = '';
  searchKey: string = '';

  filters = ['title', 'status'];

  length: number = 0;
  pageSize = 10;
  pageNumber = 0;

  deleteDialogRef: any;

  pageEvent!: PageEvent;

  headers: ListHeader[] = [];

  tasksSubscription!: Subscription;

  constructor(
    private _tasks: TaskService,
    public dialog: MatDialog,
    private _toastr: ToastrService,
    private _router: Router
  ) {
    this.headers = this._tasks.listHeaders;
  }

  ngOnInit() {
    this.getTasksList();
  }

  getTasksList(): void {
    this.tasksSubscription = this._tasks
      .getTasksList(
        this.pageNumber + 1,
        this.pageSize,
        this.searchKey,
        this.searchValue
      )
      .subscribe({
        next: ({ data, totalNumberOfRecords }) => {
          this.length = totalNumberOfRecords;
          this.tasksList = data;
        },
        error: () => {},
      });
  }

  onPageEvent(e: PageEvent): void {
    this.pageEvent = e;
    this.pageSize = e.pageSize;
    this.pageNumber = e.pageIndex;

    this.getTasksList();
  }

  navigateToAddtask(): void {
    this._router.navigateByUrl('/dashboard/manager/tasks/add-edit-task');
  }

  onViewAction(e: any): void {
    this._router.navigateByUrl('/dashboard/manager/tasks/view-task');
  }

  onEditAction(e: any): void {
    this._router.navigateByUrl('/dashboard/manager/tasks/add-edit-task');
  }

  onDeleteAction(id: number): void {
    this.deleteDialogRef = this.dialog.open(DeleteComponent, {
      data: { id, name: 'Project' },
    });

    this.deleteDialogRef.afterClosed().subscribe((result: { id: number }) => {
      this.deleteProject(result.id);
    });
  }
  projectsSubscription!: Subscription;
  deleteProjectSubscription!: Subscription;
  deleteProject(id: number): void {
    this.deleteProjectSubscription = this._tasks.deleteTask(id).subscribe({
      next: () => {
        this._toastr.success('Project deleted successfully');

        this.getTasksList();
      },
      error: () => {
        this._toastr.error('Something went wrong', 'Error');
      },
    });
  }

  onSearchAction(e: any): void {
    if (e) {
      this.searchKey = e.searchKey;
      this.searchValue = e.searchValue;
    }

    this.getTasksList();
  }

  onResetAction(): void {
    this.pageNumber = 0;

    this.searchValue = '';
    this.searchKey = '';

    this.getTasksList();
  }

  ngOnDestroy() {
    this.tasksSubscription.unsubscribe();
  }
}
