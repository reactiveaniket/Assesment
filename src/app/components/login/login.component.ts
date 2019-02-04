import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AppserviceService} from '../../service/appservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  model: any = {};
  submitted = false;

  constructor(private router: Router, private appService: AppserviceService) { }

  ngOnInit() {
  }

  validate() {
    
  }
  loginWithGithun(){
    this.submitted = true;
    console.log('VALS:', this.model);
    this.appService.authorizeGithubUser();
  }

}
