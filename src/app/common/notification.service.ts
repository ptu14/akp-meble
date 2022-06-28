import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  private itemsInCart = 0;

  private cartNotification = new BehaviorSubject<number>(0);

  cartNotification$ = this.cartNotification.asObservable();

  addToCart(items: number) {
    this.cartNotification.next((this.itemsInCart += items));
  }

  clearAll() {
    this.itemsInCart = 0;
    this.cartNotification.next(this.itemsInCart);
  }
}
