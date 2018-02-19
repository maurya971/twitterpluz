import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { LeftService } from './left.service';
import { UtilityService } from '../common/utility.service';

@Component({
  selector: 'app-left',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.css']
})
export class LeftComponent implements OnInit {
   _userDetail;
  _vizzplusGlobals = {};
  constructor( 
    private route: ActivatedRoute,
    private router: Router,
    private _leftService: LeftService,
    private _utilityService: UtilityService
    ) { 
  }

  ngOnInit() {
    this._userDetail = this._utilityService.getUserDetail();
    this._userDetail.subscribe(data => {
      if (data && data['success'] && data['data']) {
        this._utilityService.setUserDetail(data['data']);
        this._userDetail = data['data'];
      } else {
        this._utilityService.redirectToLogin();
      }
    })
  }

}
