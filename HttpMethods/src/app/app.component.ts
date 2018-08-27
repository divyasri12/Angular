import { Component } from '@angular/core';
import { HttpService } from './http.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tab:any;
  div:any;
 constructor(private ser:HttpService){

  //  this.ser.data().subscribe(pas=>{this.tab=pas});
   this.ser.andata(this.div).subscribe(div=>this.div=div);
 }
}
