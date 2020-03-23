import { Component } from '@angular/core';

@Component({
  selector: 'app-footer-for-chooser',
  templateUrl: './footer-for-chooser.component.html',
  styles: [
    'a {text-decoration: none}',
    '.activated {color: yellow}',
    '.activated-color {background-color: red; border-radius: 5px 0 0 0; padding: 5px}',
    'section.bottom-right {position: fixed; bottom: 0; right: 0}'
  ]
})
export class FooterForChooserComponent {
}
