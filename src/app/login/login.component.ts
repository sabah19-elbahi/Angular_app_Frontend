import { Component, OnInit } from '@angular/core';
import {UserServiceService} from '../user-service.service';
import {User} from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user : User = new User(0,0,"","","");
  name : string="";
  token : string="";
  role :  string="";

  constructor(private service : UserServiceService) { }

  ngOnInit(): void {
  }

  public submitLogin(){
    let response = this.service.doLogin(this.user);
    response.subscribe(response => {
      localStorage.setItem('name', response.name);
      localStorage.setItem('token', response.token);
      localStorage.setItem('role', response.role);
      localStorage.setItem('loggedIn', "true");


    });
  }

}
