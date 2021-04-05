import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _httpClient:HttpClient) { }
   

    getStudents(url:string)
    {
      return this._httpClient.get(`${environment.ApiLink}/${url}`);
    }
    getStudentsDetails(url:string)
    {
      return this._httpClient.get(`${environment.ApiLink}/${url}`);
    }

   


}
