import { Component, OnInit } from '@angular/core';
import * as  MyEventList from '../../../interface/MyEventList';
import * as  MyCalendarList  from '../../../interface/MyCalendarList';
import {
  CalendarEvent,
  
} from 'angular-calendar';
import { LibraryFiltersLayout } from '@project-sunbird/common-consumption-v8';
import * as MyEventLFilter from '../../../interface/MyEventLFilter'
const colors: any = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3',
  },
  blue: {
    primary: '#ad2121',
    secondary: '#FAE3E3',
  },
  yellow: {
    primary: '#ad2121',
    secondary: '#FAE3E3',
  },
};


@Component({
  selector: 'app-event-view-type',
  templateUrl: './event-view-type.component.html',
  styleUrls: ['./event-view-type.component.scss']
})
export class EventViewTypeComponent implements OnInit {
  public filterLayout = LibraryFiltersLayout;
  tab: string = "list";
  eventList : any;
  events: CalendarEvent[];
  eventCalender:any;
  allValues = ['ListView','Calender'];
  filterConfig: any;
  myEvents: any;
              
              
  constructor() { }

  ngOnInit() {
     console.log("allvalues",this.allValues);
    // this.eventtype();

    this.showEventListPage(MyEventList);
    this.showFilters(MyEventLFilter);
    this.showCalenderEvent(MyCalendarList);
  }

  eventtype($event){
    console.log($event);
  if($event.data.text=='ListView'){
    this.tab = 'list';
  }
  else {
    this.tab = 'calender';
  }
  }


  Openview(view) {
    
    if (view == 'list') {
      
    } 
     else if (view == 'calender') {
      
      //this.router.navigate(['/calender']);
     }

     

     //this.eventList = MyEventListData.MyEventList.result.events;

  }

  showEventListPage(MyEventListData){
    // this.eventListService.getEventList().subscribe((data:any)=>{
    //    console.log("listdata = ", data.result.events);
    //   this.eventList = data.result.events;
    //   this.isLoading = false;

    // })
    this.eventList = MyEventListData.MyEventList.result.events;
    this.myEvents= MyEventListData.MyEventList.result.events;
    
    console.log("1",this.eventList);
  }


  showCalenderEvent(MyCalendarData) {
    // this.eventListService.getCalenderlist().subscribe((data: any) => {
      
      console.log("data = ");
      this.eventCalender = MyCalendarData.MyCalendarList.result.content;
      console.log("2",this.eventCalender );
      console.log(this.eventCalender)
      this.events = this.eventCalender.map(obj => ({

        start: new Date(obj.startDate),
        title: obj.name,
        starttime: obj.startTime,
        end: new Date(obj.endDate),
        color: colors.red,
        cssClass: obj.color,
        status: obj.status,
        onlineProvider: obj.onlineProvider,
        audience: obj.audience,
        owner: obj.owner,
        identifier: "do_11322182566085427211",




      }));

      console.log("after =>", this.events);

    // })
  }
  showFilters(myEventLFilter) {
    //   this.eventFilterService.getFilterFormConfig().subscribe((data: any) => {
    //     this.filterConfig = data.result['form'].data.fields;
    //     this.isLoading = false;
  
    //     console.log('eventfilters = ',data.result['form'].data.fields);
    //   },
    //   (err: any) => {
    //     console.log('err = ', err);
    //   });
    console.log(myEventLFilter.myEventFilter);
    this.filterConfig = MyEventLFilter.myEventFilter.result['form'].data.fields;
    }
  
}
