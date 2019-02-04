import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.less']
})
export class FollowersComponent implements OnInit {
  private chartData: Array<any>;
  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.generateData();
      // setInterval(() => this.generateData(), 3000);
    }, 1000);
  }

  generateData() {
    this.chartData = [];
    for (let i = 0; i < (8 + Math.floor(Math.random() * 10)); i++) {
      this.chartData.push([`Index ${i}`, Math.floor(Math.random() * 100)]);
    }
  }

}
