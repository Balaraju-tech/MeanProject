import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../../users/users.service';
import { preventDefault } from 'src/app/commonFunctions/common';
import { AuthserviceService } from 'src/app/otherServices/authservice.service';

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
      const userDetail = {userName: userName, password: password, qualification: qualification, admin: false};
      this.authService.signUp(userDetail).subscribe({
        next: (res)=>{
            this.errorMessage = "";
            this.successSignUpHidden = false;
      },
      error: (err)=>{
        console.log("THE ERROR MESSAGE IS");
        console.log(err);
        if(err.status === 401){
          this.successSignUpHidden = true;
          this.errorMessage = "Username is already taken, Please try some other username";
        }else{
          window.alert(`THERE IS AN ERROR : ${err.statusText}`);
        }
      }
      });
    }
  }
}
