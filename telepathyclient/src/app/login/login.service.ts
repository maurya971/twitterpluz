import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable()
export class LoginService {

  constructor(private _http: HttpClient) { }

  doLogin() {
  	return this._http.post(environment.baseUrl+"/login", {
  		username : "maurya",
		password : "ass",
		clientId : "1"
  	});
  }

}
