import { FormControl, FormGroupDirective, NgForm } from "@angular/forms";
import { ErrorStateMatcher } from "@angular/material/core";

export const AuthErrorMessages: any = {
  user: {
    required: 'it is required',
    minlength: 'it is min length',
  }
  ,
  email: {
    required: 'Email is required',
    pattern: 'Please enter valid email',
  },
  code: {
    required: 'Code is required',
    pattern: 'Code should be 4 characters',
  },
};


export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}