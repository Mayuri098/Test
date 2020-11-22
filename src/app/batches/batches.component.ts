import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-batches',
  templateUrl: './batches.component.html',
  styleUrls: ['./batches.component.css']
})
export class BatchesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $('#myTable').dataTable();
  }

  openNav(){
    
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("banner").style.marginLeft = "250px";
    
  }

  closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("banner").style.marginLeft= "0";
  }
}


