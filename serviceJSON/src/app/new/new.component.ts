import { Component, OnInit } from '@angular/core';
import { NewService } from './newservice.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  pr;

  constructor(private serve:NewService) { 
    this.pr=this.serve.const();
  }

  ngOnInit() {
  }

}
