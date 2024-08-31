import { BlockUserComponent } from '../block-user/block-user.component';
import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { UsersService } from '../../services/users.service';
import { ToastrService } from 'ngx-toastr';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ListHeader } from 'src/app/modules/shared/models/list-header.model';
import { Subscription } from 'rxjs';
import { User } from '../../models/User-model';


@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
// export class ListComponent implements OnInit {
//   deleteDialogRef: any;
//   dialog: any;
//   _toastr: any;

//   constructor(
//     private _UsersService: UsersService,
//     private _Toastr: ToastrService,
//     private _MatDialog: MatDialog,
//   ) { }

//   ngOnInit(): void {
//     this.getUsersData();
//     this.getUsersCount();
//   }

//   listData: any = {};
//   pageSize: number = 10;
//   pageNumber: number = 1;
//   pageSizeOptions = [5, 10, 25];
//   hidePageSize = false;
//   showPageSizeOptions = true;
//   showFirstLastButtons = true;
//   disabled = false;
//   length = 50;
//   pageIndex = 0;
//   tableData: any = {};

//   getUsersData() {
//     let dataParams: any = {
//       pageSize: this.pageSize,
//       pageNumber: this.pageNumber,
//     }

//     this._UsersService.getUserData(dataParams).subscribe({
//       next: (resp) => {
//         console.log(resp);
//         this.listData = resp;
//         this.tableData = resp;
//         this.listData = this.tableData.data;
//         this.length = resp.totalNumberOfRecords;
//       },
//       error: (err) => {
//         console.log("users error", err);
//       }
//     });
//   }

//   getUsersCount() {
//     this._UsersService.getUserCount().subscribe({
//       next: (resp) => {
//         console.log(resp);
//       },
//       error: (err) => {
//         console.log("users error", err);
//       }
//     });
//   }

//   handlePageEvent(e: PageEvent) {
//     this.length = e.length;
//     this.pageSize = e.pageSize;
//     this.pageIndex = e.pageIndex + 1;
//     this.getUsersData();
//   }

//   openBlockDialog(item: any): void {
//     const dialogRef = this._MatDialog.open(BlockUserComponent, {
//       data: item,
//       width: '35%'
//     });

//     dialogRef.afterClosed().subscribe((result: any) => {
//       console.log('The dialog was closed', result);
//       if (result) {
//         this.activateUser(result);
//       }
//     });
//   }

//   activateUser(id: number) {
//     this._UsersService.onActivateUser(id).subscribe({
//       next: (res) => {
//         this._Toastr.success(res.message, 'User Active now');
//       },
//       error: (err) => {
//         this._Toastr.error(err.error.message, 'error');
//       },
//       complete: () => {
//         this.getUsersData();
//       }
//     });
//   }




// }

export class UsersListComponent {
  usersList!: User[]; // remember the interface
  searchValue: string = '';
  searchKey: string = '';

  filters = ['', ''];

  
  length: number = 0;
  pageSize = 10;
  pageNumber = 0;

  deleteDialogRef: any;

  pageEvent!: PageEvent;

  headers: ListHeader[] = [];

  usersSubscription!: Subscription;
  constructor(
    private _users: UsersService,
    public dialog: MatDialog,
    private _toastr: ToastrService,
    private _router: Router
  ) {
    this.headers = this._users.listHeaders;
  }

  ngOnInit() {
  console.log('im here');
  
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
        error: () => { },
      });
  }
  onBlockAction(e: any): void { }
  
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
          }
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
