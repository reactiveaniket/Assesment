import { Injectable } from '@angular/core';
import { HttpClient,HttpParams, HttpHeaders } from '@angular/common/http';
import {userListUrl, userDataUrl, GET_USERLIST, GET_SELECTED_USERDATA,BASE_URL} from '../constants/api';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AppserviceService {
  userList = [];
  userSearchTxt = '';

  constructor(private http: HttpClient, private cookie: CookieService) { }

  authorizeGithubUser() {
    return this.http.get(`${BASE_URL}/auth/authenticate`).toPromise().then((resp: any) => {
      console.log('Resp found:', resp);
      window.open(resp.url,"_self");
    }, err => {
      console.log('ERRR:', err);
    });
  }

  getInitialUserList() {
    return { userList: this.userList, searchTxt: this.userSearchTxt };
  }

  getUserList(search: string) {
    this.userSearchTxt = search;
    let params = new HttpParams();
    params = params.append('user', search );
    const headers = new HttpHeaders().set('Authorization', this.cookie.get('token'));
    return this.http.get(`${GET_USERLIST}`, { headers, params }).toPromise().then((resp: any) => {
      this.userList = resp.data.items;
      return resp;
    });
  }

  getUserData(username: string) {
    return this.http.get(`${userDataUrl}${username}`).toPromise();
  }
}
