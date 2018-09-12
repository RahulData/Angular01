import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Person } from '../types/Person';
@Injectable({
  providedIn: 'root'
})
export class UserListService {
  loginStatus:boolean = false; 
  users:any;
  matchedUsers:any;
  person:Person = {name:'',pass:''};

  constructor(private http: HttpClient) {  }
  
  findUsers(username:string):Observable<any> {
    console.log("Users Search service called");
    return this.http.get('https://swapi.co/api/people/?search='+username);
  }
  
  getLoggedIn():boolean {
    console.log(this.users);
    return this.loginStatus;
  }
  
  setLoggedIn(status:boolean):void {
    this.loginStatus = status;
  }
  
}