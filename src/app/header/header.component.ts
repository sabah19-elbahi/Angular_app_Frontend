import { Component, OnInit } from '@angular/core';
import {AuthServiceService} from '../auth-service.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public authservice : AuthServiceService) { }

  ngOnInit(): void {
  }

  public logout(){
    this.authservice.doLogout();

  }
}
