import { Injectable } from '@angular/core';

import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { GetProjectsListResponse } from '../models/get-projects-list-response-model';
import { ListHeader } from 'src/app/modules/shared/models/list-header.model';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  projectBaseUrl = 'Project/';
  getProjectsListUrl = 'employee';

  constructor(private _http: HttpClient) {}

  // HTTP Requests
  getProjectsList(
    pageNumber: number,
    pageSize: number,
    seachKey: string,
    searchValue: string
  ): Observable<GetProjectsListResponse> {
    let queryParams = new HttpParams();

    queryParams = queryParams.append('pageNumber', pageNumber);
    queryParams = queryParams.append('pageSize', pageSize);

    if (seachKey && searchValue) {
      queryParams = queryParams.append(seachKey, searchValue);
    }

    return this._http.get<GetProjectsListResponse>(
      this.projectBaseUrl + this.getProjectsListUrl,
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
        type: 'length',
        header: 'Num Tasks',
        datafield: 'task',
      },
      {
        type: 'text',
        header: 'Description',
        datafield: 'description',
      },
      {
        type: 'date',
        header: 'Date Created',
        datafield: 'creationDate',
        format: 'dd/mm/yyyy',
      },
      {
        type: 'date',
        header: 'Date Modified',
        datafield: 'modificationDate',
        format: 'dd/mm/yyyy',
      },
    ];
  }
}
