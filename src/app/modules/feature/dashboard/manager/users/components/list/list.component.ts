import { BlockUserComponent } from './../block-user/block-user.component';
import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { UsersService } from '../../services/users.service';
import { ToastrService } from 'ngx-toastr';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(
    private _UsersService: UsersService,
    private _Toastr: ToastrService,
    private _MatDialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.getUsersData();
    this.getUsersCount();
  }

  listData: any = {};
  pageSize: number = 10;
  pageNumber: number = 1;
  pageSizeOptions = [5, 10, 25];
  hidePageSize = false;
  showPageSizeOptions = true;
  showFirstLastButtons = true;
  disabled = false;
  length = 50;
  pageIndex = 0;
  tableData: any = {};

  getUsersData() {
    let dataParams: any = {
      pageSize: this.pageSize,
      pageNumber: this.pageNumber,
    }

    this._UsersService.getUserData(dataParams).subscribe({
      next: (resp) => {
        console.log(resp);
        this.listData = resp;
        this.tableData = resp;
        this.listData = this.tableData.data;
        this.length = resp.totalNumberOfRecords;
      },
      error: (err) => {
        console.log("users error", err);
      }
    });
  }

  getUsersCount() {
    this._UsersService.getUserCount().subscribe({
      next: (resp) => {
        console.log(resp);
      },
      error: (err) => {
        console.log("users error", err);
      }
    });
  }

  handlePageEvent(e: PageEvent) {
    this.length = e.length;
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex + 1;
    this.getUsersData();
  }

  openBlockDialog(item: any): void {
    const dialogRef = this._MatDialog.open(BlockUserComponent, {
      data: item,
      width: '35%'
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      console.log('The dialog was closed', result);
      if (result) {
        this.activateUser(result);
      }
    });
  }

  activateUser(id: number) {
    this._UsersService.onActivateUser(id).subscribe({
      next: (res) => {
        this._Toastr.success(res.message, 'User Active now');
      },
      error: (err) => {
        this._Toastr.error(err.error.message, 'error');
      },
      complete: () => {
        this.getUsersData();
      }
    });
  }
}
