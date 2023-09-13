import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RandomUsersService {
  private url:any="https://randomuser.me/api/?results=20&inc=name,picture,id,cell&nat=in";

  constructor(private _httpClient:HttpClient) { }

  getUsers():Observable<any>{
    return this._httpClient.get(this.url);
  }
  getFilteredUsers(term:any):Observable<any>{
    return this._httpClient.get(this.url+"?filter="+term);
  }
}
