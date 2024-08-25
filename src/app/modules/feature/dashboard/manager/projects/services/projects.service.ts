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
  getProjectsListUrl = 'manager';

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

  deleteProject(id: number): Observable<any> {
    return this._http.delete(this.projectBaseUrl + id);
  }

  onAddProject(data: FormGroup): Observable<any> {
    return this._http.post('Project', data);
  }

  getProjectById(id: number): Observable<any> {
    return this._http.get(`Project/${id}`);
  }

  editProject(id: number, data: FormGroup): Observable<any> {
    return this._http.put(`Project/${id}`, data);
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
