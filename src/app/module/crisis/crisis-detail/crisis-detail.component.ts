import { Component, OnDestroy, OnInit } from '@angular/core';
import { Crisis, CRISIS_NOUN } from '../../../model/crisis';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { MarvelService } from '../../../service/marvel.service';
import { Observable, Subscription } from 'rxjs';
import { DialogService } from './dialog.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-crisis-detail',
  templateUrl: './crisis-detail.component.html',
  styleUrls: ['./crisis-detail.component.css']
})
export class CrisisDetailComponent implements OnInit, OnDestroy {
  crisis: Crisis;
  crisis$: Observable<Crisis>;
  private editName: string;
  private subscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private crisisService: MarvelService
  ) {
    this.crisisService.setNouns(CRISIS_NOUN);
  }

  canDeactivate(): Observable<boolean> | boolean {
    if (!this.crisis || this.crisis.name === this.editName) {
      return true;
    }
    return DialogService.confirm('Discard changes?');
  }

  cancel() {
    this.gotoCrises();
  }

  save() {
    this.crisis.name = this.editName;
    this.gotoCrises();
  }

  gotoCrises() {
    const crisisId = this.crisis ? this.crisis.id : undefined;
    // Pass along the crisis id if available
    // so that the CrisisListComponent can select that crisis.
    // Add a totally useless `foo` parameter for kicks.
    // Relative navigation back to the crises
    this.router.navigate(
      ['../', {id: crisisId, foo: 'fighters'}],
      {relativeTo: this.route}
    );
  }

  ngOnInit() {
    // TODO SNAPSHOT - ONLY FIRST ID
    // const id = this.route.snapshot.paramMap.get('id');
    // this.subscription = this.crisisService.getHero(+id).subscribe(crisis => {
    //   this.crisis = crisis;
    //   this.editName = crisis.name;
    // });
    // TODO MAP - REUSE WITH EACH ID
    // this.subscription = this.route.paramMap.pipe(
    //   map((par: ParamMap) => {
    //     this.crisisService.getHero(par.get('id')).subscribe(crisis => {
    //       this.editName = crisis.name;
    //       this.crisis = crisis;
    //     });
    //   })
    // ).subscribe();
    // TODO SWITCHMAP - REUSE WITH EACH ID
    this.crisis$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.crisisService.getHero(params.get('id')))
    );
    this.subscription = this.crisis$.subscribe(
      crisis => {
        this.editName = crisis.name;
        this.crisis = crisis;
      }
    );
    // TODO RESOLVE
    // this.subscription = this.route.data
    //   .subscribe((data: {crisis: Crisis}) => {
    //     this.editName = data.crisis.name;
    //     this.crisis = data.crisis;
    //   });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
