import { Component, OnDestroy, OnInit } from '@angular/core';
import { Crisis, CRISIS_NOUN } from '../../../model/crisis';
import { Observable, Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { MarvelService } from '../../../service/marvel.service';

@Component({
  selector: 'app-crisis-list',
  templateUrl: './crisis-list.component.html',
  styleUrls: ['./crisis-list.component.css']
})
export class CrisisListComponent implements OnInit, OnDestroy {
  crises$: Crisis[]; // --aot
  qty: number; // --aot
  private selectedId: number;
  private subscription: Subscription;

  constructor(
    private crisisService: MarvelService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.crisisService.setNouns(CRISIS_NOUN);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) {
      return;
    }
    this.subscription = this.crisisService.addHero({name} as Crisis)
      .subscribe((oneHero) => {
        this.crises$.push(oneHero);
        this.qty++;
      });
  }

  delete(crisis: Crisis): void {
    if (crisis.id !== this.selectedId) {
      this.crises$ = this.crises$.filter(h => h !== crisis);
      this.subscription = this.crisisService.deleteHero(crisis).subscribe(
        () => {
          this.qty--;
        });
    }
  }

  navigate(id) {
    if (this.router.navigate(
      ['./', id],
      {relativeTo: this.route, preserveQueryParams: false}
    )) {
      this.selectedId = id;
    }
  }

  ngOnInit() {
    this.subscription = this.route.paramMap
      .pipe(switchMap(params => {
        this.selectedId = +params.get('id');
        // console.log(this.selectedId);
        // setTimeout(() => console.log('time'), 50);
        /*this.subscription = */
        this.crisisService.getHeroes()
          .subscribe(heroTable => {
            this.crises$ = heroTable;
            this.qty = heroTable.length;
          });
        return new Observable<any>();
      })).subscribe(); // trzeba zasubskrybować zmienną Observable, aby wykonało lambdy
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
