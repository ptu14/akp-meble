import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  displayChaildComponent = true;

  diplayPorduct = 0;

  changeProduct() {
    this.diplayPorduct = 1;
    this.displayChaildComponent = false;
  }
}
