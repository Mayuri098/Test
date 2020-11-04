import { Component, OnInit } from '@angular/core';
import { Router, Event, NavigationCancel, NavigationEnd, NavigationError, NavigationStart, } from '@angular/router';
import { environment } from 'src/environments/environment';
import * as $ from 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  term : any;
  startdate: HTMLInputElement;
  enddate: HTMLInputElement;
  userData : any;
  sector_id : any;
  sectors: any;

  sdate : Date;
  edate : Date;

  constructor(private route: Router) { }

  ngOnInit(): void {
    if(sessionStorage.getItem('StartDate') && sessionStorage.getItem('StartDate') != null){ 
      var sd = sessionStorage.getItem('StartDate')
      var ed = sessionStorage.getItem('EndDate')
    $.ajax({
      url: environment.URL_sectorwise_details,
      type: 'POST',
      dataType: 'json',
      data: {
        ApiKey : environment.ApiKey,
        StartDate : sd,
        EndDate : ed,
      }, 
      beforeSend: function(){
        $('#image').show();
      },
      complete: function(){
        $('#image').hide();
      },
      success: (data) => 
      {
        var json = JSON.parse(JSON.stringify(data));
        if (json.SectorwiseAssessorCertificationStatusCountData.StatusId == "1"){
          this.userData = json.SectorwiseAssessorCertificationStatusCountData.CertificationStatusData; 
          
        }
      },
      error: function (err) {
        console.log('error:' + err);
      },
    });

    }
  }

  clear(){
    $.ajax({
      url: environment.URL_logout_authentication,
      type: 'POST',
      dataType: 'json',
      data: {
        ApiKey : environment.ApiKey,
        UserId : localStorage.getItem("USerId"),
        SessionId : sessionStorage.getItem("SessionId"),
      }, 
      success: (data) => {
        var json = JSON.parse(JSON.stringify(data));
        localStorage.setItem(json.LogoutResponseData.Message, JSON.stringify(data));
        if (json.LogoutResponseData.Message == "User logged out")
        {
          sessionStorage.clear();
            this.route.navigate(['logout']);
        }
        else if(json.LogoutResponseData.Message =="User has already been logged out"){
          this.route.navigate(['login']);
        }
        else {
          document.getElementById('warning').innerHTML =
          '<b><h2>' +
          json.CandidateAssessmentAuthentication.Message +
          '</h2></b>';
        $('#login').css('display', 'block');
        $('#log-in').css('display', 'none');}
      },
      error: function (err) {
        console.log('error:' + err);
        $('#login').css('display', 'block');
        $('#log-in').css('display', 'none');
      },
    });
  }

  submit_date(){
    this.startdate = document.getElementById('sdate') as HTMLInputElement;
    this.enddate = document.getElementById('edate') as HTMLInputElement;
    if (this.startdate.value == '' || this.enddate.value == '') {
      window.alert("Enter Start and End date!")
    } else if (this.startdate && this.enddate) {
      sessionStorage.setItem('StartDate',this.startdate.value)
      sessionStorage.setItem('EndDate',this.enddate.value)
      this.sectorwise_details();
      }    

  }

  sectorwise_details(){
    var sd = sessionStorage.getItem('StartDate')
    var ed = sessionStorage.getItem('EndDate')
    $.ajax({
      url: environment.URL_sectorwise_details,
      type: 'POST',
      dataType: 'json',
      data: {
        ApiKey : environment.ApiKey,
        StartDate : sd,
        EndDate : ed,
      }, 

      beforeSend: function(){
        $('#image').show();
    },
    complete: function(){
      $('#image').hide();
    },


      success: (data) => 
      {
        var json = JSON.parse(JSON.stringify(data));
        if (json.SectorwiseAssessorCertificationStatusCountData.StatusId == "1"){
          this.userData = json.SectorwiseAssessorCertificationStatusCountData.CertificationStatusData; 
        }
      },
      error: function (err) {
        console.log('error:' + err);
      },
    });
  }
}
