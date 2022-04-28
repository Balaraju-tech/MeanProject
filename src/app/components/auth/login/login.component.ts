import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../../users/users.service';
import { SignupComponent } from '../signup/signup.component';
import { catchError, pipe, tap } from 'rxjs';
import { preventDefault } from 'src/app/commonFunctions/common';
import { AuthorizationService } from 'src/app/otherServices/authorization.service';
import { AuthserviceService } from 'src/app/otherServices/authservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private router: Router,
    private authService: AuthserviceService,
    private authorizationService : AuthorizationService
  ) {}
  errorMessage: string = '';
  ngOnInit(): void {}

  async login(event: any, username: string, password: string) {
    preventDefault(event);
    let isAdmin = false;
    let data = await this.authService.login(username, password);
      if(data === 401){
        this.errorMessage = "Please enter valid email address or password"
      }else{
        console.log("Entered Pass Else Condition");
        this.authService.setLocalStorageToken(data.token);
        if(data.isAdmin){
          this.authorizationService.setUserAsAdmin();
        }else{
          this.authorizationService.setUserAsBasic();
        }
        this.router.navigate(['/home']);
      }
  }
}
