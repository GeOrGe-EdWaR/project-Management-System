import { Injectable } from '@angular/core';
import { AuthService } from '../../feature/authentication/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {
  profile!: any;
  imageUrl: string = 'https://upskilling-egypt.com:3003/';
  constructor(private _auth: AuthService) { 
    this._auth.getProfile().subscribe({
      next: (res) => {
        this.profile = res;
      },
      error: (err) => {
        console.error('Error retrieving profile:', err);
      }
    });
  }

  // getCurrrentUserProfile(): any {
  //   if (this.profile) {
  //     this.profile.imagePath = `${this.imageUrl}${this.profile.imagePath}`;
  //     return this.profile;
  //   } else {
  //     console.error('Profile data not available');
  //     return null; // Or handle the error appropriately
  //   };
  // }
  }
