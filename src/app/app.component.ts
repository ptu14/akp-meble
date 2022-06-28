import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { data } from './mocked-data';
import { Product } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit {
  data: Product[] = data;

  @ViewChild('product')
  childComponent: any;

  displayChaildComponent = true;

  diplayPorduct = 0;

  ngOnInit() {
    console.log(this.childComponent);
  }

  ngAfterViewInit() {
    this.childComponent.test();
  }

  changeProduct() {
    this.diplayPorduct = 1;
    this.displayChaildComponent = false;
  }
}
