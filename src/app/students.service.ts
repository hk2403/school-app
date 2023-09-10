import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  private url:any="https://64b8a34b21b9aa6eb07a012b.mockapi.io/api/students-mini/students";
  constructor(private _httpClient:HttpClient) { }

  getStudents():Observable<any>{
    return this._httpClient.get(this.url);
  }
  createStudent(data:any):Observable<any>{
    return this._httpClient.post(this.url,data);
  }
  deleteStudent(id:any):Observable<any>{
    return this._httpClient.delete(this.url+id);
  }
}