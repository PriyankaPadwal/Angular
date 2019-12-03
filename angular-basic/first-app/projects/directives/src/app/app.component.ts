import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
isPara=false  
  title = 'directives';
  onClick(evt:any){
   this.isPara=!this.isPara
   console.log(evt);
  }
}
