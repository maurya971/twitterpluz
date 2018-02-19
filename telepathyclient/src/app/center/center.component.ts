import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { environment } from '../../environments/environment';
import { CenterService } from './center.service';

@Component({
  selector: 'app-center',
  templateUrl: './center.component.html',
  styleUrls: ['./center.component.css']
})
export class CenterComponent implements OnInit {
  twits = [];
  tweetForm;

  //
  _refreshTweet = function() {
        this._centerService.getTimeLine().subscribe(data => {
        if (data && data['success'] && data['data']) {
        this.twits = data['data'];
      } else {
        //this._utilityService.redirectToLogin();
      }
    });
  }

  constructor( 
    private route: ActivatedRoute,
    private router: Router,
    private _centerService: CenterService
    ) { 
  }

  ngOnInit() {
    this.tweetForm = new FormGroup({
      tweetMsg: new FormControl("", [Validators.required, Validators.maxLength(280)])
    });
    this._refreshTweet();

  }

  /**
  Post tweet
  */
  doTweet(data) {
    console.log("Twitting....");
    console.log(data);
    if (data && data.tweetMsg && data.tweetMsg.length > 0) {
        this._centerService.doTweet(data.tweetMsg).subscribe(data => {
          debugger;
          if (data && data['success'] && data['data']) {
            this.tweetForm.reset();
             this._refreshTweet();
          }
        });
    }

  }
}
