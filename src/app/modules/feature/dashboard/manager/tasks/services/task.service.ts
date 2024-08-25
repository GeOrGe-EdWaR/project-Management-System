import { Injectable } from '@angular/core';

import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ListHeader } from 'src/app/modules/shared/models/list-header.model';
import { GetTasksListResponse } from '../models/get-tasks-list-response-model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  taskBaseUrl = 'Task/';
  getTasksListUrl = 'manager';

  constructor(private _http: HttpClient) {}

  // HTTP Requests
  getTasksList(
    pageNumber: number,
    pageSize: number,
    seachKey: string,
    searchValue: string
  ): Observable<GetTasksListResponse> {
    let queryParams = new HttpParams();

    queryParams = queryParams.append('pageNumber', pageNumber);
    queryParams = queryParams.append('pageSize', pageSize);

    if (seachKey && searchValue) {
      queryParams = queryParams.append(seachKey, searchValue);
    }

    return this._http.get<GetTasksListResponse>(
      this.taskBaseUrl + this.getTasksListUrl,
      {
        params: queryParams,
      }
    );
  }

  // Handle Data
  get listHeaders(): ListHeader[] {
    return [
      {
        type: 'text',
        header: 'Title',
        datafield: 'title',
      },
      {
        type: 'status',
        header: 'Status',
        datafield: 'status',
      },
      {
        type: 'object',
        header: 'User',
        datafield: 'employee',
        objectKey: 'userName',
      },
      {
        type: 'object',
        header: 'Project',
        datafield: 'project',
        objectKey: 'title',
      },
      {
        type: 'date',
        header: 'Date Created',
        datafield: 'creationDate',
        format: 'dd/mm/yyyy',
      },
      {
        type: 'actions',
        header: 'Actions',
        datafield: 'actions',
        actions: {
          isView: true,
          isEdit: true,
          isDelete: true,
        },
      },
    ];
  }
}
