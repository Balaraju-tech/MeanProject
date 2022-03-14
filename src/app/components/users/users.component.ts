import { Component, OnInit } from '@angular/core';
import { user } from 'src/app/interfaces/user';
import { UsersService } from './users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: user[]= [];
  modal:boolean= false;
  isAdmin: boolean = true;
  hideError: boolean = true;
  errorMessage: string = "";
  constructor(private userService : UsersService) { }

  ngOnInit(): void {
    this.userService.getUsersList().subscribe((data)=>{
      for (const user of data) {
        this.users.push({userName: user.userName, password: user.password, qualification: user.qualification, admin: user.admin}); 
      }
    })
  } 

  showModal(){
    this.modal = true;
  }

  closeModal(){
    this.modal = false;
  }

  isAdminClick(){
    this.isAdmin = !this.isAdmin;
  }

  submitUserDetails(username: string, password: string, qualification: string){
      if(username ==="" || password=== ""){
        this.hideError = false;
        this.errorMessage = "Please enter valid username or password";
      }
      else if(!qualification){
        this.hideError = false;
        this.errorMessage = "Please enter valid qualification";
      }else{
        let user = {userName: username, password: password, qualification: parseInt(qualification), admin: this.isAdmin};
        this.userService.addUser(user).subscribe((data)=>{
            if(data.acknowledged === true){
              this.users.push({userName: username, password: password, qualification: parseInt(qualification), admin: this.isAdmin});
              this.modal = false;
              this.hideError = true;
            }
            if(data.acknowledged === false){
              this.hideError = false;
              this.errorMessage = "Username is already taken, Please try some other Username";
            }
        });
      }
    }

    deletedUser(userName: string){
      this.users = this.users.filter(user=>{
          return user.userName !== userName;
      })
    }

}
