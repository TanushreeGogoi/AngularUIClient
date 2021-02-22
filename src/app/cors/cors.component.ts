import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cors',
  templateUrl: './cors.component.html',
  styleUrls: ['./cors.component.css']
})
export class CorsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    fetch('https://swapi.dev/api/people/3/', { method: 'get' })
      .then(res => res.json())
      .then(data => console.log(data));
  }

}
