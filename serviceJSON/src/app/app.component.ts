import { Component } from '@angular/core';
import { ServicejsonService } from './servicejson.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    
  tab:any;
  constructor(private servicejson : ServicejsonService){
    this.servicejson.data().subscribe(pos => {this.tab=pos});
  }
}
