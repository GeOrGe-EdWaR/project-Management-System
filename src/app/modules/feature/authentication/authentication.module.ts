import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { AuthenticationRoutingModule } from './authentication-routing.module';

import { AuthenticationComponent } from './authentication.component';
import { VerifyAccountComponent } from './components/verify-account/verify-account.component';

import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';

// @NgModule({
//   declarations: [AuthenticationComponent, VerifyAccountComponent, ForgetPasswordComponent, ResetPasswordComponent],

// import { RegisterComponent } from './components/register/register.component';

@NgModule({
  declarations: [AuthenticationComponent, VerifyAccountComponent, ForgetPasswordComponent,ResetPasswordComponent , RegisterComponent, LoginComponent ],
  imports: [CommonModule, AuthenticationRoutingModule, SharedModule],
})
export class AuthenticationModule {}
