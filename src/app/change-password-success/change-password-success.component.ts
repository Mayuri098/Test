import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-change-password-success',
  templateUrl: './change-password-success.component.html',
  styleUrls: ['./change-password-success.component.css']
})
export class ChangePasswordSuccessComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  backtohome(){
    this.route.navigate(['home']);
  }

}
