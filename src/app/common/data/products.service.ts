import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { type Product } from 'src/app/model';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  url = 'http://localhost:3000';
  constructor(private httpClient: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(`${this.url}/products`);
  }

  getProduct(id: string): Observable<Product> {
    return this.httpClient.get<Product>(`${this.url}/products/${id}`);
  }
}
