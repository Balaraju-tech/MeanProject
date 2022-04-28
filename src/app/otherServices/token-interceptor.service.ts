import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, Observable, of, pipe } from 'rxjs';
import { AuthserviceService } from './authservice.service';

@Injectable()
export class TokenInterceptorService implements HttpInterceptor {
  constructor(private injector: Injector) {}
  router = this.injector.get(Router);
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const idToken = localStorage.getItem('token');
    const cloned = req.clone({
      headers: req.headers.set('authorization', `Bearer ${idToken}`),
    });
    return next.handle(cloned);
  }
}

// import {
//   HttpEvent,
//   HttpHandler,
//   HttpHeaders,
//   HttpInterceptor,
//   HttpRequest,
// } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Observable, of } from 'rxjs';
// import { Injector } from '@angular/core';
// import { AuthserviceService } from './authservice.service';

// @Injectable({
//   providedIn: 'root',
// })
// export class TokenInterceptorService implements HttpInterceptor {
//   constructor(private injector: Injector) {}
//   intercept(httpRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//     const API_KEY = '123456';
//     let req = httpRequest.clone({ headers: httpRequest.headers.append('Content-Type', 'application/json')});
//     return next.handle(req.clone({ setHeaders: { API_KEY } }));
//   }
//   // authService = this.injector.get(AuthserviceService);
//   // intercept(
//   //   req: HttpRequest<any>,
//   //   next: HttpHandler
//   // ){
//   //   const headers = new HttpHeaders({
//   //   'Authorization': 'token 123',
//   //   'Content-Type': 'application/json'
//   // });
//   //   // const token = this.authService.getLocalStorageToken();
//   //   console.log("THE TOKEN FROM INTERCEPTOR IS ");
//   //   // console.log(token);
//   //   const tokenizedRequest = req.clone({
//   //     setHeaders: {'Authorization': `Bearer xxxxxx`},
//   //   });
//   //   return next.handle(tokenizedRequest);
//   // }
// }
