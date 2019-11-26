import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-db-random',
  templateUrl: './db-random.component.html',
  styleUrls: ['./db-random.component.css']
})
export class DbRandomComponent implements OnInit {
  boxbknd='white'
  constructor() { }

  ngOnInit() {
  }

  onMouseEnter(event: MouseEvent){
    console.log("entered",event)
    this.boxbknd=this.randomColor()
  }
  onMouseLeave(event: MouseEvent){
    console.log("Exist",event)
    this.boxbknd='white'
  }

  randomColor(): string{
  let red=Math.floor(Math.random()*256);   
  let green=Math.floor(Math.random()*256);   
  let blue=Math.floor(Math.random()*256);   

  console.log("red-"+red,"green-"+green,"blue-"+blue);
  
    return `rgb(${red},${green},${blue})`
  }


}
