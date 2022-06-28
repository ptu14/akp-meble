import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/model';
import { ProductsService } from '../common/data/products.service';

@Component({
  selector: 'akp-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent {
  products$: Observable<Product[]> = this.productsService.getProducts();

  constructor(private productsService: ProductsService) {}
}
