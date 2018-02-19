import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { UtilityService } from '../common/utility.service';


import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
	
  constructor(
    private router: Router, 
    private authService: AuthService,
    private utilityService: UtilityService) {}
  
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
  	console.log("In AuthGuard canActivate");
  	this.authService.checkAuth().subscribe((data:any[]) => {
      console.log(data)
      if (data && data['twitterId']) {
        this.authService.setToken("userId", data['_id']);
        this.authService.setToken("token", data['token']);
        this.authService.setToken("tokenSecret", data['tokenSecret']);
        this.router.navigate(['/home']);
      } else {
        this.router.navigate(['/login']);
      }
    });
  	
    return false;
  }
}
