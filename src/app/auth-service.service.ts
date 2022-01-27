import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  name : string | null = "";
  token : string | null = "";
  role :  string | null = "";
  isLoggedIn : boolean = false;
  constructor() {
    let logged = localStorage.getItem("loggedIn");
    if(logged=="true"){
      this.isLoggedIn = true;
    }

    
  }

   public  getName(){
    this.name = localStorage.getItem('name');
    return this.name;
   }

   public  getToken(){
    this.token = localStorage.getItem('token');
    return this.token;
   }

   public  getRole(){
    this.role = localStorage.getItem('role');
    return this.role;
   }

   public doLogout(){
      localStorage.removeItem('name');
      localStorage.removeItem('token');
      localStorage.removeItem('role');
      localStorage.setItem('loggedIn',"false");


   }

   public getAuth(){
      if(this.isLoggedIn || (localStorage.getItem('loggedIn')=="true")){
        return true;
      }
      else{
        return false;
      }
   }

   public isAuthenticated(){
    if(this.getAuth()){
      return true;
    }
    else{
      return false;
    }
   }
}
