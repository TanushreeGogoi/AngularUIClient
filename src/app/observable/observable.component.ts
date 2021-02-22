import { Component, OnInit } from '@angular/core';
import { observable, Observable } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {

  orderStatus: any;
  data: Observable<any>;

  constructor() { }

  ngOnInit(): void {
   this.data =  new Observable(observer =>{
      
      setTimeout(()=>{
        observer.next("In Progress")
      }, 2000);

      setTimeout(()=>{
        observer.next("Processing")
      }, 5000);

      setTimeout(()=>{
        observer.next("Completed")
      }, 8000);

      setTimeout(()=>{
        observer.complete();
      }, 11000);

      setTimeout(()=>{
        observer.next("After completion")
      }, 15000);

    });
    
    this.data.subscribe(val => {
      this.orderStatus = val;
    })

    this.data.subscribe(val2 => {
      console.log(val2);
    })
  }

}
