import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/model';
import { data } from '../mocked-data';

@Component({
  selector: 'akp-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent implements OnInit {
  products: Product[] = data;

  ngOnInit(): void {}
}
