import { Component, OnInit } from '@angular/core';
import {UserServiceService} from '../user-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {
  users : any;
  constructor(private service: UserServiceService, private router: Router) { }

  ngOnInit(): void {
    this.getAllUsers();
  }

  public getAllUsers(){
    let response = this.service.getAllUsers();
    response.subscribe(data => this.users = data);
  }
  public handleDeleteUser(id : number){
    let response = this.service.deleteUser(id);
    response.subscribe(data => this.users = data);
    window.location.reload();



  }

}
