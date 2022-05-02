import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  openned = false;

  constructor() { }

  ngOnInit(): void {
  }

  log(state: any){
    console.log(state);
  }
  
  

}
