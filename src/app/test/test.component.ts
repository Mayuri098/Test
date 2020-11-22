import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { environment } from "src/environments/environment";
import * as $ from "jquery";
import "datatables.net";
import { MdbBtnDirective } from "angular-bootstrap-md";
import { rejects } from "assert";

var json_data: any;

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor() { }

  userData : any;
  sector_id : any;
  sectors: any;
  username : any;
  dtOptions: any = {};


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
          { data: "SectorName" },
          { data: "GovernmentLeadCount" },
          { data: "GovernmentApprovedCount" },
          { data: "GovernmentCertifiedCount" },
          { data: "GovernmentExpiredCount" },
          { data: "GovernmentTotalCount" },
          { data: "GovernmentDistinctTotalCount" },
          { data: "InstitutionLeadCount" },
          { data: "InstitutionApprovedCount" },
          { data: "InstitutionCertifiedCount" },
          { data: "InstitutionTotalCount" },
          { data: "InstitutionDistinctTotalCount" },
          { data: "TotalCount" },
          { data: "DistinctTotalCount" },

        ]
      });
    })
  }


}
