import { Component, Inject } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogRef,
} from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UsersService } from '../../services/users.service';
import { BlockUserComponent } from '../block-user/block-user.component';
import { User } from '../../models/User-model';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.scss'],
})
export class ViewUserComponent {
  user: any;
  userId: number | any;

  pathHttps: string = 'https://upskilling-egypt.com:3003/';
  Messgage: string = '';

  constructor(
    private toastr: ToastrService,
    private _UsersService: UsersService,
    private dialog: MatDialog,
    public dialogRef: MatDialogRef<ViewUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    this.userId = this.data.id;

    this.getUserById();
  }

  getUserById() {
    this._UsersService.getUserById(this.userId).subscribe({
      next: (res) => {
        this.user = res;
      },
    });
  }
  openBlockDialog(item: any): void {
    const dialogRef = this.dialog.open(BlockUserComponent, {
      data: item,
      width: '35%',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.activateUser(result);
      }
    });
  }
  activateUser(id: number) {
    this._UsersService.onActivateUser(id).subscribe({
      next: (res) => {
        this.Messgage = res.message;
      },
      error: (err) => {
        this.toastr.error(err.error.message, 'error');
      },
      complete: () => {
        this.getUserById();
        this.toastr.success(this.Messgage, 'User Active now');
      },
    });
  }
}
