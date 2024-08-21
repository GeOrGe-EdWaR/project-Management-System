import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private _HttpClient: HttpClient,
  ) { }

  fetchRegister(regForm: FormData): Observable<any> {
    return this._HttpClient.post(`Users/Register`, regForm)
  }

}
