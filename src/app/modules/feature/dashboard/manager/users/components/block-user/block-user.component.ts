import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UsersService } from '../../services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-block-user',
  templateUrl: './block-user.component.html',
  styleUrls: ['./block-user.component.css']
})
export class BlockUserComponent implements OnInit {

  userId: number | undefined;
  userName: string | undefined;
  isActive: boolean | undefined;
  constructor(public dialogRef: MatDialogRef<BlockUserComponent>,
    private _Router: Router,
    private _UsersService: UsersService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {

  }
  onClose() {
    this.dialogRef.close();
  }
}
