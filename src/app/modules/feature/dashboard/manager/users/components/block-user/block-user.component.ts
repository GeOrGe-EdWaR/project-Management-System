import { Component, Inject, OnInit } from '@angular/core';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-block-user',
  templateUrl: './block-user.component.html',
  styleUrls: ['./block-user.component.css'],
})
export class BlockUserComponent implements OnInit {
  user!: any;

  statusText!: string;

  constructor(
    private _users: UsersService,
    public dialogRef: MatDialogRef<BlockUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit() {
    this.statusText = this.data.isActivated ? 'Block' : 'Unblock';
    this.user = this.data;
  }

  onActivateUser(): void {
    this._users.onActivateUser(this.data.id).subscribe({
      next: (response) => {
        this.user = response;

        this.statusText = this.user.isActivated ? 'Block' : 'Unblock';
      },
    });
  }

  onClose() {
    this.dialogRef.close();
  }
}
