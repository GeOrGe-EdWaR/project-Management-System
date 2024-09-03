import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ChartsService {
  taskStatus: any = {
    toDo: 'To do',
    done: 'Done',
    inProgress: 'In progress',
  };

  userStatus: any = {
    activatedEmployeeCount: 'Active',
    deactivatedEmployeeCount: 'Inactive',
  };

  taskColors = [
    { name: 'To do', value: '#e4e1f5' },
    { name: 'Done', value: '#009247' },
    { name: 'In progress', value: '#ef9b28a3' },
  ];

  userColors = [
    { name: 'Active', value: '#009247' },
    { name: 'Inactive', value: '#922e25b2' },
  ];

  constructor(private _http: HttpClient) {}

  getTasksData(): Observable<any> {
    return this._http.get('Task/count').pipe(
      map((res) => {
        return Object.entries(res).map(([key, value]) => ({
          name: this.taskStatus?.[key],
          value,
        }));
      })
    );
  }

  getUsersData(): Observable<any> {
    return this._http.get('Users/count').pipe(
      map((res) => {
        return Object.entries(res).map(([key, value]) => ({
          name: this.userStatus?.[key],
          value,
        }));
      })
    );
  }
}
