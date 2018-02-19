import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { ActivatedRoute, Router } from '@angular/router';

import { AuthService } from '../auth/auth.service';

@Injectable()
export class UtilityService {

  private _userDetail;

  constructor(
  		private _http: HttpClient,
  		private _authService: AuthService,
      private route: ActivatedRoute,
      private router: Router) { }

  loadUserDetail() {

  	let userId:String = this._authService.getUserId();

  	return this._http.get(environment.baseUrl+"/user/getDetails?id="+userId);
  }
  
  /*
    Return userDetail if it is loaded, otherwise call loadUserDetail to load userDetail
  */
  getUserDetail() {
  	if (this._userDetail) {
  		return this._userDetail;
  	}
  	return this.loadUserDetail();
  }

  /*
    Set UseDetail to make it available in applicaion 
  */
  setUserDetail(userDetail) {
    if (userDetail) {
      this._userDetail = userDetail;
    }
  }

  /*
  Throw back user to login page if something is wrong
  */
  redirectToLogin() {
    this.router.navigate(['/login']);
  }
}
