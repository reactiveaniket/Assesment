import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AppserviceService} from '../../service/appservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  user: any = {};
  submitted = false;

  constructor(private router: Router, private appService: AppserviceService) { }

  ngOnInit() {
  }

  validate() {
    console.log('VALS:', this.user);
    this.appService.validateUser(this.user);
  }
  loginWithGithub(){
    this.submitted = true;
    
    this.appService.authorizeGithubUser();
  }

}
