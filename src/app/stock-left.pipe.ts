import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stockLeft',
})
export class StockLeftPipe implements PipeTransform {
  transform(stockLeft: number): string {
    if (!stockLeft) {
      return 'Brak na magazynie';
    }
    if (stockLeft < 10) {
      return 'Ostatnie sztuki';
    } else {
      return `pozostało ${stockLeft}`;
    }
  }
}
