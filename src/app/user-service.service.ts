import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {User} from './user';
import {AuthServiceService} from './auth-service.service';
import { HttpHeaders } from '@angular/common/http';



 export interface Response {
    message: string,
  };

   export interface LoginResponse {
    name : string,
    token : string,
    role : string
  };


@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http: HttpClient, public authservice : AuthServiceService ) { }

  public doRegister(user : User) {
      return this.http.post<Response>("http://localhost:8080/api/register", user);
  }

  public doLogin(user : User) {
      return this.http.post<LoginResponse>("http://localhost:8080/api/login", user);
  }

  public getAllUsers() {
      let token : any = this.authservice.getToken();
      let httpHeaders : any = new HttpHeaders().set("Authorization",token);
      return this.http.get("http://localhost:8080/api/users",{'headers':httpHeaders});
  }

  public deleteUser(id: number){
    let token : any = this.authservice.getToken();
    let httpHeaders : any = new HttpHeaders().set("Authorization",token);
    return this.http.delete("http://localhost:8080/api/users/delete/"+id,{'headers':httpHeaders});
  }


}
