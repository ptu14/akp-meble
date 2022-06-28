import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../common/data/products.service';
import { data } from '../mocked-data';
import { Product } from '../model';

@Component({
  selector: 'akp-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  product!: Product | undefined;

  itemsToCart = 1;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) {}

  ngOnInit(): void {
    const id: string = this.route.snapshot.params['id'];
    this.product = this.productsService.getProduct(id);
  }

  onClickHandler(event: Event) {
    if (event.target) {
      this.itemsToCart = (event.target as HTMLInputElement).valueAsNumber;
    }
  }
}
