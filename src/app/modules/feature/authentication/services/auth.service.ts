import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { VerifyAccountRequest } from '../models/verify-account-request-model';
import { Endpoints } from 'src/app/core/endpoints';
import { ResetPasswordRequest } from '../models/reset-password-request';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private _http: HttpClient) {}

  // Http Requests
  verifyAccount(form: VerifyAccountRequest): Observable<VerifyAccountRequest> {
    return this._http.put<VerifyAccountRequest>(
      Endpoints.baseUrl + Endpoints.authBaseUrl + Endpoints.verifyAccount,
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
  }
}
