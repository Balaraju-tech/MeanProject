import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, of, tap } from 'rxjs';
import { user } from '../interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class AuthserviceService {
  constructor(private http: HttpClient, private router: Router) {}
  // router = this.injector.get(Router)
  loginAPI = 'http://localhost:8000/auth/login';
  signupAPI = 'http://localhost:8000/auth/signup';
  getLoggedInUserEmail = 'http://localhost:8000/auth/getLoggedInUserEmail';
  isLoggedIn: boolean = false;

  setLocalStorageToken(token: string) {
    localStorage.setItem('token', token);
  }

  getLocalStorageToken() {
    let token = localStorage.getItem('token');
    if(!token){
      token='';
    }
    return token;
  }

  clearToken() {
    localStorage.clear();
  }

  async login(userName: string, password: string): Promise<any> {
    let loginDetails = await new Promise((resolve) => {
      this.http
        .post<any>(this.loginAPI, {
          userName: userName,
          password: password,
        })
        .pipe(
          catchError(this.unAuthorizedError),
          tap((res) => {
            console.log('This is in the tap');
            console.log(res);
          })
        )
        .subscribe((res) => {
          if (res.status === 401) {
            resolve(401);
          } else {
            this.isLoggedIn = true;
            resolve({ token: res.token, isAdmin: res.isAdmin });
          }
        });
    });
    return loginDetails;
  }

  unAuthorizedError(error: HttpErrorResponse) {
    return of(error);
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/auth/login']);
  }

  signUp(userDetails: user) {
    return this.http.post<any>(this.signupAPI, { userDetails: userDetails });
  }

  getUserEmailFromValidToken(){
    const token = this.getLocalStorageToken();
    return this.http.post<any>(this.getLoggedInUserEmail, {});
  }
}
