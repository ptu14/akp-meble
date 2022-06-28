import { Component } from '@angular/core';
import { NotificationService } from '../common/notification.service';

@Component({
  selector: 'akp-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  notification$ = this.notificationService.cartNotification$;

  constructor(private notificationService: NotificationService) {}

  clearCart() {
    this.notificationService.clearAll();
  }
}
