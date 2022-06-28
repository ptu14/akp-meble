import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/model';

@Component({
  selector: 'akp-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent implements OnInit {
  @Input()
  products!: Product[];

  product!: Product;

  ngOnInit(): void {
    this.product = this.products[0];
  }
}
