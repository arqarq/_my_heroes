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

  resetFlag(timeout = 1000) {
    if (this.$langSwitched) {
      const toId = setTimeout(() => {
        this.langSwitched = false;
        return () => clearTimeout(toId);
      }, timeout);
    }
  }
}
