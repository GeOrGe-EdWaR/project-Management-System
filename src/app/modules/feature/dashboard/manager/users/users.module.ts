import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { ViewUserComponent } from './components/view-user/view-user.component';

import { UsersRoutingModule } from './users-routing.modules';


@NgModule({
  declarations: [
    UsersComponent,
    ViewUserComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    UsersRoutingModule

  ]
})
export class UsersModule { }
