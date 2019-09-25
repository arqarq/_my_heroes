import { Directive, Inject, InjectionToken } from '@angular/core';

export const INJ_TOKEN = new InjectionToken<Window>('Window class token');

export function _window(): Window {
  return window;
}

@Directive({
  selector: '[appAddDblClick]',
  providers: [
    {provide: INJ_TOKEN, useFactory: _window}
  ]
})
export class AdditionalDirective {
  constructor(@Inject(INJ_TOKEN) private win: Window) {
    win.addEventListener('dblclick', () => alert('Podwójny klik!'));
  }
}
