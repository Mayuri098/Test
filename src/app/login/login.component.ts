import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit 
{
  username: HTMLInputElement;
  password: HTMLInputElement;
  isnum : any;

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  test() {
    $('#login').css('display', 'none');
    $('#log-in').css('display', 'block');
    this.username = document.getElementById('username') as HTMLInputElement;
    this.password = document.getElementById('pwd') as HTMLInputElement;
    if (this.username.value == '' || this.password.value == '') {
      document.getElementById('warning').innerHTML =
        '<b> <h2>' + 'Login Id and password field are required' + '</h2></b>';
      $('#login').css('display', 'block');
      $('#log-in').css('display', 'none');
    } else if (this.username && this.password) {
      sessionStorage.setItem("username",this.username.value);
      sessionStorage.setItem("password",this.password.value);

      if(/^\d+$/.test(this.username.value) == true){
        this.candidate_login();
      }    
      else if(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(this.username.value)){
        this.user_login();
      }
      else{
        window.alert("Invalid username");
      }
    }
  }
  candidate_login()
  {
    $.ajax({
      url: environment.URL_authentication,
      type: 'POST',
      dataType: 'json',
      data: {
        apiKey: environment.api_key,
        RegistrationId: this.username.value,
        password: localStorage.getItem(this.username.value),
      },
      success: (data) => {
        var json = JSON.parse(JSON.stringify(data));
        localStorage.setItem(json.CandidateAssessmentAuthentication.CandidateId, JSON.stringify(data));
        if (json.CandidateAssessmentAuthentication.Message == 'SUCCESS')
        {
            this.route.navigate(['home']);
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
  user_login(){
    $.ajax({
      url: environment.URL_authentication_email,
      type: 'POST',
      dataType: 'json',
      data: {
        ApiKey : environment.ApiKey,
        LoginId: this.username.value,
        password: this.password.value,
        ClientIpAddress : environment.ClientIP,
        ClientBrowser : environment.ClientBrowser,
      },
      success: (data) => {
        var json = JSON.parse(JSON.stringify(data));
        localStorage.setItem("USerId",json.AuthenticationResponseData.UserId);
        sessionStorage.setItem("UserId",json.AuthenticationResponseData.UserId);
        sessionStorage.setItem("SessionId",json.AuthenticationResponseData.SessionId);

        if (json.AuthenticationResponseData.Message == 'User authentication success')
        {
            this.route.navigate(['home']);
        }else {
          document.getElementById('warning').innerHTML =
          '<b><h2>' +
          json.AuthenticationResponseData.Message +
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
