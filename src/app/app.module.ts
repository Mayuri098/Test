import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HighchartsChartModule } from 'highcharts-angular';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ExcelService } from './service/excel.service';
import { DataTablesModule } from 'angular-datatables';








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
import { BarComponent } from './bar/bar.component';
import { PieComponent } from './pie/pie.component';
import { ModalComponent } from './modal/modal.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { PassedBatchesComponent } from './passed-batches/passed-batches.component';
import { UpcomingBatchesComponent } from './upcoming-batches/upcoming-batches.component';
import { TodaysBatchesComponent } from './todays-batches/todays-batches.component';
import { TestComponent } from './test/test.component';


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
    ChangePasswordSuccessComponent,
    BarComponent,
    PieComponent,
    ModalComponent,
    NavbarComponent,
    HeaderComponent,
    PassedBatchesComponent,
    UpcomingBatchesComponent,
    TodaysBatchesComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,  
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    ModalModule.forRoot(),
    BsDatepickerModule.forRoot(),
    BrowserAnimationsModule,

    NgxPaginationModule,
    Ng2SearchPipeModule,
    HighchartsChartModule,
    DataTablesModule

   

  ],
  providers: [
    AuthService, 
    AuthGuard,
    ExcelService
    //ChartModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
