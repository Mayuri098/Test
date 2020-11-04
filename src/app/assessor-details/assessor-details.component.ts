import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import * as Highcharts from 'highcharts'

@Component({
  selector: 'app-assessor-details',
  templateUrl: './assessor-details.component.html',
  styleUrls: ['./assessor-details.component.css']
})
export class AssessorDetailsComponent implements OnInit {

  term : any;
  chartOptions = {};
  counter = 0;
  Highcharts = Highcharts;
  stateData : any;
  assessorData : any;
  data:any;
  state_id:any;
  state_name:any;
  assessor_count:any;


  page:number = 1;
  totalRecords:number


  chart_data =  [];
  constructor(private route: Router) { }
  ngOnInit(){

    /** Calling API to get assessor certification details */
    let  url =  new URL(window.location.href)
    var SecId = url.searchParams.get('sec_id');
    var qp_Id = url.searchParams.get('qp_id');
    var SearchType = url.searchParams.get('searchType');
    this.call_ajax(SecId, qp_Id, SearchType)
  }

  call_ajax(SecId, qp_Id, SearchType){
    $.ajax({
      url: environment.URL_assessor_cert_details,
      type: 'POST',
      dataType: 'json',
      data: {
        ApiKey : environment.ApiKey,
        SectorId : SecId,
        QualificationPackId : qp_Id,
        SearchType : SearchType,
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
        if (json.AssessorCertificationDetailedData.StatusId == "1"){
          this.assessorData = json.AssessorCertificationDetailedData.AssessorData;
          this.stateData = json.AssessorCertificationDetailedData.StatewiseAssessorData;
          this.totalRecords = this.assessorData.length
        }
      },
      error: function (err) {
        console.log('error:' + err);
      },
    });

  }

  on_key(){
    var input, filter,cell, table, th,tr, td, i, txtValue;
  input = document.getElementById("search");
  filter = input.value.toUpperCase();
  table = document.getElementById("dt");
  tr = table.getElementsByTagName("tr");
  td = table.getElementsByTagName("td");
  for (i = 1; i < tr.length; i++) {
    // Hide the row initially.
    tr[i].style.display = "none";

    td = tr[i].getElementsByTagName("td");
    for (var j = 0; j < td.length; j++) {
      cell = tr[i].getElementsByTagName("td")[j];
      if (cell) {
        if (cell.innerText.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
          break;
        } 
      }
    }
}
}


  /** Graphical details of the assessor based on geography */
  create_chart(chart_data){
    this.chartOptions = {
      chart: {
        height:'100%',  
        backgroundColor: 'transparent',
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie',
        style: {
          fontFamily: 'serif',
          fontColor : 'white',
          marginTop : 'auto'
      }
    },
    title: {
        text: 'Geographywise Assessor Details ',
        floating: true,
        style: {
          color : 'white',
      }
    },
    tooltip: {
        pointFormat: 'Number of Assessors : {point.y}'
    },
    plotOptions: {
        pie: {
          size:'70%',
          height: '70%',
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                style: {
                    color: 'white',
                }
            },
        }
    },
    series: [
      {
          data: chart_data
      }
    ]
  }

  }


  pageChanged(event){
    this.page = event;
  }

  toggle1(){
    $('.toggle1').css('display', 'none');
    $('.toggle2').css('display', 'block'); 
  }
  toggle2(){
    $('.toggle2').css('display', 'none');
    $('.toggle1').css('display', 'block');
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
