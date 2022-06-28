import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { OrdersService } from '../common/data/orders.service';
import { NotificationService } from '../common/notification.service';
import { Order } from '../model';

@Component({
  selector: 'akp-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  notification$ = this.notificationService.cartNotification$;

  contactForm = new FormGroup({
    firstname: new FormControl('Tadeusz', [Validators.required]),
    lastname: new FormControl('Głowacki'),
    email: new FormControl(null),
  });

  constructor(
    private notificationService: NotificationService,
    private ordersService: OrdersService
  ) {}

  ngOnInit() {
    this.contactForm.statusChanges.subscribe(console.log);
  }

  clearCart() {
    this.notificationService.clearAll();
  }

  submit() {
    if (this.contactForm.valid) {
      const req: Order = {
        firstname: this.contactForm.controls.firstname.value,
        lastname: this.contactForm.controls.lastname.value,
        email: this.contactForm.controls.email.value,
      };
      this.ordersService.sendOrder(req);
      this.contactForm.reset();
    }
  }
}
