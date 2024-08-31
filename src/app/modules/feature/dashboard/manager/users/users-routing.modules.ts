import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users.component';
import { ViewUserComponent } from './components/view-user/view-user.component';
import { CommonModule } from '@angular/common';
import { UsersListComponent } from './components/users-list/users-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: '', component: UsersComponent },
  { path: 'list', component: UsersListComponent },
  { path: 'view-user/:id', component: ViewUserComponent },
  
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
