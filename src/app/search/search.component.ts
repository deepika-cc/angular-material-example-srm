import { Component, OnInit, ViewChild, Output, EventEmitter, Renderer2, OnDestroy } from '@angular/core';
import { MatCalendar } from '@angular/material';
import * as moment from 'moment';
import { Moment } from 'moment';
// import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { Subscription } from 'rxjs';


  interface Food {
    value: string;
    viewValue: string;
  }

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {

  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];
  
  @Output()
  dateSelected: EventEmitter<Moment> = new EventEmitter();
 
  @Output()
  selectedDate = moment();
 
  @ViewChild('calendar',{static:true})
  calendar: MatCalendar<Moment>;
  mediaSub: Subscription;
  deviceXs: boolean;
  name: any;
  constructor(private renderer: Renderer2) { }
  // ,private mediaObserver: MediaObserver
  ngOnInit() {
    // this.mediaSub = this.mediaObserver.media$.subscribe(
    //   (result: MediaChange) => {
    //     console.log("result:",result.mqAlias);
    //     this.deviceXs = result.mqAlias === 'xs' ? true : false;
    //   }
    // );
  }
  ngOnDestroy(){
    // this.mediaSub.unsubscribe();
  }
  // monthSelected(date) {
  //   alert(`Selected: ${date}`);
  // }

  ngAfterViewInit() {
    // const buttons = document.querySelectorAll('.mat-calendar-previous-button, .mat-calendar-next-button');
 
    // if (buttons) {
    //   Array.from(buttons).forEach(button => {
    //     this.renderer.listen(button, 'click', () => {
    //       console.log('Arrow buttons clicked');
    //     });
    //   });
    // }
  }
 
  monthSelected(date: Moment) {
    console.log('month changed');
  }
 
  dateChanged() {
    console.log("selected date:",this.selectedDate)
    this.calendar.activeDate = this.selectedDate;
    this.dateSelected.emit(this.selectedDate);
    // console.log(event);
    // // this.selectedDate= event;
  }
 
  prevDay() {
    const prevMoment = moment(this.selectedDate).add(-1, 'days');
    this.selectedDate = prevMoment;
    this.dateChanged();
  }
 
  today() {
    this.selectedDate = moment();
    this.dateChanged();
  }
 
  nextDay() {
    const nextMoment = moment(this.selectedDate).add(1, 'days');
    this.selectedDate = nextMoment;
    this.dateChanged();
  }

}
