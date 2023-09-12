import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { AllStudentsComponent } from './all-students/all-students.component';
import { authenticationGuard } from './authentication.guard';
import { StudentDetailsComponent } from './student-details/student-details.component';

const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"dashboard", component:DashboardComponent, canActivate:[authenticationGuard], children:[
    {path:"home", component:HomeComponent},
    {path:"createStudent", component:CreateStudentComponent},
    {path:"allStudents", component:AllStudentsComponent},
    {path:"studentDetails", component:StudentDetailsComponent},
    {path:"", component:HomeComponent}
  ]},
  
  {path:"",component:LoginComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

  

}
