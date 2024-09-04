import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthErrorMessages } from '../../feature/authentication/validations/auth-error-messages';
import { AuthValidations } from '../../feature/authentication/validations/auth-validations';
import { ChangePasswordService } from '../services/change-password.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss'],
})
export class ChangePasswordComponent {
  constructor(
    public dialogRef: MatDialogRef<ChangePasswordComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private router: Router,
    private toastr: ToastrService,
    private _ChangePasswordService: ChangePasswordService
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  hide: boolean = true;
  public AuthErrorMessages = AuthErrorMessages;

  matcher = new ErrorStateMatcher();

  ChangePasswordForm = new FormGroup({
    oldPassword: new FormControl('', [Validators.required, Validators.email]),
    newPassword: new FormControl('', [
      Validators.required,
      Validators.pattern(AuthValidations.password.pattern),
    ]),
    confirmNewPassword: new FormControl('', [
      Validators.required,
      Validators.pattern(AuthValidations.password.pattern),
    ]),
  });

  onSubmit(data: FormGroup) {
    data.markAllAsTouched();

    if (data.valid) {
      this._ChangePasswordService.changePassword(data.value).subscribe({
        next: (res) => {
          console.log(res);
        },
        error: (err) => {
          this.toastr.error(err.error.message);
        },
        complete: () => {
          this.toastr.success('Success', 'Change password successfully');

          this.dialogRef.close();
        },
      });
    }
  }
}
