import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../feature/authentication/services/auth.service';
import { UserProfileService } from '../services/user-profile.service';
import { ChangePasswordComponent } from '../change-password/change-password.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  userProfile!: any;
  userName!: string | null;
  userEmail!: string | null;
  name: any;
  animal: any;

  constructor(
    private _auth: AuthService,
    private router: Router,
    public dialog: MatDialog
  ) {
    this._auth.getUserData();
    this.userProfile = _auth.getProfile().subscribe({
      next: (res) => {
        this.userProfile = res;
        console.log(this.userProfile, 'user profile');
      },
    });

    this.userName = localStorage.getItem('userName');
    this.userEmail = localStorage.getItem('userEmail');
  }

  logout(): void {
    localStorage.clear();
    this.router.navigateByUrl('/auth/login');
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ChangePasswordComponent, {
      width: '45%',
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      console.log('The dialog was closed', result);
    });
  }
}
