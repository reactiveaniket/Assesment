import { Component, OnInit } from '@angular/core';
import {AppserviceService} from '../../service/appservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  searchText = '';
  userList = [];
  constructor(private appService: AppserviceService) { }

  ngOnInit() {
    const data = this.appService.getInitialUserList();
    this.userList = data.userList;
    this.searchText = data.searchTxt;
  }

  searchUser() {
    this.appService.getUserList(this.searchText).then((resp: any) => {
      console.log('List 1:', resp.data);
      this.userList = resp.data.items;
      console.log('List 2:', this.userList);
    }, err => {
      console.log('Error:', err);
    });
  }

}
