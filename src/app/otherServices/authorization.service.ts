import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  constructor() { }

  setUserAsAdmin(){
    localStorage.setItem('user', 'admin');
  }
  removeUserAsAdmin(){
    localStorage.removeItem('user');
  }
  setUserAsBasic(){
    localStorage.setItem('user', 'basic');
  }
  getAdminType(){
    if(localStorage.getItem('user') === 'admin'){
      return true;
    }else{
      return false;
    }
  }

}
