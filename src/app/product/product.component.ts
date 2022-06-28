import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { data } from '../mocked-data';
import { Product } from '../model';

@Component({
  selector: 'akp-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  products: Product[] = data;

  product: Product | undefined;

  itemsToCart = 1;

  productNumber = 1;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.product = this.products.find((product) => product.id == id);
  }

  onClickHandler(event: Event) {
    if (event.target) {
      this.itemsToCart = (event.target as HTMLInputElement).valueAsNumber;
    }
  }
}
