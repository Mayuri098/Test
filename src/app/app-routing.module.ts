import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { PopupComponent } from './popup/popup.component';
import { PasswordResetComponent } from './password-reset/password-reset.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { LogoutComponent } from './logout/logout.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { AuthGuard } from './auth/auth.guard';
import { AuthGuardService } from "./services/auth-guard.service";
import { SuccessfulComponent } from './successful/successful.component';
import { JobRoleComponent } from './job-role/job-role.component';
import { BatchesComponent } from './batches/batches.component';
import { BillsComponent } from './bills/bills.component';
import { ReportsComponent } from './reports/reports.component';
import { AssessorDetailsComponent } from './assessor-details/assessor-details.component';
import { SuccessfulEmailSentComponent } from './successful-email-sent/successful-email-sent.component';
import { ChangePasswordSuccessComponent } from './change-password-success/change-password-success.component';
import { TodaysBatchesComponent } from './todays-batches/todays-batches.component';
import { PassedBatchesComponent } from './passed-batches/passed-batches.component';
import { UpcomingBatchesComponent } from './upcoming-batches/upcoming-batches.component';
import { TestComponent } from './test/test.component';




const routes: Routes = [
  {path : 'test', component:TestComponent},




  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {path : 'home', component:HomeComponent, canActivate:[AuthGuard]},
  {path : 'qp_wise_details', component: JobRoleComponent, canActivate:[AuthGuard]},
  {path : 'qp_wise_details/:id', component: JobRoleComponent, canActivate:[AuthGuard]},
  {path : 'assessor_certification_details', component: AssessorDetailsComponent, canActivate:[AuthGuard]},
  {path : 'assessor_certification_details/:id/:qp_id/:searchType', component: AssessorDetailsComponent, canActivate:[AuthGuard]},


  {path : 'nav', component:NavComponent},
  {path : 'footer', component:FooterComponent},
  {path : 'login', component:LoginComponent},
  {path : 'forgotpassword', component:ForgotPasswordComponent},
  {path : 'popup', component:PopupComponent},
  {path : 'passwordreset', component:PasswordResetComponent},
  {path : 'passwordreset/:id', component:PasswordResetComponent,},
  {path : 'changepassword', component:ChangePasswordComponent,canActivate:[AuthGuard]},
  {path : 'logout', component:LogoutComponent, canActivate:[AuthGuard]},
  {path : 'updateprofile', component: UpdateProfileComponent, canActivate:[AuthGuard]},
  {path : 'successful', component: SuccessfulComponent, },
  
  {path : 'email_sent_successfully', component: SuccessfulEmailSentComponent, },
  {path : 'password_changed_successfully', component: ChangePasswordSuccessComponent, },



  {path : 'batches', component: BatchesComponent, children: [
    {path : 'todays_batches', component: TodaysBatchesComponent},
    {path : 'passed_batches', component: PassedBatchesComponent},
    {path : 'upcoming_batches', component: UpcomingBatchesComponent},
  ]},

  
  {path : 'bills', component: BillsComponent, },
  {path : 'reports', component: ReportsComponent, },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
