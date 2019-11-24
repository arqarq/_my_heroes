import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Decorator, Decorator2, HTMLInputToPercent } from '../../util/HTMLInputToPercent';

@Component({
  selector: 'app-root2',
  templateUrl: './app2.component.html',
  styleUrls: ['./app2.component.css']
})
@HTMLInputToPercent()
@Decorator
@Decorator2('Hey!a')
export class App2Component implements OnInit {
  weryfik = App2Component[`weryfik`];
  und: Array<number>;
  und2: Array<number> = [];
  t = typeof this.und;
  tt = typeof this.und2;
  dane: number[] = [];
  liczba = 1;
  ilePx = 20;
  items = [2, 1];
  private title = 'Formularze';

  constructor(private titleService: Title) {
  }

  ngOnInit(): void {
    this.setTitle(this.title);
    App2Component[`word`]('a b c d e');
    App2Component[`word2`]('a b c d e');
    App2Component[`word3`]('a b c d e');
    App2Component[`word4`]('a b c d e');
    App2Component[`word5`]('a b c d e');
  }

  dodajLiczbe() {
    this.dane.push(this.liczba++);
  }

  /*weryfikacja(el: HTMLInputElement) {
    let val: any = el.value;
    if (/^[0-9]+\.$/.test(val)) {
      console.log('1. regex: ' + val);
      val = val.slice(0, -1);
    }
    val = +val;
    if (!(val > 0 && val < 101) || (val % 1 !== 0)) {
      console.log('2. zerowanie nullem: ' + val);
      el.value = null;
      return;
    }
    console.log('3. ok: ' + val);
    el.value = val + '';
  }*/

  private setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }
}
