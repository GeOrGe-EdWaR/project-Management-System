import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { VerifyAccountRequest } from '../models/verify-account-request-model';
import { ResetPasswordRequest } from '../models/reset-password-request';
import { LoginRequest } from '../models/login-request';

import { jwtDecode } from 'jwt-decode';

// The service for authentication-related HTTP requests
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  role: string | null = '';

  constructor(private _http: HttpClient) { }

  onLogin(data: LoginRequest): Observable<LoginRequest> {
    return this._http.post<LoginRequest>('Users/Login', data);
  }

  // Verify account by sending a PUT request
  verifyAccount(form: VerifyAccountRequest): Observable<VerifyAccountRequest> {
    return this._http.put<VerifyAccountRequest>('Users/verify', form);
  }

  checkEmail(email: string): Observable<string> {
    return this._http.post<string>('Users/Reset/Request', email);
  }

  resetPassword(form: ResetPasswordRequest): Observable<ResetPasswordRequest> {
    return this._http.post<ResetPasswordRequest>('Users/Reset', form);
  }

  // Register a user by sending a POST request with FormData
  fetchRegister(regForm: FormData): Observable<any> {
    return this._http.post('Users/Register', regForm);
  }

  // getProfile() {
  //   //get the token from the local storage
  //   let encodeToken: any = localStorage.getItem('userToken');
  //   let decoded: any = jwtDecode(encodeToken); //token is decoded
  //   console.log(decoded);
  //   localStorage.setItem('userEmail', decoded.userEmail);
  //   localStorage.setItem('userName', decoded.userName);
  //   localStorage.setItem('role', decoded.userGroup);
  //   this.getRole();
  // }

  // getRole() {
  //   if (
  //     localStorage.getItem('userToken') !== null &&
  //     localStorage.getItem('role') !== null
  //   ) {
  //     this.role = localStorage.getItem('role');
  //   }
  // }


  // // Login function
  // onLogin(loginRequest: LoginRequest): Observable<any> {
  //   return this.http.post<any>(`${this.apiUrl}/login`, loginRequest);
  // }

  // Decode JWT token and store user information
  getProfile(): void {
    // Get the token from local storage
    const encodedToken: string | null = localStorage.getItem('userToken');

    if (encodedToken) {
      try {
        // Decode the JWT
        const decoded: any = jwtDecode(encodedToken);
        console.log(decoded);

        // Store user details in local storage
        localStorage.setItem('userEmail', decoded.userEmail);
        localStorage.setItem('userName', decoded.userName);
        localStorage.setItem('role', decoded.userGroup);

        // Retrieve user role
        this.getRole();
      } catch (error) {
        console.error('Invalid token:', error);
        // Handle the error, e.g., log out the user, show a message, etc.
        this.logout();
      }
    } else {
      console.warn('No token found in local storage');
      // Redirect to login or take other appropriate action
    }
  }

  // Get user role from local storage
  getRole(): void {
    const role = localStorage.getItem('role');
    if (role) {
      this.role = role;
    } else {
      console.warn('No role found in local storage');
      // Redirect to login or take other appropriate action
    }
  }

  // Logout function
  logout(): void {
    // Clear all user-related data from local storage
    localStorage.removeItem('userToken');
    localStorage.removeItem('userEmail');
    localStorage.removeItem('userName');
    localStorage.removeItem('role');
    // Redirect to login or take other appropriate action
  }
}


