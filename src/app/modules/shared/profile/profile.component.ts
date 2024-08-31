import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormControlOptions,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../feature/authentication/services/auth.service';
import { MyErrorStateMatcher } from '../../feature/authentication/validations/auth-error-messages';
import { ProfileResponse } from '../../feature/authentication/models/profile-response';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  imgSrc: any = '';

  isView = true;

  initialProfileData!: ProfileResponse;

  hidePassword: boolean = true;

  matcher = new MyErrorStateMatcher();

  files: File[] = [];

  profileForm: FormGroup = new FormGroup(
    {
      userName: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20),
      ]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      country: new FormControl(null, [Validators.required]),
      phoneNumber: new FormControl(null, [
        Validators.required,
        Validators.pattern(/^01[125][0-9]{8}$/),
      ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.pattern(/^[a-zA-Z0-9@_]{6,20}$/),
      ]),
      confirmPassword: new FormControl(null),
      profileImage: new FormControl(null, this.imgSrc),
    },
    { validators: [this.confirmPass] } as FormControlOptions
  );

  constructor(
    private _AuthService: AuthService,
    private _Toastr: ToastrService,
    private _Router: Router
  ) {}

  ngOnInit(): void {
    this.getCurrentUser();

    this.profileForm.disable();
  }

  confirmPass(formreg: FormGroup): void {
    const password = formreg.get(`password`);
    const confirmPassword = formreg.get(`confirmPassword`);

    if (confirmPassword?.value == '') {
      confirmPassword?.setErrors({ require: true });
    } else if (password?.value !== confirmPassword?.value) {
      confirmPassword?.setErrors({ notsame: true });
    }
  }

  getCurrentUser(): void {
    this._AuthService.getProfile().subscribe({
      next: (response) => {
        this.initialProfileData = response;

        this.initialieProfileForm();
      },
    });
  }

  initialieProfileForm(): void {
    this.profileForm.patchValue(this.initialProfileData);
  }

  toggleToEdit(): void {
    this.isView = false;

    this.profileForm.enable();
  }

  toggleToView(): void {
    this.isView = true;

    this.profileForm.disable();
  }

  navigateToHome(): void {
    this._Router.navigateByUrl('dashboard/home');
  }

  submitEdit(): void {
    this.profileForm.markAllAsTouched();

    if (this.profileForm.valid) {
      this._AuthService.editProfile(this.profileForm.value).subscribe({
        next: () => {
          this._Toastr.success('updated successfully');

          this.navigateToHome();
        },
      });
    }
  }

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
