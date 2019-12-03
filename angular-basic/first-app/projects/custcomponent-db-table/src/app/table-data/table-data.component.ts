import { TabRow } from './../data-domain';
import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-table-data',
  templateUrl: './table-data.component.html',
  styleUrls: ['./table-data.component.css']
})
export class TableDataComponent implements OnInit {
 
 @Input()
  rows: Array<TabRow>=new Array()
  
  @Output('delete')
  deleteRow :EventEmitter<TabRow>=new EventEmitter()
  constructor() { }

  ngOnInit() {
  }

  onDeleteRow(row:TabRow){
  console.log("delete row in table data",row)
 this.deleteRow.emit(row);
  }

}
