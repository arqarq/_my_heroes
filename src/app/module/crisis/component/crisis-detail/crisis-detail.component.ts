import { Component, OnDestroy, OnInit } from '@angular/core';
import { Crisis, CRISIS_NOUN } from '../../../../model/crisis';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { MarvelService } from '../../../../service/marvel.service';
import { Observable, Observer, Subscription } from 'rxjs';
import { DialogService } from '../../service/dialog.service';
import { switchMap } from 'rxjs/operators';
import { CrisisListComponent } from '../crisis-list/crisis-list.component';
import { CanDeactivateGuard } from '../../service/can-deactivate.guard';
import { CrisisListServiceModule } from '../crisis-list/crisis-list-service.module';

@Component({
  selector: 'app-crisis-detail',
  templateUrl: './crisis-detail.component.html',
  styleUrls: ['./crisis-detail.component.css'],
  providers: [CrisisListServiceModule]
})
export class CrisisDetailComponent extends CanDeactivateGuard implements OnInit, OnDestroy {
  crisis: Crisis;
  editName: string;
  private crisis$: Observable<Crisis>;
  private subscription = new Subscription();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private crisisService: MarvelService<Crisis>,
    private crisesList: CrisisListComponent
  ) {
    super();
    crisisService.setNouns(CRISIS_NOUN);
  }

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean { // interface AuthGuard tego używa!
    if (!this.crisis || this.crisis.name === this.editName) {
      return true;
    }
    return DialogService.confirm('Discard changes?');
  }

  save() {
    this.crisis.name = this.editName;
    this.subscription.add(this.crisisService.updateHero(this.crisis).subscribe(
      () => this.gotoCrises()
    ));
  }

  gotoCrises() {
    // const crisisId = this.crisis ? this.crisis.id : undefined;
    const crisisId = '';
    // Pass along the crisis id if available
    // so that the CrisisListComponent can select that crisis.
    // Add a totally useless `foo` parameter for kicks.
    // Relative navigation back to the crises
    const booleanPromise = this.router.navigate(
      ['../', {id: crisisId, foo: 'fighters'}],
      {relativeTo: this.route}
    );
    (booleanPromise.then(
      () => {
        this.crisesList.ngOnInit();
        this.crisesList.selectedId = undefined;
      },
      () => {
        this.crisesList.ngOnInit();
        this.crisesList.selectedId = undefined;
      }
    ));
  }

  ngOnInitDontUse() { // TODO marker
    console.log('CrisisDetail # ngOnInit(): called');
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
    const observer: Observer<Crisis> = {
      next: (crisis) => {
        if (crisis) {
          this.editName = crisis.name;
          this.crisis = crisis;
        }
      },
      error: undefined, // gdy błąd subscriber jest unsubscribed, dlatego if wyżej, żeby nie było wywołania na null
      complete: undefined
    };
    this.subscription.add(this.crisis$.subscribe(observer));
    // TODO RESOLVE
    // this.subscription = this.route.data
    //   .subscribe((data: {crisis: Crisis}) => {
    //     this.editName = data.crisis.name;
    //     this.crisis = data.crisis;
    //   });
  }

  ngOnInit(): void {
    this.subscription.add(this.route.data.subscribe(
      (data: {crisisHere: Crisis}) => {
        this.crisis = data.crisisHere;
        this.editName = this.crisis.name;
        this.crisesList.selectedId = this.crisis.id;
      }
    ));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    this.crisesList.selectedId = undefined;
  }
}
