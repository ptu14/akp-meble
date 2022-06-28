import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from 'src/app/model';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  constructor(private http: HttpClient) {}

  sendOrder(order: Order) {
    this.http.post('http://localhost:3000/orders', order).subscribe();
  }
}
