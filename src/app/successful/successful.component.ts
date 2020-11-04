import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-successful',
  templateUrl: './successful.component.html',
  styleUrls: ['./successful.component.css']
})
export class SuccessfulComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  backtologin(){
    this.route.navigate(['login']);
  }

}
