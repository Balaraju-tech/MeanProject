import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';
import { user } from './interfaces/user';


@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  constructor(private http: HttpClient, private router: Router) { }
  loginAPI = "http://localhost:8000/auth/login";
  signupAPI = "http://localhost:8000/auth/signup";

  setLocalStorageToken(token: string){
    localStorage.setItem('token', token);
  }

  getLocalStorageToken(){
    const token = localStorage.getItem('token');
    return token;
  }

  clearToken(){
    localStorage.clear();
  }

  login(userName: string, password: string){
          return this.http.post<any>(this.loginAPI, {userName: userName, password: password});
  }

  unAuthorizedError(error: HttpErrorResponse ){
    return of(error);
  }

  logout(){
    localStorage.clear();
    this.router.navigate(['/auth/login'])
  }

  signUp(userDetails: user){
      return this.http.post<any>(this.signupAPI, {userDetails: userDetails});
  }

}
