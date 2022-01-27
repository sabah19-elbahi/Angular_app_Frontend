import { Component, OnInit } from '@angular/core';
import {UserServiceService} from '../user-service.service';
import {User} from '../user';
import {FormsModule} from '@angular/forms';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user : User = new User(0,0,"","","");
  message : any;

  constructor(private service : UserServiceService) { }

  ngOnInit(): void {
  }

  public submitRegistration(){
    let response = this.service.doRegister(this.user);
    response.subscribe(response => {
      this.message = response.message;
    });
  }

}
