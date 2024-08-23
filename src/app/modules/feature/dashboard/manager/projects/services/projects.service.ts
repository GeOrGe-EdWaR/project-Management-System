import { Injectable } from '@angular/core';

import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { GetProjectsListResponse } from '../models/get-projects-list-response-model';
import { ListHeader } from 'src/app/modules/shared/models/list-header.model';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  projectBaseUrl = 'Project/';
  getProjectsListUrl = 'manager';

  constructor(private _http: HttpClient) {}

  getProjectsList(
    pageNumber: number,
    pageSize: number,
    title: string
  ): Observable<GetProjectsListResponse> {
    let queryParams = new HttpParams();

    queryParams = queryParams.append('pageNumber', pageNumber);
    queryParams = queryParams.append('pageSize', pageSize);

    if (title) {
      queryParams = queryParams.append('title', title);
    }

    return this._http.get<GetProjectsListResponse>(
      this.projectBaseUrl + this.getProjectsListUrl,
      {
        params: queryParams,
      }
    );
  }

  deleteProject(id: number): Observable<any> {
    return this._http.delete(this.projectBaseUrl + id);
  }

  // Handle Data
  get listHeaders(): ListHeader[] {
    return [
      {
        type: 'text',
        header: 'Title',
        datafiled: 'title',
      },
      {
        type: 'length',
        header: 'Num Tasks',
        datafiled: 'task',
      },
      {
        type: 'date',
        header: 'Date Created',
        datafiled: 'creationDate',
        format: 'dd/mm/yyyy',
      },
      {
        type: 'actions',
        header: 'Actions',
        datafiled: 'actions',
        actions: {
          isView: true,
          isEdit: true,
          isDelete: true,
        },
      },
    ];
  }
}
