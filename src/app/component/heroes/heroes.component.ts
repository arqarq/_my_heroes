import {Component, OnInit} from '@angular/core';
import {Hero} from '../../model/hero';
// import {HEROES} from '../mock-heroes';
import {HeroService} from '../../service/hero.service';

@Component({
  styles: [],
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  // selectedHero: Hero;
  // heroTemp: Hero;
  // hero: Hero = {
  //   id: 1,
  //   name: 'Windstorm'
  // };
  // heroes = HEROES;
  heroes: Hero[];


  constructor(private heroService: HeroService) {
  }

  getHeroes(): void {
    // this.heroes = this.heroService.getHeroes();
    this.heroService
      .getHeroes()
      .subscribe(heroeS => this.heroes = heroeS);
  }

  // onSelect(hero: Hero): void {
  //   if (hero !== this.heroTemp) {
  //     this.heroTemp = hero;
  //     this.selectedHero = hero;
  //   } else {
  //     this.heroTemp = null;
  //     this.selectedHero = null;
  //   }
  // }

  ngOnInit() {
    this.getHeroes();
  }

}
