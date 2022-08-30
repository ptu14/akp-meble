import { Component, DEFAULT_CURRENCY_CODE, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../model';

@Component({
  selector: 'akp-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  providers: [
    {
      provide: DEFAULT_CURRENCY_CODE,
      useValue: 'USD',
    },
  ],
})
export class ProductComponent implements OnInit {
  product!: Product;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    console.log(this.route.snapshot.params);
  }
}
