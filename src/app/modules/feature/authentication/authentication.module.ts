import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { AuthenticationRoutingModule } from './authentication-routing.module';

import { AuthenticationComponent } from './authentication.component';
import { VerifyAccountComponent } from './components/verify-account/verify-account.component';
import { RegisterComponent } from './components/register/register.component';

@NgModule({
  declarations: [AuthenticationComponent, VerifyAccountComponent, RegisterComponent],
  imports: [CommonModule, AuthenticationRoutingModule, SharedModule],
})
export class AuthenticationModule {}
