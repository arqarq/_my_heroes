import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LangChangeRelayService {
  private $langSwitched = true;

  get langSwitched(): boolean {
    return this.$langSwitched;
  }

  set langSwitched(value: boolean) {
    this.$langSwitched = value;
  }
}
