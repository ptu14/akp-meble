import { Component, Input, OnChanges } from '@angular/core';
import { Product } from '../model';

@Component({
  selector: 'akp-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnChanges {
  @Input()
  products!: Product[];

  product!: Product;

  itemsToCart = 1;

  @Input()
  productNumber!: number;

  constructor() {}

  ngOnChanges(): void {
    this.product = this.products[this.productNumber];
  }

  onClickHandler(event: Event) {
    if (event.target) {
      this.itemsToCart = (event.target as HTMLInputElement).valueAsNumber;
    }
  }
}
