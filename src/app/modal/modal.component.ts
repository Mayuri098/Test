import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import 'DataTables.net';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  title;
  totalRecords:number
  assessorData : any;
  page:number = 1;
  term : any;
  constructor(private route: Router) { }




  ngOnInit(): void {

    $('#example').DataTable({
      "scrollX" : true,
      searching: false, paging: false, info: false,
      columnDefs: [
        { targets: 0, type: 'html' },
     ]
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

}
