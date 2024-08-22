import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users.component';
import { ViewUserComponent } from './components/view-user/view-user.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path: '', component: UsersComponent },
  { path: 'view-user', component: ViewUserComponent },

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
