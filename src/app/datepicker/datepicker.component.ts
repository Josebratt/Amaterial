import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.css']
})
export class DatepickerComponent implements OnInit {

  minDate = new Date();
  maxDate = new Date(2019, 3, 10);

  constructor() { }

  ngOnInit(): void {
  }

  dateFilter = (date: any) => {
    const day = date.getDay();
    return day !== 0 && day !== 6;
  }

}
