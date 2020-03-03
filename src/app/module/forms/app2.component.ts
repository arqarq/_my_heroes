import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  ElementRef,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild
} from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Decorator, Decorator2, HTMLInputToPercent } from '../../util/HTMLInputToPercent';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root2',
  templateUrl: './app2.component.html',
  styleUrls: ['./app2.component.css']
})
@HTMLInputToPercent()
@Decorator
@Decorator2('Hey!a')
export class App2Component implements OnChanges, OnInit, DoCheck, AfterContentInit,
  AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  @ViewChild('input0') inputElement: ElementRef;
  weryfik = App2Component[`weryfik`];
  und: Array<number>;
  und2: Array<number> = [];
  t = typeof this.und;
  tt = typeof this.und2;
  dane: number[] = [];
  liczba = 1;
  ilePx = 20;
  items = [2, 1];
  inputText1 = 'abc';
  inputText2 = 'def';
  b = 'b';
  d = 'd';
  obs$;
  private title = 'Formularze';
  private lifecycleLog: string[] = [];
  private lifecycleLogCount = new Map<string, number>();
  private i = 0;

  constructor(private titleService: Title) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.countLifecycleCalls(this.ngOnChanges.name);
    this.lifecycleLog.push(++this.i + '/' + this.ngOnChanges.name + '(' + this.gM(this.ngOnChanges.name) + ')/' +
      (typeof this.inputElement !== 'undefined') + '/' + this.inputElement?.nativeElement.offsetHeight);
  }

  ngOnInit(): void {
    this.setTitle(this.title);
    App2Component[`word`]('a b c d e');
    App2Component[`word2`]('a b c d e');
    App2Component[`word3`]('a b c d e');
    App2Component[`word4`]('a b c d e');
    App2Component[`word5`]('a b c d e');
    this.countLifecycleCalls(this.ngOnInit.name);
    this.lifecycleLog.push(++this.i + '/' + this.ngOnInit.name + '(' + this.gM(this.ngOnInit.name) + ')/' +
      (typeof this.inputElement !== 'undefined') + '/' + this.inputElement?.nativeElement.offsetHeight);
    const timeout = setTimeout(() => {
      clearTimeout(timeout);
      this.b = 'c';
      this.d = 'e';
    }, 10000);
    this.obs$ = new Observable<{value2: string}>((subscriber) => {
      subscriber.next({value2: '—'});
      const timeout2 = setTimeout(() => {
        subscriber.next({value2: 'abc'});
        subscriber.complete();
        clearTimeout(timeout2);
      }, 5000);
    }).pipe(map((value) => value.value2));
  }

  ngDoCheck(): void {
    this.countLifecycleCalls(this.ngDoCheck.name);
    this.lifecycleLog.push(++this.i + '/' + this.ngDoCheck.name + '(' + this.gM(this.ngDoCheck.name) + ')/' +
      (typeof this.inputElement !== 'undefined') + '/' + this.inputElement?.nativeElement.offsetHeight);
  }

  ngAfterContentInit(): void {
    this.countLifecycleCalls(this.ngAfterContentInit.name);
    this.lifecycleLog.push(++this.i + '/' + this.ngAfterContentInit.name + '(' + this.gM(this.ngAfterContentInit.name) + ')/' +
      (typeof this.inputElement !== 'undefined') + '/' + this.inputElement?.nativeElement.offsetHeight);
  }

  ngAfterContentChecked(): void {
    this.countLifecycleCalls(this.ngAfterContentChecked.name);
    this.lifecycleLog.push(++this.i + '/' + this.ngAfterContentChecked.name + '(' + this.gM(this.ngAfterContentChecked.name) + ')/' +
      (typeof this.inputElement !== 'undefined') + '/' + this.inputElement?.nativeElement.offsetHeight);
  }

  ngAfterViewInit(): void {
    this.countLifecycleCalls(this.ngAfterViewInit.name);
    this.lifecycleLog.push(++this.i + '/' + this.ngAfterViewInit.name + '(' + this.gM(this.ngAfterViewInit.name) + ')/' +
      (typeof this.inputElement !== 'undefined') + '/' + this.inputElement?.nativeElement.offsetHeight);
    console.log('inputElement', this.inputElement);
  }

  ngAfterViewChecked(): void {
    this.countLifecycleCalls(this.ngAfterViewChecked.name);
    this.lifecycleLog.push(++this.i + '/' + this.ngAfterViewChecked.name + '(' + this.gM(this.ngAfterViewChecked.name) + ')/' +
      (typeof this.inputElement !== 'undefined') + '/' + this.inputElement?.nativeElement.offsetHeight);
  }

  ngOnDestroy(): void {
    this.countLifecycleCalls(this.ngOnDestroy.name);
    this.lifecycleLog.push(++this.i + '/' + this.ngOnDestroy.name + '(' + this.gM(this.ngOnDestroy.name) + ')/' +
      (typeof this.inputElement !== 'undefined') + '/' + this.inputElement?.nativeElement.offsetHeight);
    console.log('---', Object.keys({lifecycleLog: this.lifecycleLog})[0] + ':');
    this.lifecycleLog.forEach((value) => console.log(value));
    console.log('--- EOL');
  }

  dodajLiczbe() {
    this.dane.push(this.liczba++);
  }

  toggleDisable() {
    this.inputElement.nativeElement.disabled = !this.inputElement.nativeElement.disabled;
  }

  private countLifecycleCalls(name: string) {
    this.lifecycleLogCount.has(name) ?
      this.lifecycleLogCount.set(name, this.lifecycleLogCount.get(name) + 1) : this.lifecycleLogCount.set(name, 1);
  }

  private gM(name: string) {
    return this.lifecycleLogCount.get(name);
  }

  private setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }
}
