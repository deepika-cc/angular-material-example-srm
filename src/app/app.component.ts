// import { Component } from '@angular/core';
import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'srm-angular-material';
  tabIndex = 0 ;
  changeTab(event){
    this.tabIndex = event.index;
 }
}


