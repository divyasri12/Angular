import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit {
depId;
depn;
emp;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    let Id=this.route.snapshot.params['Id'];
    let depname=this.route.snapshot.params['DepartmentName'];
    let employee=this.route.snapshot.params['Employees'];    
    this.depId=Id;
    this.depn=depname;
    this.emp=employee;
  }

}
