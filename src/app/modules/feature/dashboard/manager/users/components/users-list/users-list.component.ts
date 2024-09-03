import { Component } from '@angular/core';

import { PageEvent } from '@angular/material/paginator';

import { Subscription } from 'rxjs';

import { UsersService } from '../../services/users.service';
import { ToastrService } from 'ngx-toastr';
import { MatDialog } from '@angular/material/dialog';

import { User } from '../../models/User-model';
import { ListHeader } from 'src/app/modules/shared/models/list-header.model';

import { ViewUserComponent } from '../view-user/view-user.component';
import { BlockUserComponent } from '../block-user/block-user.component';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
})
export class UsersListComponent {
  usersList!: User[];

  searchValue: string = '';
  searchKey: string = '';

  filters = ['email', 'status'];
  statusList = [
    {
      label: 'Active',
      value: 'Active',
    },
    {
      label: 'Inactive',
      value: 'Inactive',
    },
  ];

  length: number = 0;
  pageSize = 10;
  pageNumber = 0;

  dialog: any;

  pageEvent!: PageEvent;

  headers: ListHeader[] = [];

  usersSubscription!: Subscription;

  constructor(
    private _users: UsersService,
    private _matDialog: MatDialog,
    private _toastr: ToastrService
  ) {
    this.headers = this._users.listHeaders;
  }

  ngOnInit() {
    this.getUsersList();
  }

  getUsersList(): void {
    this.usersSubscription = this._users
      .getUsersList(
        this.pageNumber + 1,
        this.pageSize,
        this.searchKey,
        this.searchValue
      )
      .subscribe({
        next: ({ data, totalNumberOfRecords }) => {
          this.length = totalNumberOfRecords;
          this.usersList = data;
        },
      });
  }

  onViewAction(e: any): void {
    this._matDialog.open(ViewUserComponent, {
      data: e,
      width: '45%',
    });
  }

  onBlockAction(e: any): void {
    const dialogRef = this._matDialog.open(BlockUserComponent, {
      data: e,
      width: '45%',
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      console.log('The dialog was closed', result);
      if (result) {
        this.activateUser(result);
      }
    });
  }

  activateUser(id: number) {
    this._users.onActivateUser(id).subscribe({
      next: (res) => {
        this._toastr.success(res.message, 'User Active now');
      },
      error: (err) => {
        this._toastr.error(err.error.message, 'error');
      },
      complete: () => {
        this.getUsersList();
      },
    });
  }

  onSearchAction(e: any): void {
    if (e) {
      this.searchKey = e.searchKey;
      this.searchValue = e.searchValue;
    }

    this.getUsersList();
  }

  onResetAction(): void {
    this.pageNumber = 0;

    this.searchValue = '';
    this.searchKey = '';

    this.getUsersList();
  }

  onPageEvent(e: PageEvent): void {
    this.pageEvent = e;
    this.pageSize = e.pageSize;
    this.pageNumber = e.pageIndex;

    this.getUsersList();
  }

  ngOnDestroy() {
    this.usersSubscription.unsubscribe();
  }
}
