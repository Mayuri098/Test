import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import * as $ from 'jquery';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
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

}
