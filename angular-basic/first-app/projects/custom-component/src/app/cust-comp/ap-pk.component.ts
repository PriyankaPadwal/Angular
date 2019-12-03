import { EvAl } from './ev-al';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-ap-pk',
  templateUrl: './ap-pk.component.html',
  styleUrls: ['./ap-pk.component.css']
})
export class ApPkComponent implements OnInit {
@Output()
  picked : EventEmitter<EvAl> =new EventEmitter()

  constructor() { }

  ngOnInit() {
  }
  
onPick(al: string){
let evAl :EvAl={
  al:al
}
this.picked.emit(evAl)
}

}
