import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Home} from './home/home';
import {Login} from './login/login';
import {Students} from './students/students';
import {Payments} from './payments/payments';
import {Profile} from './profile/profile';
import {Dashboard} from './dashboard/dashboard';
import {LoadPayments} from './load-payments/load-payments';
import {AdminTemplate} from './admin-template/admin-template';
import {LoadStudents} from './load-students/load-students';
import {AuthGuard} from './guards/auth-guard';
import {AuthorizationGuard} from './guards/authorization-guard';
import {StudentDetails} from './student-details/student-details';
import {NewPayment} from './new-payment/new-payment';

const routes: Routes = [
  {path: "", component: Login},
  {path: "login", component: Login},
  {path: "admin", component: AdminTemplate,
    canActivate: [AuthGuard],
    children: [
      {path: "home", component: Home},
      {path: "profile", component: Profile},
      {path: "dashboard", component: Dashboard},
      {path: "students", component: Students},
      {path: "payments", component: Payments},
      {path: "loadPayments", component: LoadPayments},
      {path: "loadStudents", component: LoadStudents,
         canActivate: [AuthorizationGuard],data: {role: ['ADMIN']}},
      {path: "new-payment/:code", component: NewPayment},
      {path: "student-details/:code", component: StudentDetails},
    ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
