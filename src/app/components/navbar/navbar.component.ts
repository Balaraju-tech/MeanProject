import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { AuthorizationService } from 'src/app/services/authorization.service';
import { AuthserviceService } from 'src/app/services/authservice.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router, private authorizationService: AuthorizationService, private authService: AuthserviceService) { }
  isAdmin = new BehaviorSubject<Boolean>(false);
  loggedIn = new BehaviorSubject<Boolean>(false);
  showJobOptions: boolean = false;
  ngOnInit(): void {
    if(this.authService.getLocalStorageToken() !== ''){
      const userDetailsToken = this.authService.getLocalStorageToken()?.split('.')[1];
      const userDetails = JSON.parse(atob(userDetailsToken));
      if(userDetails.id){
        this.loggedIn.next(true);
        this.isAdmin.next(userDetails.admin);
      }
    }
  }

  toggleJobOptions(){
    this.showJobOptions = !this.showJobOptions;
  }

}
