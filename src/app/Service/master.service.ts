import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponsModel, Task } from '../model/task';

@Injectable({
  providedIn: 'root'
})
export class MasterService {
  apiUrl : string = 'https://freeapi.gerasim.in/api/JWT/'
  constructor(private http:HttpClient) { }

  getAllTasks(): Observable<ApiResponsModel>{
    return this.http.get<ApiResponsModel>(this.apiUrl + 'GetAllTaskList');
  }

  addNewTask(obj : Task): Observable<ApiResponsModel>{
    return this.http.post<ApiResponsModel>(this.apiUrl + 'CreateNewTask',obj);
  }
  
  updateTask(obj : Task): Observable<ApiResponsModel>{
    return this.http.put<ApiResponsModel>(this.apiUrl + 'UpdateTask',obj);
  }

  deleteTask(id : number){
    return this.http.delete<ApiResponsModel>(this.apiUrl + 'DeleteTask?itemId='+id);
  }
}
