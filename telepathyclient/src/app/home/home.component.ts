import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from '../../environments/environment';
//import { LoginService } from './login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor( 
    private route: ActivatedRoute,
    private router: Router
    //private _loginService: LoginService
    ) { 
  }

  ngOnInit() {
  }

  validateUser() {
    window.location.href = environment.baseUrl+"/auth/login/twitter";
  }

}
