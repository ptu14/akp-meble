import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { OrdersService } from '../common/data/orders.service';
import { NotificationService } from '../common/notification.service';

@Component({
  selector: 'akp-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  notification$ = this.notificationService.cartNotification$;

  constructor(
    private notificationService: NotificationService,
    private ordersService: OrdersService
  ) {}

  clearCart() {
    this.notificationService.clearAll();
  }

  submit(form: NgForm) {
    if (form.valid) {
      this.ordersService.sendOrder(form.value);
      form.reset();
    }
  }
}
