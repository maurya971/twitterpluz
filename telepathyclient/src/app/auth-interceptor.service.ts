import { Injectable } from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {

  constructor() { 
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
	    //const authHeader = 'Bearer ' + localStorageService.get('token');
	    const authHeader = "testing_header";
	    // Clone the request to add the new header.
	    const authReq = req.clone({headers: req.headers.set('Authorization', "adfs")});
	    // Pass on the cloned request instead of the original request.
	    return next.handle(authReq);
  }

}
