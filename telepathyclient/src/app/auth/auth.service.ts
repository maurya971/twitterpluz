//https://medium.com/@amcdnl/authentication-in-angular-jwt-c1067495c5e0

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable()
export class AuthService {

	constructor(private _http: HttpClient) { }

 getToken(name: string): string {
    return localStorage.getItem(name);
  }

  setToken(name: string, token: string): void {
    localStorage.setItem(name, token);
  }
  
  checkAuth() {
    return this._http.get(environment.baseUrl+"/auth/isAuthenticated");
  }

  getUserId(): String {
  	let userId = this.getToken("userId");
    
    return userId;
  }


}
