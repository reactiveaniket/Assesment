import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { UserDetailComponent } from './components/home/user-detail/user-detail.component';
import { FollowersComponent } from './components/followers/followers.component';
import { BarChartComponent } from './components/common/bar-chart/bar-chart.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { LoaderComponent } from './components/common/loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    UserDetailComponent,
    FollowersComponent,
    BarChartComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxChartsModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }