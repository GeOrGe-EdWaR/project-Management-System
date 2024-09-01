import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChartsService {

  constructor(private _http: HttpClient) { }

  getTasksData(): Observable<any> {
    return this._http.get('Task/count');
  }

  getUsersData(): Observable<any> {
    return this._http.get('Users/count');
  }

}
