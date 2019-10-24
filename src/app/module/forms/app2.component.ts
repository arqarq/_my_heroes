import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root2',
  templateUrl: './app2.component.html',
  styleUrls: ['./app2.component.css']
})
export class App2Component implements OnInit {
  und: Array<number>;
  und2: Array<number> = [];
  t = typeof this.und;
  tt = typeof this.und2;
  dane: number[] = [];
  liczba = 1;
  private title = 'Formularze';

  constructor(private titleService: Title) {
  }

  ngOnInit(): void {
    this.setTitle(this.title);
  }

  dodajLiczbe() {
    this.dane.push(this.liczba++);
  }

  weryfikacja(el: HTMLInputElement) {
    let val: any = el.value;
    if (/^[0-9]+\.$/.test(val)) {
      alert('1. regex: ' + val);
      val = val.slice(0, -1);
    }
    val = +val;
    if (!(val > 0 && val < 101) || (val % 1 !== 0)) {
      alert('2. zerowanie nullem: ' + val);
      el.value = null;
      return;
    }
    alert('3. ok: ' + val);
    el.value = val + '';
  }

  private setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }
}
