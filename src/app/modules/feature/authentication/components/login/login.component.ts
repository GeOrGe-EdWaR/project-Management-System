import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';
import { VerifyAccountRequest } from '../../models/verify-account-request-model';
import { AuthService } from '../../services/auth.service';
import { AuthErrorMessages } from '../../validations/auth-error-messages';
import { AuthValidations } from '../../validations/auth-validations';
import { LoginRequest } from '../../models/login-request';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  hide: boolean = true;
  public AuthErrorMessages = AuthErrorMessages;

  matcher = new ErrorStateMatcher();

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.pattern(AuthValidations.password.pattern),
    ]),
  });

  constructor(
    private _auth: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  // submit(): void {
  //   this.loginForm.markAllAsTouched();

  //   if (this.loginForm.valid) {
  //     this._auth
  //       .onLogin(this.loginForm.value as LoginRequest)
  //       .subscribe({
  //         next: (res)=>{
  //           console.log(res);
  //           // here we will save the token as it's in the response we are recieving
  //           localStorage.setItem('userToken',res.token)
  //           // then we will use the function from authservice to store the user details
  //           this._auth.getProfile();
  //         },
  //         error:(err)=>{
  //           this.toastr.error(err.error.message)
  //         },
  //         complete:()=>{
  //           // here we will add instance from the toaster success
  //           this.toastr.success('Success', 'Login succesfully');
  //           this.router.navigate(['/dashboard']) // go to dashboard
  //         },
  //       });
  //   }
  // }

  submit(): void {
    this.loginForm.markAllAsTouched();

    if (this.loginForm.valid) {
      this._auth.onLogin(this.loginForm.value as LoginRequest).subscribe({
        next: (res) => {
          console.log(res);
          // here we will save the token as it's in the response we are recieving
          localStorage.setItem('userToken', res.token);
          // then we will use the function from authservice to store the user details
          this._auth.getUserData();
        },
        error: (err) => {
          this.toastr.error(err.error.message);
        },
        complete: () => {
          // here we will add instance from the toaster success
          this.toastr.success('Success', 'Login succesfully');
          this.router.navigate(['/dashboard']); // go to dashboard
        },
      });
    }
  }
}
