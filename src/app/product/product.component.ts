import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../model';

@Component({
  selector: 'akp-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  @Input()
  product!: Product;

  discount: number = 0;

  ngOnInit() {
    if (this.product.priceOld) {
      this.discount = this.product.price - this.product.priceOld;
    }
  }
}
