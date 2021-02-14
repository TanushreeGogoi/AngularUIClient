import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

interface Employee {
  id: Number;
  first_name: String;
  last_name: String;
  email: String;
}

@Component({
  selector: 'app-httpclientdata',
  templateUrl: './httpclientdata.component.html',
  styleUrls: ['./httpclientdata.component.css']
})
export class HttpclientdataComponent implements OnInit {

  employeeData: Employee[];

  constructor(private httpClient: HttpClient) {
   }

  ngOnInit() {
   this.getEmployees();
  }

  getEmployees(){
    this.httpClient.get("/assets/employees.json").subscribe((data: Employee[]) => {
      this.employeeData = data;
    })
  }
}
