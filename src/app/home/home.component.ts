import { Component, OnInit } from '@angular/core';
import { Router, Event, NavigationCancel, NavigationEnd, NavigationError, NavigationStart, } from '@angular/router';
import { environment } from 'src/environments/environment';
import * as $ from 'jquery';
import "datatables.net";
import { color } from 'highcharts';



var json_data: any;
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
  username : any;

  dtOptions: any = {};

  constructor(private route: Router) { }

  ngOnInit(): void {

    this.username = sessionStorage.getItem("username")
    $(function () {
      var table = $("#myTable").DataTable({
        lengthMenu: [5, 10, 15, 25, 50, 100],
        pageLength: 5,
        scrollY: "35vh",
        serverSide: false,
        scrollX: true,
        scrollCollapse: true,
        responsive: true,
        order: [1, "asc"],
        initComplete: function (settings, json) {
          json_data = json;
        },
        columnDefs: [
          {
            targets: ["_all"],
            className: "mdc-data-table__cell",
            render: function(data,type,row){
              var color = 'black';
              return '<span style="color:' + color + '">' + data + '</span>';
            }
          },
        ],
        ajax: {
          url: environment.URL_sectorwise_details,
          type: 'POST',
          dataType: 'json',
          data: {
            ApiKey : environment.ApiKey,
            UserId : sessionStorage.getItem("UserId"),
            UserRoleId : sessionStorage.getItem("UserroleId"),
          },
          dataSrc: "SectorwiseAssessorCertificationStatusCountData.CertificationStatusData",
          beforeSend: function(){
            $('#image').show();
          },
          complete: function(){
            $('#image').hide();
          },
        },

        columns: [
          { data: "SectorId" },


          { data: "SectorName" ,
            render: function (data: any, type: any, row: any, meta: any) {
                var a =
                '<a style="color: black" _ngcontent-kci-c162="" ng-reflect-router-link="/qp_wise_details" href="/qp_wise_details">' +
                row.SectorName +
                `</button>`;
              return a;
          },
          },


          { data: "GovernmentLeadCount",
          render: function (data: any, type: any, row: any, meta: any) {
            if (row.GovernmentLeadCount > 0) {
              var a =
                '<a style="color: black" _ngcontent-kci-c162="" ng-reflect-router-link="/assessor_certification_details" href="/assessor_certification_details">' +
                row.GovernmentLeadCount +
                `</button>`;
              return a;
            } else {
              return '<span style="color:black">' + data + '</span>';
            }
          },
        },


          { data: "GovernmentApprovedCount",
          render: function (data: any, type: any, row: any, meta: any) {
            if (row.GovernmentApprovedCount > 0) {
              var a =
                '<a style="color: black" _ngcontent-kci-c162="" ng-reflect-router-link="/assessor_certification_details" href="/assessor_certification_details">' +
                row.GovernmentApprovedCount +
                `</button>`;
              return a;
            } else {
              return '<span style="color:black">' + data + '</span>';
            }
          },
        },


          { data: "GovernmentCertifiedCount",
          render: function (data: any, type: any, row: any, meta: any) {
            if (row.GovernmentCertifiedCount > 0) {
              var a =
                '<a style="color: black" _ngcontent-kci-c162="" ng-reflect-router-link="/assessor_certification_details" href="/assessor_certification_details">' +
                row.GovernmentCertifiedCount +
                `</button>`;
              return a;
            } else {
              return '<span style="color:black">' + data + '</span>';
            }
          },
        },


          { data: "GovernmentExpiredCount",
          render: function (data: any, type: any, row: any, meta: any) {
            if (row.GovernmentExpiredCount > 0) {
              var a =
                '<a style="color: black" _ngcontent-kci-c162="" ng-reflect-router-link="/assessor_certification_details" href="/assessor_certification_details">' +
                row.GovernmentExpiredCount +
                `</button>`;
              return a;
            } else {
              return '<span style="color:black">' + data + '</span>';
            }
          },
        },


          { data: "GovernmentTotalCount",
          render: function (data: any, type: any, row: any, meta: any) {
            if (row.GovernmentTotalCount > 0) {
              var a =
                '<a style="color: black" _ngcontent-kci-c162="" ng-reflect-router-link="/assessor_certification_details" href="/assessor_certification_details">' +
                row.GovernmentTotalCount +
                `</button>`;
              return a;
            } else {
              return '<span style="color:black">' + data + '</span>';
            }
          },
        },


          { data: "GovernmentDistinctTotalCount",
          render: function (data: any, type: any, row: any, meta: any) {
            if (row.GovernmentDistinctTotalCount > 0) {
              var a =
                '<a style="color: black" _ngcontent-kci-c162="" ng-reflect-router-link="/assessor_certification_details" href="/assessor_certification_details">' +
                row.GovernmentDistinctTotalCount +
                `</button>`;
              return a;
            } else {
              return '<span style="color:black">' + data + '</span>';
            }
          },
        },

          { data: "InstitutionLeadCount",
          render: function (data: any, type: any, row: any, meta: any) {
            if (row.InstitutionLeadCount > 0) {
              var a =
                '<a style="color: black" _ngcontent-kci-c162="" ng-reflect-router-link="/assessor_certification_details" href="/assessor_certification_details">' +
                row.InstitutionLeadCount +
                `</button>`;
              return a;
            } else {
              return '<span style="color:black">' + data + '</span>';
            }
          },
        },


          { data: "InstitutionApprovedCount" ,
          render: function (data: any, type: any, row: any, meta: any) {
            if (row.InstitutionApprovedCount > 0) {
              var a =
                '<a style="color: black" _ngcontent-kci-c162="" ng-reflect-router-link="/assessor_certification_details" href="/assessor_certification_details">' +
                row.InstitutionApprovedCount +
                `</button>`;
              return a;
            } else {
              return '<span style="color:black">' + data + '</span>';
            }
          },
        },


          { data: "InstitutionCertifiedCount",
          render: function (data: any, type: any, row: any, meta: any) {
            if (row.InstitutionCertifiedCount > 0) {
              var a =
                '<a style="color: black" _ngcontent-kci-c162="" ng-reflect-router-link="/assessor_certification_details" href="/assessor_certification_details">' +
                row.InstitutionCertifiedCount +
                `</button>`;
              return a;
            } else {
              return '<span style="color:black">' + data + '</span>';
            }
          },
        },


          { data: "InstitutionTotalCount",
          render: function (data: any, type: any, row: any, meta: any) {
            if (row.InstitutionTotalCount > 0) {
              var a =
                '<a style="color: black" _ngcontent-kci-c162="" ng-reflect-router-link="/assessor_certification_details" href="/assessor_certification_details">' +
                row.InstitutionTotalCount +
                `</button>`;
              return a;
            } else {
              return '<span style="color:black">' + data + '</span>';
            }
          },
        },


          { data: "InstitutionDistinctTotalCount",
          render: function (data: any, type: any, row: any, meta: any) {
            if (row.InstitutionDistinctTotalCount > 0) {
              var a =
                '<a style="color: black" _ngcontent-kci-c162="" ng-reflect-router-link="/assessor_certification_details" href="/assessor_certification_details">' +
                row.InstitutionDistinctTotalCount +
                `</button>`;
              return a;
            } else {
              return '<span style="color:black">' + data + '</span>';
            }
          },
        },

          { data: "TotalCount",
          render: function (data: any, type: any, row: any, meta: any) {
            if (row.TotalCount > 0) {
              var a =
                '<a style="color: black" _ngcontent-kci-c162="" ng-reflect-router-link="/assessor_certification_details" href="/assessor_certification_details">' +
                row.TotalCount +
                `</button>`;
              return a;
            } else {
              return '<span style="color:black">' + data + '</span>';
            }
          },
        },


          { data: "DistinctTotalCount",
          render: function (data: any, type: any, row: any, meta: any) {
            if (row.DistinctTotalCount > 0) {
              var a =
                '<a style="color: black" _ngcontent-kci-c162="" ng-reflect-router-link="/assessor_certification_details" href="/assessor_certification_details">' +
                row.DistinctTotalCount +
                `</button>`;
              return a;
            } else {
              return '<span style="color:black">' + data + '</span>';
            }
          },
        },

        ]
      });
      $("#myTable").on("click", "tbody tr td", function () {
        var index1 = table.row(this).index();
        var index2 = table.column(this).index();
        sessionStorage.setItem(
          "SectorId",
          json_data.SectorwiseAssessorCertificationStatusCountData.CertificationStatusData[
            index1
          ].SectorId
        );
        sessionStorage.setItem('QPID', '0')
        if(index2 == 2){
          sessionStorage.setItem('SearchType', 'GLC')
        }
        if(index2 == 3){
          sessionStorage.setItem('SearchType', 'GAC')
        }
        if(index2 == 4){
          sessionStorage.setItem('SearchType', 'GCC')
        }
        if(index2 == 5){
          sessionStorage.setItem('SearchType', 'GEC')
        }
        if(index2 == 6){
          sessionStorage.setItem('SearchType', 'GTC')
        }
        if(index2 == 7){
          sessionStorage.setItem('SearchType', 'GDTC')
        }
        if(index2 == 8){
          sessionStorage.setItem('SearchType', 'ILC')
        }
        if(index2 == 9){
          sessionStorage.setItem('SearchType', 'IAC')
        }
        if(index2 == 10){
          sessionStorage.setItem('SearchType', 'ICC')
        }
        if(index2 == 11){
          sessionStorage.setItem('SearchType', 'ITC')
        }
        if(index2 == 12){
          sessionStorage.setItem('SearchType', 'IDTC')
        }
        if(index2 == 13){
          sessionStorage.setItem('SearchType', 'TC')
        }
        if(index2 == 14){
          sessionStorage.setItem('SearchType', 'DTC')
        }
      });

    });
    
  }



}
