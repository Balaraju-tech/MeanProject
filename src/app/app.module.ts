import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
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
import { manageJobsComponent } from './components/jobs/jobs.component';
import { JobFormComponent } from './components/jobs/admin-job-form/job-form.component';
import { JobComponent } from './components/jobs/adminJobs/job.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UsersComponent } from './components/users/users.component';
import { UserDetailComponent } from './components/users/user-detail/user-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ErrorHandlerService } from './services/error-handler.service';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { ApplyJobComponent } from './components/employeeJobs/apply-job/apply-job.component';
import { JobCardComponent } from './components/employeeJobs/apply-job/job-card/job-card.component';
import { AppliedJobsPipe } from './pipes/applied-jobs.pipe';
import { StoreModule } from '@ngrx/store';
import { appReducer } from './state/app.state';
import { EffectsModule } from '@ngrx/effects';
import { jobsEffect } from './state/jobs/jobs.effects';
import { usersEffect } from './state/users/users.effects';

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
    manageJobsComponent,
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
    FormsModule,
    StoreModule.forRoot(appReducer),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
    }),
    EffectsModule.forRoot([jobsEffect, usersEffect])
  ],
  providers: [
    {provide: ErrorHandler, useClass: ErrorHandlerService},
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
