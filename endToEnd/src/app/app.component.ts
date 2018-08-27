import { Component } from '@angular/core';
import { AppService } from './app.service';
// import { filterQueryId } from '@angular/core/src/view/util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  table:any;
  tab:any;
  userId:number;
  edi:any='';

  constructor(public service:AppService){
   
  }
  disp(){
    this.service.data().subscribe(pos=>{this.table=pos});
  }
  nextTable(value){
    console.log(value);
    this.service.newtab(value).subscribe(pos=>this.tab=pos);
  }  
  edit(value){
    this.service.edit(value).subscribe(pos=>{console.log(pos)});
  }
  del(value){
    this.service.del(value).subscribe(pos=>{console.log(pos)});
  }
}
