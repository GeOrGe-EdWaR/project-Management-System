import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListHeader } from 'src/app/modules/shared/models/list-header.model';
import { GetUsersListResponse } from '../models/get-users-list-response-model';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  usersBaseUrl = 'Users/';

  constructor(private _http: HttpClient) {}

  getUsersList(
    pageNumber: number,
    pageSize: number,
    seachKey: string,
    searchValue: string
  ): Observable<GetUsersListResponse> {
    //dontforget the interface here getuserslistsresponse
    let queryParams = new HttpParams();

    queryParams = queryParams.append('pageNumber', pageNumber);
    queryParams = queryParams.append('pageSize', pageSize);

    if (seachKey && searchValue) {
      if (seachKey != 'status')
        queryParams = queryParams.append(seachKey, searchValue);
      else {
        queryParams = queryParams.append(
          'isActivated',
          searchValue == 'Active'
        );
      }
    }

    return this._http.get<GetUsersListResponse>('Users', {
      // here too don't forget the interface
      params: queryParams,
    });
  }

  getUserById(id: number): Observable<any> {
    return this._http.get(`Users/${id}`);
  }

  onActivateUser(id: number): Observable<any> {
    return this._http.put(`Users/${id}`, {});
  }

  get listHeaders(): ListHeader[] {
    return [
      {
        type: 'text',
        header: 'User Name',
        datafield: 'userName',
      },
      {
        type: 'user status',
        header: 'Status',
        datafield: 'isActivated',
      },
      {
        type: 'text',
        header: 'Phone Number',
        datafield: 'phoneNumber',
      },
      {
        type: 'text',
        header: 'Email',
        datafield: 'email',
      },
      {
        type: 'text',
        header: 'Country',
        datafield: 'country',
      },
      {
        type: 'list',
        header: 'Task',
        datafield: 'title',
        // objectKey:'title'
      },
      {
        type: 'actions',
        header: 'Actions',
        datafield: 'actions',
        actions: {
          isView: true,
          isBlock: true,
        },
      },
    ];
  }
}
// getUserData(myparams: any): Observable<any> {
//   return this._HttpClient.get(`Users/Manager`, { params: myparams })
// }

// getUserCount(): Observable<any> {
//   return this._HttpClient.get(`Users/Count`)
// }

// onGetUserById(id: number): Observable<any> {
//   return this._HttpClient.get(`Users/${id}`);
// }
