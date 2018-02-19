import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class CenterService {

  constructor(private _http: HttpClient,
  	private _authService: AuthService) { }
  
   getTimeLine() {
    return this._http.get(environment.baseUrl+"/twitter/getTimeline?tokenSecret="+this._authService.getToken("tokenSecret")+"&token="+this._authService.getToken("token"));
  }

  doTweet(tweetMsg) {
  	return this._http.post(environment.baseUrl+"/twitter/postTweet", {
  		tweetMsg: tweetMsg,
  		tokenSecret : this._authService.getToken("tokenSecret"),
		token : this._authService.getToken("token")
  	});
  }

}
