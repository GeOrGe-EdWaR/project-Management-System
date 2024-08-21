import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { AuthErrorMessages } from '../../validations/auth-error-messages';
import { Router } from '@angular/router';
import { VerifyAccountRequest } from '../../models/verify-account-request-model';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent {
  public AuthErrorMessages = AuthErrorMessages;

  forgetPassForm = new FormGroup({email: new FormControl('', [Validators.required, Validators.email])})

  matcher = new ErrorStateMatcher();


  constructor(private _auth: AuthService, private router: Router) {}

  Verify(): void {
    this.forgetPassForm.markAllAsTouched();

    if (this.forgetPassForm.valid) {
      this._auth
        .checkEmail(this.forgetPassForm.value as string)
        .subscribe({
          next: () => {
            this.router.navigateByUrl('/auth/reset-password');
          },
        });
    }
  }

}
