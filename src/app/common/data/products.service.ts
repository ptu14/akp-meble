import { Injectable } from '@angular/core';
import { data } from 'src/app/mocked-data';
import { type Product } from 'src/app/model';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private products: Product[] = data;
  constructor() {}

  getProducts(): Product[] {
    return this.products;
  }

  getProduct(id: string): Product | undefined {
    return this.products.find((product) => product.id === id);
  }
}
