import { Component } from '@angular/core';
import { data } from './mocked-data';
import { Product } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  data: Product[] = data;

  displayChaildComponent = true;

  diplayPorduct = 0;

  changeProduct() {
    this.diplayPorduct = 1;
    this.displayChaildComponent = false;
  }
}
