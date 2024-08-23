import { Component, OnInit } from '@angular/core';
import { FormControl, FormControlOptions, FormGroup, Validators } from '@angular/forms';
import { AuthErrorMessages, MyErrorStateMatcher } from '../../validations/auth-error-messages';
import { AuthService } from '../../services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  // 1//
  ngOnInit(): void {

  }
  // ==================================================
  // 2//
  constructor(
    private _AuthService: AuthService,
    private _Toastr: ToastrService,
    private _Router: Router,
  ) { }
  // ==================================================
  // 3//declerations
  imgSrc: any = "";
  matcher = new MyErrorStateMatcher();
  hide: boolean = true;


  // ==================================================
  // registerForm
  registerForm: FormGroup = new FormGroup({
    userName: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    country: new FormControl(null, [Validators.required]),
    phoneNumber: new FormControl(null, [Validators.required, Validators.pattern(/^01[125][0-9]{8}$/)]),
    password: new FormControl(null, [Validators.required, Validators.pattern(/^[a-zA-Z0-9@_]{6,20}$/)]),
    confirmPassword: new FormControl(null),
    profileImage: new FormControl(null, this.imgSrc),

  }, { validators: [this.confirmPass] } as FormControlOptions)


  // ==================================================
  // confirmpass
  confirmPass(formreg: FormGroup): void {
    const password = formreg.get(`password`);
    const confirmPassword = formreg.get(`confirmPassword`);

    if (confirmPassword?.value == "") {
      confirmPassword?.setErrors({ require: true })

    }
    else if (password?.value !== confirmPassword?.value) {
      confirmPassword?.setErrors({ notsame: true })
    }

  }
  // ==================================================
  // send regForm to api
  onRegister(registerForm: FormGroup) {

    let myforData = new FormData();

    myforData.append("userName", registerForm.value.userName);
    myforData.append("email", registerForm.value.email);
    myforData.append("country", registerForm.value.country);
    myforData.append("phoneNumber", registerForm.value.phoneNumber);
    myforData.append("password", registerForm.value.password);
    myforData.append("confirmPassword", registerForm.value.confirmPassword);
    myforData.append("profileImage", this.imgSrc)



    this._AuthService.fetchRegister(myforData).subscribe({
      next: (resp) => {
        this._Toastr.success("you have successfully registered", "success");
        // console.log(resp);

      },
      error: (err) => {
        this._Toastr.error('register has been failed', 'failed');
        // console.log(err);

      },
      complete: () => {
        this._Router.navigate(['/auth/verify-account']);
      }
    })
  }


  // ==================================================
  // dropZone img 
  files: File[] = [];

  onSelect(event: any) {
    console.log(event);
    this.files.push(...event.addedFiles);
    this.imgSrc = this.files[0];
  }

  onRemove(event: any) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }



}
