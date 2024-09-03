import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmptasksService {

  constructor(

    private _HttpClient: HttpClient,


  ) { }


  onGetAlltasks(id: number, myparams: any): Observable<any> {

    return this._HttpClient.get(`Task/project/${id}`, { params: myparams });

  }


  onGetMyTasks(myParams: any): Observable<any> {

    return this._HttpClient.get(`Task`, { params: myParams });

  }


  onChangeTaskStatus(id: number, myStatus: string): Observable<any> {

    return this._HttpClient.put(`Task/${id}/change-status`, { 'status': myStatus });

  }



  onViewTask(id: number): Observable<any> {

    return this._HttpClient.get(`Task/${id}`)
  }




}
