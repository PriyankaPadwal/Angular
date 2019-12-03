import { EvAl } from './ev-al';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cust-comp',
  templateUrl: './cust-comp.component.html',
  styleUrls: ['./cust-comp.component.css']
})
export class CustCompComponent implements OnInit {
   evAl :EvAl
  constructor() { }

  ngOnInit() {
  }
  captureAlert(evAl :EvAl){
    console.log(`Received event in parent ${evAl} `)
    this.evAl=evAl
  }

}
