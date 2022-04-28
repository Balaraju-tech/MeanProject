import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AuthComponent } from './components/auth/auth.component';
import { LoginComponent } from './components/auth/login/login.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { ErrorComponent } from './components/error/error.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { manageJobs } from './components/jobs/jobs.component';
import { JobFormComponent } from './components/jobs/admin-job-form/job-form.component';
import { JobComponent } from './components/jobs/adminJobs/job.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UsersComponent } from './components/users/users.component';
import { UserDetailComponent } from './components/users/user-detail/user-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ErrorHandlerService } from './otherServices/error-handler.service';
import { TokenInterceptorService } from './otherServices/token-interceptor.service';
import { ApplyJobComponent } from './components/employeeJobs/apply-job/apply-job.component';
import { JobCardComponent } from './components/employeeJobs/apply-job/job-card/job-card.component';
import { AppliedJobsPipe } from './pipes/applied-jobs.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AuthComponent,
    LoginComponent,
    SignupComponent,
    NavbarComponent,
    FooterComponent,
    ErrorComponent,
    manageJobs,
    JobFormComponent,
    JobComponent,
    UsersComponent,
    UserDetailComponent,
    ApplyJobComponent,
    JobCardComponent,
    AppliedJobsPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    {provide: ErrorHandler, useClass: ErrorHandlerService},
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
