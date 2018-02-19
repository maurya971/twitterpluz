import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from '../../environments/environment';
//import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor( 
    private route: ActivatedRoute,
    private router: Router
    ) { 
  }

  ngOnInit() {
  }

  validateUser() {
    window.location.href = environment.baseUrl+"/auth/login/twitter";
  }

}
