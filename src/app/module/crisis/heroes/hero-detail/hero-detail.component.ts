import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../hero.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {
  }

  getHero(): void {
    console.log(this.route.snapshot.paramMap);
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService
      .getHeroNo404(id)
      // .getHero(id)
      .subscribe(heroS => this.hero = heroS);
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
