import { keyframes } from '@angular/animations';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { LoginComponent } from '../login/login.component';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private authService: AuthService) {}

  isLoggedIn(): boolean{
    return false;
  }


}
