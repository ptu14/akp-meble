import { Component } from '@angular/core';
import { Product } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  products: Product[] = [
    {
      id: '1',
      name: 'Modne i wygodne krzesło Ygstadd',
      shopName: 'Meble Boguś',
      image: './assets/img/furniture-1.jpg',
      price: 100,
      priceOld: 200,
      itemsLeft: 123,
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus, nisi sed. Nisi quibusdam voluptates blanditiis omnis tempora provident sunt cumque!',
    },
  ];
}
