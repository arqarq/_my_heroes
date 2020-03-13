import { Component, Injectable, OnDestroy, OnInit } from '@angular/core';
import { Crisis, CRISIS_NOUN } from '../../../../model/crisis';
import { Observable, Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { MarvelService } from '../../../../service/marvel.service';
import { AuthService } from '../../auth/service/auth.service';
import { CrisisListServiceModule } from './crisis-list-service.module';

@Component({
  selector: 'app-crisis-list',
  templateUrl: './crisis-list.component.html',
  styleUrls: ['./crisis-list.component.css']
})
@Injectable({
  providedIn: CrisisListServiceModule
})
export class CrisisListComponent implements OnInit, OnDestroy {
  crises$: Crisis[]; // --aot
  qty: number; // --aot
  private subscription = new Subscription();
  private $selectedId: number;

  constructor(
    private crisisService: MarvelService<Crisis>,
    private route: ActivatedRoute,
    private router: Router,
    authService: AuthService
  ) {
    crisisService.setNouns(CRISIS_NOUN);
    authService.redirectUrl = undefined; // kasowanie zapamiętanego adresu
  }

  get selectedId() {
    return this.$selectedId;
  }

  set selectedId(value: number | undefined) {
    this.$selectedId = value;
  }

  add(name: string): void {
    name = name.trim();
    if (!name) {
      return;
    }
    this.subscription.add(this.crisisService.addHero({name} as Crisis).subscribe((oneHero) => {
      this.crises$.push(oneHero);
      this.qty++;
    }));
  }

  delete(crisis: Crisis): void {
    if (this.selectedId !== crisis.id) {
      this.crises$ = this.crises$.filter(h => h !== crisis);
      this.subscription.add(this.crisisService.deleteHero(crisis).subscribe(
        () => {
          this.qty--;
        }));
    }
  }

  navigate(id) {
    this.router.navigate(
      ['./', id],
      {relativeTo: this.route, preserveQueryParams: false}
    ).then(
      () => {
        this.selectedId = id;
      }
    );
  }

  ngOnInit() {
    this.subscription.add(this.route.paramMap
      .pipe(switchMap(params => {
        this.selectedId = +params.get('id');
        console.log('CrisisList # ngOnInit(): called');
        // setTimeout(() => console.log('time'), 50);
        this.subscription.add(this.crisisService.getHeroes().subscribe(heroTable => {
          this.crises$ = heroTable;
          this.qty = heroTable.length;
        }));
        return new Observable<any>();
      }))
      .subscribe()); // trzeba zasubskrybować zmienną Observable, aby wykonało lambdy
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
