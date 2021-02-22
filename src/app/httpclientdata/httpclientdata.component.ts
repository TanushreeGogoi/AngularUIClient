import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-httpclientdata',
  templateUrl: './httpclientdata.component.html',
  styleUrls: ['./httpclientdata.component.css']
})
export class HttpclientdataComponent implements OnInit {

  employeeData = [];

  constructor(private employeeService: EmployeeService) {
   }

  ngOnInit() {
   this.employeeService.getEmployees()
       .subscribe(data => this.employeeData=data);
  }

}
