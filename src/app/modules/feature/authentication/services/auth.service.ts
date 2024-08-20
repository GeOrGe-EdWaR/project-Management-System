import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { VerifyAccountRequest } from '../models/verify-account-request-model';
import { Endpoints } from 'src/app/core/endpoints';

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
}
