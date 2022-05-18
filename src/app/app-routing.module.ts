import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './components/auth/auth.component';
import { LoginComponent } from './components/auth/login/login.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { ErrorComponent } from './components/error/error.component';
import { HomeComponent } from './components/home/home.component';
import { manageJobsComponent } from './components/jobs/jobs.component';
import { UsersComponent } from './components/users/users.component';
import { AuthguardService } from './services/authguard.service';
import { ApplyJobComponent } from './components/employeeJobs/apply-job/apply-job.component';

const routes: Routes= [
  {path: "", redirectTo: "home", pathMatch: "full"},
  {path: "managejobs", component: manageJobsComponent, canActivate: [AuthguardService]},
  {path:"auth", component: AuthComponent, 
    children:[
        {path: "", redirectTo: "login", pathMatch: "full"},
        {path: "login", component: LoginComponent},
        {path: "signup", component: SignupComponent},
        {path: "**", component: ErrorComponent}
      ]
  },
  {path:"applyJob", component: ApplyJobComponent, canActivate: [AuthguardService]},
  {path:"home", component: HomeComponent},
  {path: "users", component: UsersComponent, canActivate: [AuthguardService]},
  {path:"**", component: ErrorComponent},
]



@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
