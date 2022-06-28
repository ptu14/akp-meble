import {
  AfterViewInit,
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Product } from '../model';

@Component({
  selector: 'akp-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit, OnChanges, AfterViewInit {
  @Input()
  products!: Product[];

  product!: Product;

  itemsToCart = 1;

  @Input()
  productNumber!: number;

  constructor() {}

  ngOnInit(): void {
    // console.log('ngOnInit', this.productNumber);
  }

  ngOnChanges(): void {
    this.product = this.products[this.productNumber];
  }

  ngAfterViewInit() {
    // console.log('widok gotowy');
  }

  onClickHandler(event: Event) {
    if (event.target) {
      this.itemsToCart = (event.target as HTMLInputElement).valueAsNumber;
    }
  }

  test() {
    console.log('wykonal mnie model rodzica');
  }
}
