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
}
