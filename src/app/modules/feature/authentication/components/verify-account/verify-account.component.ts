import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthErrorMessages } from '../../validations/auth-error-messages';

@Component({
  selector: 'app-verify-account',
  templateUrl: './verify-account.component.html',
  styleUrls: ['./verify-account.component.scss'],
})
export class VerifyAccountComponent {
  form = new FormGroup({
    user: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(1),
    ]),
  });

  public AuthErrorMessages = AuthErrorMessages;

  errorMessages: any;

  ngOnInit(): void {
    // this.form.valueChanges.subscribe(() => {
    //   this.errorMessages = ProcessFormErrors(this.form, AuthErrorMessages);
    //   debugger;
    // });
  }
}
