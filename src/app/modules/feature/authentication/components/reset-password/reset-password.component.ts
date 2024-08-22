import { Component } from '@angular/core';
import { AuthErrorMessages } from '../../validations/auth-error-messages';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { AuthValidations } from '../../validations/auth-validations';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { ResetPasswordRequest } from '../../models/reset-password-request';
import { MatchPasswordValidator } from '../../validations/match-password-validator';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent {
public AuthErrorMessages = AuthErrorMessages;
matcher = new ErrorStateMatcher();
hide:boolean=true; 

resetPasswordForm = new FormGroup({
  email: new FormControl('', [Validators.required, Validators.email]),
  seed:new FormControl('',Validators.required),
  password:new FormControl('',[Validators.required,Validators.pattern(AuthValidations.password.pattern)]),
  confirmpassword:new FormControl('',[Validators.required,Validators.pattern(AuthValidations.password.pattern)]),
  },
    [MatchPasswordValidator('password', 'confirmpassword')]
  );

  constructor(private _auth: AuthService, private router: Router) {}

  submit(): void {
    this.resetPasswordForm.markAllAsTouched();

    if (this.resetPasswordForm.valid) {
      this._auth
        .resetPassword(this.resetPasswordForm.value as ResetPasswordRequest)
        .subscribe({
          next: () => {
            this.router.navigateByUrl('/auth/login');
          },
        });
    }
  }
}
