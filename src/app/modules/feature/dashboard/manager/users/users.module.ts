import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { ViewUserComponent } from './components/view-user/view-user.component';

import { UsersRoutingModule } from './users-routing.modules';
import { UsersListComponent } from './components/users-list/users-list.component';
import { MatDialogModule } from '@angular/material/dialog';
import { BlockUserComponent } from './components/block-user/block-user.component';


@NgModule({
  declarations: [
    UsersComponent,
    ViewUserComponent,
    UsersListComponent,
    BlockUserComponent,

  ],
  imports: [
    CommonModule,
    SharedModule,
    UsersRoutingModule,
    MatDialogModule

  ]
})
export class UsersModule { }
