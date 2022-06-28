import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/model';
import { ProductsService } from '../common/data/products.service';

@Component({
  selector: 'akp-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent implements OnInit {
  products!: Product[];

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.products = this.productsService.getProducts();
  }
}
