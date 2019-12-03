import { EvAl } from './ev-al';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ap-mn',
  templateUrl: './ap-mn.component.html',
  styleUrls: ['./ap-mn.component.css']
})
export class ApMnComponent implements OnInit {
  
  @Input()
  al :EvAl
  
  constructor() { }

  ngOnInit() {
  }
}
