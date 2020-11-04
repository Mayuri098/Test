import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';




@Component({
  selector: 'app-job-role',
  templateUrl: './job-role.component.html',
  styleUrls: ['./job-role.component.css']
})
export class JobRoleComponent implements OnInit {


  userData : any;

  constructor(private route: Router) { }

  ngOnInit() {
    let url1 = window.location.href.split('=');
    console.log(url1)
    var SecId = url1[url1.length-1]
    this.call_ajax(SecId)
  }

  call_ajax(SecId){
    $.ajax({
      url: environment.URL_QPwise_details,
      type: 'POST',
      dataType: 'json',
      data: {
        ApiKey : environment.ApiKey,
        SectorId : SecId,
        StartDate : sessionStorage.getItem('StartDate'),
        EndDate : sessionStorage.getItem('EndDate')
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
        if (json.QPwiseAssessorCertificationStatusCountData.StatusId == "1"){
          this.userData = json.QPwiseAssessorCertificationStatusCountData.CertificationStatusData;
        }
      },
      error: function (err) {
        console.log('error:' + err);
      },
    });
  }

  clear(){
    $.ajax({
      url: environment.URL_logout_authentication,
      type: 'POST',
      dataType: 'json',
      data: {
        UserId : localStorage.getItem("userid"),
        SessionId : sessionStorage.getItem("sessionid"),
      }, 
      success: (data) => {
        var json = JSON.parse(JSON.stringify(data));
        localStorage.setItem("Message",json.LogoutResponseData.Message);
        if (json.LogoutResponseData.Message == "")
        {
            this.route.navigate(['logout']);
        }else {
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

}
