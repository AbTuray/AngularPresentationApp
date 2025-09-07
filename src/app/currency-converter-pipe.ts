import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyConverter'
})
export class CurrencyConverterPipe implements PipeTransform {

  //GIFTY HEMANS

  transform(
    value: number,
    currencySymbol: string = '$',
    decimalLength: number = 2,
    locale: string = 'en-US'
  ): string {
    if (value == null) return '';

    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency: currencySymbol === '$' ? 'USD' : 'SLL', // fallback logic
      minimumFractionDigits: decimalLength,
      maximumFractionDigits: decimalLength
    }).format(value);
  }

}
