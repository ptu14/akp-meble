import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { pluck, switchMap } from 'rxjs/operators';
import { ProductsService } from '../common/data/products.service';
import { NotificationService } from '../common/notification.service';
import { Product } from '../model';

@Component({
  selector: 'akp-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit, OnDestroy {
  product!: Product | undefined;

  id: string = '1';

  itemsToCart = 1;

  subscriptions = new Subscription();

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService,
    private notificationService: NotificationService
  ) {}

  ngOnInit(): void {
    const productSubscription = this.route.params
      .pipe(
        pluck('id'),
        switchMap((id) => {
          return this.productsService.getProduct(id);
        })
      )
      .subscribe((element) => {
        this.product = element;
      });
    this.subscriptions.add(productSubscription);
  }

  onClickHandler(event: Event) {
    if (event.target) {
      this.itemsToCart = (event.target as HTMLInputElement).valueAsNumber;
    }
  }

  addToBasket() {
    this.notificationService.addToCart(this.itemsToCart);
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe(); // pamietaj zawsze sie odsubscrybowac
  }
}
