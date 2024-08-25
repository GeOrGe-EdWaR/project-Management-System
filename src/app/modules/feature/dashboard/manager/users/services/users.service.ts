import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(
    private _HttpClient: HttpClient,
  ) { }



  getUserData(myparams: any): Observable<any> {
    return this._HttpClient.get(`Users/Manager`, { params: myparams })
  }

  getUserCount(): Observable<any> {
    return this._HttpClient.get(`Users/Count`)
  }

  onActivateUser(id: number): Observable<any> {
    return this._HttpClient.put(`Users/${id}`, {});
  }

  onGetUserById(id: number): Observable<any> {
    return this._HttpClient.get(`Users/${id}`);
  }



}
