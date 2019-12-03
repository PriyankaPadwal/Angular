import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calci-data',
  templateUrl: './calci-data.component.html',
  styleUrls: ['./calci-data.component.css']
})
export class CalciDataComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  mainText = '';
  subText = '';
  operand1: number; 
  operand2: number;
  operator = ''; 
  calculationString = ''; 
  answered = false; 
  operatorSet = false;

  pressKey(key: string) {
    console.log("...........fun press key call....................................."+key)

    if (key === '/' || key === 'x' || key === '-' || key === '+'|| key==='=') {

       const lastKey = this.mainText[this.mainText.length - 1];

       if (lastKey === '/' || lastKey === 'x' || lastKey === '-' || lastKey === '+' )  {
         this.operatorSet = true;
         console.log("...........operatorSet....................................."+lastKey)
       }
       if ((this.operatorSet) || (this.mainText === '')) {
         return;
         console.log("...........operatorSet in main text.....................................")
       }
       this.operand1 = parseFloat(this.mainText);
       this.operator = key;
       this.operatorSet = true;

       console.log("....operand1.."+this.operand1+".....operator.."+this.operator)
    }


    if (this.mainText.length === 10) {
      return;
    }

    this.mainText += key;
    console.log("mainText......."+key+".......key press.............."+ this.mainText)
 }

 getAnswer() {
  this.calculationString = this.mainText;
  this.operand2 = parseFloat(this.mainText.split(this.operator)[1]);

  console.log(".....calculationString......."+this.calculationString+"......this.operand2...."+this.operand2)


   if (this.operator === '/') {
    this.subText = this.mainText;
    this.mainText = (this.operand1 / this.operand2).toString();
    this.subText = this.calculationString;
    if (this.mainText.length > 9) {
      this.mainText = this.mainText.substr(0, 9);
    }
  } else if (this.operator === 'x') {
    this.subText = this.mainText;
    this.mainText = (this.operand1 * this.operand2).toString();
    this.subText = this.calculationString;
    if (this.mainText.length > 9) {
      this.mainText = 'ERROR';
      this.subText = 'Range Exceeded';
    }
  } else if (this.operator === '-') {
    this.subText = this.mainText;
    this.mainText = (this.operand1 - this.operand2).toString();
    this.subText = this.calculationString;
  } else if (this.operator === '+') {
    this.subText = this.mainText;
    this.mainText = (this.operand1 + this.operand2).toString();
    this.subText = this.calculationString;
    if (this.mainText.length > 9) {
      this.mainText = 'ERROR';
      this.subText = 'Range Exceeded';
    }
  }
else if(this.operator === '='){
  this.subText = this.mainText;
  this.mainText = this.mainText; 
}

   else {
    this.subText = this.mainText;
    
  }
  this.answered = true;
}
allClear(){
  console.log("........all clear.......");
  this.mainText='';
  this.subText='';
}

}
