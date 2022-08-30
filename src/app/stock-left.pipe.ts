import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stockLeft',
})
export class StockLeftPipe implements PipeTransform {
  transform(stockLeft: number, leftWarning: number = 10): string {
    if (!stockLeft) {
      return 'Brak na magazynie';
    }
    if (stockLeft < leftWarning) {
      return 'Ostatnie sztuki!';
    } else {
      return `Pozostało: ${stockLeft}`;
    }
  }
}
