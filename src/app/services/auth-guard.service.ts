import { Injectable,Inject, Injector } from '@angular/core';
import { AuthService } from './auth.service';
import { LoginComponent } from '../login/login.component';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private authService: AuthService, inj: Injector,
    private router: Router) { 
    }
    canActivate() {
        console.log("AlwaysAuthGuard");
        return true;
      }
    
}
