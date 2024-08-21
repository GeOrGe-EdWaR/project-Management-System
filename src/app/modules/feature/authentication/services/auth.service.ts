import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { VerifyAccountRequest } from '../models/verify-account-request-model';
import { Endpoints } from 'src/app/core/endpoints';
import { ResetPasswordRequest } from '../models/reset-password-request';

// The service for authentication-related HTTP requests
@Injectable({
  providedIn: 'root',
})
export class AuthService {

  constructor(private _http: HttpClient) { }

  // Verify account by sending a PUT request
  verifyAccount(form: VerifyAccountRequest): Observable<VerifyAccountRequest> {
    return this._http.put<VerifyAccountRequest>(
      `${Endpoints.baseUrl}${Endpoints.authBaseUrl}${Endpoints.verifyAccount}`,
      form
    );
  }



  checkEmail(email: string): Observable<string> { 
    return this._http.post<string>(
      Endpoints.baseUrl + Endpoints.authBaseUrl + Endpoints.checkEmail,
      email
    );
  }

  resetPassword(form: ResetPasswordRequest): Observable<ResetPasswordRequest> {
    return this._http.put<ResetPasswordRequest>(
      Endpoints.baseUrl + Endpoints.authBaseUrl + Endpoints.resetPassword,
      form
    );

  // Register a user by sending a POST request with FormData
  fetchRegister(regForm: FormData): Observable<any> {
    return this._http.post('Users/Register', regForm);

  }
}
