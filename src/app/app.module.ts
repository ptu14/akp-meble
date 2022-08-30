import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { registerLocaleData } from '@angular/common';
import localePl from '@angular/common/locales/pl';
import { ProductsListComponent } from './products-list/products-list.component';
import { StockLeftPipe } from './stock-left.pipe';
import { AppRoutingModule } from './app-routing.module';
import { CartComponent } from './cart/cart.component';
import { ProductsService } from './common/data/products.service';
import { HttpClientModule } from '@angular/common/http';

registerLocaleData(localePl);

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    ProductComponent,
    ProductsListComponent,
    StockLeftPipe,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
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
