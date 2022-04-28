import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorizationService } from 'src/app/otherServices/authorization.service';
import { AuthserviceService } from 'src/app/otherServices/authservice.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router, private authorizationService: AuthorizationService, private authService: AuthserviceService) { }
  isAdmin: boolean = false;
  loggedIn: boolean = false;
  showJobOptions: boolean = false;
  ngOnInit(): void {
    this.isAdmin = this.authorizationService.getAdminType();
    if(this.authService.getLocalStorageToken() !== null){
      this.loggedIn = true;
    }
  }

  toggleJobOptions(){
    this.showJobOptions = !this.showJobOptions;
  }

}
