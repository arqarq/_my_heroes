import { Inject, LOCALE_ID, Pipe, PipeTransform } from '@angular/core';
import { LOCALE_ID_CURRENCIES } from '../../../../locale/LIDs';
import { CurrencyPipe } from '@angular/common';

@Pipe({name: 'money'})
export class MoneyPipe implements PipeTransform {
  constructor(
    private currencyPipe?: CurrencyPipe, // wymagany provider w module, ale instancja ma już ustawione LOCALE_ID
    @Inject(LOCALE_ID) private localeId?: string
  ) {
  }

  transform(value: number, ...args: any[]): string {
    // return new CurrencyPipe(this.localeId).transform( // bez providera w module
    //   value.toString(),
    //   LOCALE_ID_CURRENCIES[this.localeId].code,
    //   LOCALE_ID_CURRENCIES[this.localeId].display
    // );
    return this.currencyPipe.transform(
      value.toString(),
      LOCALE_ID_CURRENCIES[this.localeId].code,
      LOCALE_ID_CURRENCIES[this.localeId].display
    );
  }
}
