import { TabRow } from './../data-domain';
import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-table-data',
  templateUrl: './table-data.component.html',
  styleUrls: ['./table-data.component.css']
})
export class TableDataComponent implements OnInit {
 
 @Input()
  rows: Array<TabRow>=new Array()

  addObj:TabRow

  @Output()
   addArrayElt = new EventEmitter<TabRow>();

  @ViewChild('txtid',{static:false}) 
  txtid: ElementRef;
  @ViewChild('txtitem',{static:false}) 
  txtitem: ElementRef;
  @ViewChild('txtqty',{static:false})
  txtqty: ElementRef;
   @ViewChild('txtprice',{static:false})
   txtprice: ElementRef;
  
  @Output('delete')
  deleteRow :EventEmitter<TabRow>=new EventEmitter()

  constructor() { }

  ngOnInit() {
   
  }

  onDeleteRow(row:TabRow){
  console.log("delete row in table data",row)
 this.deleteRow.emit(row);
  }

 

  addData(){ 
    //console.log(this.txtid.nativeElement.value,'...........milali value');
  this.addObj=({
  id:parseInt(this.txtid.nativeElement.value),
  item:this.txtitem.nativeElement.value,
  qty:parseInt(this.txtqty.nativeElement.value),
  price:parseInt(this.txtprice.nativeElement.value)
  })
  this.addArrayElt.emit(this.addObj);
  }
}
