import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './components/auth/auth.component';
import { LoginComponent } from './components/auth/login/login.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { ErrorComponent } from './components/error/error.component';
import { HomeComponent } from './components/home/home.component';
import { JobsComponent } from './components/jobs/jobs.component';
import { UsersComponent } from './components/users/users.component';
import { AuthserviceService } from './authservice.service';
import { AuthguardService } from './authguard.service';

const routes: Routes= [
  {path: "", redirectTo: "home", pathMatch: "full"},
  {path: "jobs", component: JobsComponent},
  {path:"auth", component: AuthComponent, 
    children:[
        {path: "", redirectTo: "login", pathMatch: "full"},
        {path: "login", component: LoginComponent},
        {path: "signup", component: SignupComponent},
        {path: "**", component: ErrorComponent}
      ]
  },
  {path:"home", component: HomeComponent},
  {path: "users", component: UsersComponent},
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
