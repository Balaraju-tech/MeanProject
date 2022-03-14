import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthserviceService } from 'src/app/authservice.service';
import { UsersService } from '../../users/users.service';
import { SignupComponent } from '../signup/signup.component';
import { catchError, pipe, tap } from 'rxjs';
import { preventDefault } from 'src/app/commonFunctions/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private userService: UsersService,
    private router: Router,
    private authService: AuthserviceService
  ) {}
  errorMessage: string = '';
  ngOnInit(): void {}

  login(event: any, username: string, password: string) {
    preventDefault(event);
    this.authService
      .login(username, password)
      .pipe(catchError(this.authService.unAuthorizedError),
      tap((res)=>{
        console.log("This is in the tap")
        console.log(res);
      })).subscribe( res=>{
          if(res.status === 401){
            this.errorMessage="Please enter valid username or password";
          }else{
            this.errorMessage = "";
            this.router.navigate(['/home']);
          }
      });
  }
}
