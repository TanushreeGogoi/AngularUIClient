import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-promise-observable',
  templateUrl: './promise-observable.component.html',
  styleUrls: ['./promise-observable.component.css']
})
export class PromiseObservableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  myPromise = new Promise(resolve =>{
    setTimeout(()=>{
      resolve('dog');
      resolve('dog');
      resolve('dog');
    })
  })
  myObservable = new Observable(observer => {
    setTimeout(() => {
      observer.next('dog');
      observer.next('cat');
      observer.next('bird');
    }, 2000);
  })
}
