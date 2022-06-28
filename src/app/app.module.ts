import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { ProductComponent } from './product/product.component';
import { ProductsListComponent } from './products-list/products-list.component';
import localePl from '@angular/common/locales/pl';
import { registerLocaleData } from '@angular/common';
import { StockLeftPipe } from './stock-left.pipe';

registerLocaleData(localePl);

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductsListComponent,
    CartComponent,
    StockLeftPipe,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'pl-PL',
    },
    {
      provide: DEFAULT_CURRENCY_CODE,
      useValue: 'PLN',
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
