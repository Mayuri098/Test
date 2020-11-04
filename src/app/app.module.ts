import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HighchartsChartModule } from 'highcharts-angular';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';




import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
import { AuthService } from "./services/auth.service";
import { AuthGuard } from "./auth/auth.guard";
import { SuccessfulComponent } from './successful/successful.component';
import { JobRoleComponent } from './job-role/job-role.component';
import { BatchesComponent } from './batches/batches.component';
import { BillsComponent } from './bills/bills.component';
import { ReportsComponent } from './reports/reports.component';
import { AssessorDetailsComponent } from './assessor-details/assessor-details.component';
import { SuccessfulEmailSentComponent } from './successful-email-sent/successful-email-sent.component';
import { from } from 'rxjs';
import { ChangePasswordSuccessComponent } from './change-password-success/change-password-success.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    FooterComponent,
    LoginComponent,
    ForgotPasswordComponent,
    PopupComponent,
    PasswordResetComponent,
    ChangePasswordComponent,
    LogoutComponent,
    UpdateProfileComponent,
    SuccessfulComponent,
    JobRoleComponent,
    BatchesComponent,
    BillsComponent,
    ReportsComponent,
    AssessorDetailsComponent,
    SuccessfulEmailSentComponent,
    ChangePasswordSuccessComponent
  ],
  imports: [
    BrowserModule,  
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    BsDatepickerModule.forRoot(),
    BrowserAnimationsModule,

    NgxPaginationModule,
    Ng2SearchPipeModule,
    HighchartsChartModule,

   

  ],
  providers: [
    AuthService, 
    AuthGuard,
    //ChartModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
