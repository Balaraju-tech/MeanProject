import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthserviceService } from 'src/app/authservice.service';
import { UsersService } from '../../users/users.service';
import { preventDefault } from 'src/app/commonFunctions/common';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private userService: UsersService, private router: Router, private authService: AuthserviceService) { }
  successSignUpHidden :boolean = true;
  errorMessage: string = "";
  ngOnInit(): void {
  }

  signUpUser(event:any, userName: string, password: string, qualification: string){
    preventDefault(event);
    if(userName=== "" || password === ""){
      this.errorMessage = "Please enter valid username or password";
    }
    else if(qualification === ""){
      this.errorMessage = "Please enter qualification";
    }else{
      const userDetail = {userName: userName, password: password, qualification: parseInt(qualification), admin: false};
      this.authService.signUp(userDetail).subscribe((data)=>{
          if(data.acknowledged === true){
            this.errorMessage = "";
            this.successSignUpHidden = false;
          }else if(data.acknowledged === false && data.insertedId === "userAlreadyPresent"){
            this.errorMessage = "Username is already taken, Please try some other username";
          }
      });
    }
  }
}
