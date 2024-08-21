import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthenticationComponent } from './authentication.component';
import { VerifyAccountComponent } from './components/verify-account/verify-account.component';

import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';

import { RegisterComponent } from './components/register/register.component';


const routes: Routes = [
  {
    path: '',
    component: AuthenticationComponent,
    children: [
      {
        path: 'verify-account',
        component: VerifyAccountComponent,
      },
      {

        path: 'forget-password',
        component: ForgetPasswordComponent,
      },
      {
        path: 'reset-password',
        component: ResetPasswordComponent,
      },
      
        path: "register-account",
        component: RegisterComponent,
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthenticationRoutingModule { }
