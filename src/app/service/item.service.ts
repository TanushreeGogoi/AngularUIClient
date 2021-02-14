import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from '../model/item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private itemsUrl: string;

  constructor(private httpClient: HttpClient) {
    this.itemsUrl = 'http://localhost:8118//api/v1/items'
   }

   public findAll(): Observable<Item[]>{
    return this.httpClient.get<Item[]>(this.itemsUrl);
  }
}
