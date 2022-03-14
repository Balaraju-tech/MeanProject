import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: '[app-user-detail]',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  @Input() user: any;
  @Output() deletedUser = new EventEmitter<string>();
  constructor(private userService: UsersService) { }

  ngOnInit(): void {
  }

  deleteUser(){
      this.userService.deleteUser(this.user.userName).subscribe((data)=>{
          if(data.acknowledged === true){
            this.deletedUser.emit(this.user.userName);
          }
      });
  }

}
