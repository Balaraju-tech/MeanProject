import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UsersService } from '../../../services/users.service';

@Component({
  selector: '[app-user-detail]',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent {
  @Input() user: any;
  @Output() deletedUser = new EventEmitter<string>();
  constructor(private userService: UsersService) { }


  deleteUser(){
      this.userService.deleteUser(this.user.userName).subscribe((data)=>{
          if(data.acknowledged === true){
            this.deletedUser.emit(this.user.userName);
          }
      });
  }

}
