import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { preventDefault } from 'src/app/commonFunctions/common';
import { AuthorizationService } from 'src/app/services/authorization.service';
import { AuthserviceService } from 'src/app/services/authservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(
    private router: Router,
    private authService: AuthserviceService,
    private authorizationService : AuthorizationService
  ) {}
  errorMessage: string = '';

  async login(event: any, username: string, password: string) {
    preventDefault(event);
    let isAdmin = false;
    let data = await this.authService.login(username, password);
      if(data === 401){
        this.errorMessage = "Please enter valid email address or password"
      }else{
        this.authService.setLocalStorageToken(data.token);
        this.router.navigate(['/home']);
      }
  }
}
