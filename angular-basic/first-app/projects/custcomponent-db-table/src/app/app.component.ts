import { TabRow } from './data-domain';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'custcomponent-db-table';
  data=new Array();

  deletedRow: TabRow
  
  
 fetchData(){
   this.data.push({id:1, item:'pc', qty:3, price:20000})
   this.data.push({id:2, item:'laptop', qty:3, price:20000})
  this.data.push({id:3, item:'mouse', qty:3, price:20000})
  this.data.push({id:4, item:'keyboard', qty:3, price:20000})
 }

 
 ondelete(row:TabRow){
   console.log("on delete call...........",row)
  
   this.deletedRow=row
   
  //  for each loop 
  this.data.forEach((dt,index) => {
    if(dt.id===row.id){
      this.data.splice(index,1);
    }
  });


  // //for loop
  // let index=row.id 
  //  for(let i = 0; i < this.data.length; ++i){
  //  if (this.data[i].id === index) {
  //     this.data.splice(i,1);
  // }
  // }

 }
}
