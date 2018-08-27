import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  num: number = 0;
  x;
    count(){
      (this.x=setInterval(() => {this.num++},500));
    }
    stop(){
      clearInterval(this.x);
      // this.num=0;
    }   
}
