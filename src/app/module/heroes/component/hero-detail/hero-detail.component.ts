import { Component, Input, OnInit } from '@angular/core';
import { Hero, HERO_NOUN } from '../../../../model/hero';
import { ActivatedRoute } from '@angular/router';
import { MarvelService } from '../../../../service/marvel.service';
import { Location } from '@angular/common';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero;

  constructor(
    private route: ActivatedRoute,
    private heroService: MarvelService<Hero>,
    private location: Location
  ) {
    heroService.setNouns(HERO_NOUN);
  }

  getHero(): void {
    console.log('HeroDetailComponent # getHero() # this.route.snapshot.paramMap: ' + this.route.snapshot.paramMap);
    const id = +this.route.snapshot.paramMap.get('id');
    const subscription = this.heroService
      .getHeroNo404(id) // .getHero(id)
      .pipe(finalize(() => subscription.unsubscribe()))
      .subscribe((heroS) => this.hero = heroS);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.heroService.updateHero(this.hero)
      .subscribe(() => this.goBack());
  }

  ngOnInit() {
    this.getHero();
  }
}
