import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-db-random',
  templateUrl: './db-random.component.html',
  styleUrls: ['./db-random.component.css']
})
export class DbRandomComponent implements OnInit {
  boxbknd=''
  boxbknd1=''
  boxbknd2=''
  boxbknd3=''

  constructor() { }

  ngOnInit() {
  }

  onMouseEnter(event: MouseEvent){
    console.log("entered",event)
    this.boxbknd=this.randomColor()
    this.boxbknd1=this.randomColor()
    this.boxbknd2=this.randomColor()
    this.boxbknd3=this.randomColor()
  }
  onMouseLeave(event: MouseEvent){
    console.log("Exist",event)
    this.boxbknd='white'
    this.boxbknd1='white'
    this.boxbknd2='white'
    this.boxbknd3='white'
  }

  randomColor(): string{
  let red=Math.floor(Math.random()*255);   
  let green=Math.floor(Math.random()*255);   
  let blue=Math.floor(Math.random()*255);   

  console.log("red-"+red,"green-"+green,"blue-"+blue);
  
  return `rgb(${red},${green},${blue})`
  }


}
