import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { VerifyAccountRequest } from '../models/verify-account-request-model';


// The service for authentication-related HTTP requests
@Injectable({
  providedIn: 'root',
})
export class AuthService {

  constructor(private _http: HttpClient) { }

  // Verify account by sending a PUT request
  // verifyAccount(form: VerifyAccountRequest): Observable<VerifyAccountRequest> {
  //   return this._http.put<VerifyAccountRequest>(
  //     `${Endpoints.baseUrl}${Endpoints.authBaseUrl}${Endpoints.verifyAccount}`,
  //     form
  //   );
  // }


  // Verify account 
  verifyAccount(form: VerifyAccountRequest): Observable<VerifyAccountRequest> {
    return this._http.put<VerifyAccountRequest>(
      `Users/verify`, form);
  }

  // Register a user by sending a POST request with FormData
  fetchRegister(regForm: FormData): Observable<any> {
    return this._http.post('Users/Register', regForm);
  }
}
