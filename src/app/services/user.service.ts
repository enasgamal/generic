import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  logged=new Subject<boolean>();
  constructor(private _apiService:ApiService) { 
    this.logged.next(this.isLogged());
  }

  getStudentsList()
  {
   return this._apiService.getStudents("users");
  }
  getStudentDetails(id:number) 
  {
   return this._apiService.getStudentsDetails(`users/${id}`);
  }

  login(email:string)
  {
    localStorage.setItem("Email",email);  
    this.setLoggedStatus(true);
  }

  logout()
  {
    localStorage.removeItem("Email");  
    this.setLoggedStatus(false);
  }

  isLogged():boolean
  {
    let email=localStorage.getItem("Email")
    if(email==null)
    return false;

    return true;
  }

  setLoggedStatus(status:boolean)
  {
    this.logged.next(status);
  }

  getLoggedStatus(){
    return this.logged.asObservable();
  }
  
}
