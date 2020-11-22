import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todays-batches',
  templateUrl: './todays-batches.component.html',
  styleUrls: ['./todays-batches.component.css']
})
export class TodaysBatchesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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
