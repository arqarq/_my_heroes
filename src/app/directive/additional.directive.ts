import { Directive, Inject, InjectionToken } from '@angular/core';
import { DOCUMENT } from '@angular/common';

export const INJ_TOKEN = new InjectionToken<Window>('Window class token');
export const INJ2_TOKEN = new InjectionToken<Document>('Document class token');
export const NUMBER = new InjectionToken<string>('string class token');

export function _window(): Window {
  return window;
}

export function _document(): Document {
  return document;
}

enum Test {
  One = 0,
  TwoTwo,
  Trzy
}

@Directive({
  selector: '[appAddDblClick]',
  providers: [
    {provide: INJ_TOKEN, useFactory: _window},
    {provide: INJ2_TOKEN, useFactory: _document},
    {provide: NUMBER, useValue: `${Test.One} + ${Test.TwoTwo} + ${Test.Trzy}`}
  ]
})
export class AdditionalDirective {
  constructor(
    @Inject(INJ_TOKEN) private win: Window,
    @Inject(DOCUMENT) private doc: Document,
    @Inject(INJ2_TOKEN) private docc: Document,
    @Inject(NUMBER) private numbersFromInjectedEnum: string
  ) {
    win.addEventListener('dblclick', () => alert(
      `Podwójny klik!\n` +
      '\n' +
      `(URI: ${AdditionalDirective.prepareURI(doc.documentURI)})\n` +
      `(fullscreen enabled? ${!!docc.fullscreenElement})\n` +
      `(numbersFromInjectedEnum: ${numbersFromInjectedEnum})`
    ));
  }

  private static prepareURI(input: string): string {
    const strings = input.split('/');
    if (strings[2].length > 25) {
      strings[2] = strings[2].slice(0, 8) + '...' + strings[2].slice(strings[2].length - 8);
    }
    return strings.join('/');
  }
}
