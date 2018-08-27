import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
deparments;
  constructor(private router: Router){}

  ngOnInit() {
  }
departments=[
  {"DepartmentName":"Front End", "Id":1, "Employees":10},
  {"DepartmentName":"Devops", "Id":2, "Employees":2},
  {"DepartmentName":"Hadoop", "Id":3, "Employees":5},
  {"DepartmentName":"Java", "Id":4, "Employees":3}
]
onclick(deparment){
  this.router.navigate(['departments', deparment.Id, deparment.DepartmentName, deparment.Employees])
}
}
