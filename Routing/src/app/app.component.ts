import { Component, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ContentComponent } from './content/content.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

 @ViewChild(ContentComponent) child: ContentComponent;
 
 constructor() {
   
 }

 onClick() {
this.child.getSomeData();
 }
}
