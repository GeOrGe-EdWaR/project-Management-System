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

