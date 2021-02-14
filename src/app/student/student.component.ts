import { Component } from '@angular/core';
import { studentsData } from './students.json';

interface Student {
  id: Number;
  name: String;
  email: String;
  gender: String;
}

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {

  constructor() { }

  students : Student[] = studentsData;

}
