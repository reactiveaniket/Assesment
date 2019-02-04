import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {AppserviceService} from '../../../service/appservice.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.less']
})
export class UserDetailComponent implements OnInit {
  user = {};
  constructor(private route: ActivatedRoute, private appService: AppserviceService) { }

  ngOnInit() {
    const routeParams: any = this.route.params;
    // console.log('Get params:', this.route, routeParams.value.name);
    this.appService.getUserData(routeParams.value.name).then(resp => {
      console.log('User Details:', resp);
      this.user = resp;
    }, err => {
      console.log('Error:', err);
    });
  }

}
