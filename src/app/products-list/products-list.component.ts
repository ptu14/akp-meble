import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductsService } from '../common/data/products.service';
import { Product } from '../model';

@Component({
  selector: 'akp-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent implements OnInit, OnDestroy {
  products: Product[] = [];

  private subscriptions = new Subscription();

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    const productSubscription = this.productsService
      .getProducts()
      .subscribe((products) => {
        this.products = products;
      });

    this.subscriptions.add(productSubscription);
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
