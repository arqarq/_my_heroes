import {Component, OnInit} from '@angular/core';
import {Hero} from '../../model/hero';
import {HeroService} from '../../service/hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];
  // czyPrzejeta?: boolean;
  czyPrzejeta?: boolean;
  pozycje: string[] = ['WSZYSTKIE', 'TAK', 'NIE'];
  pozycja: string;

  constructor(private heroService: HeroService) {
  }

  setCzyPrzejeta(pp: string): void {
    if (pp === this.pozycje[0]) {
      this.czyPrzejeta = null;
    } else {
      this.czyPrzejeta = (pp === this.pozycje[1]);
    }
    alert(this.czyPrzejeta);
  }

  getHeroes(): void {
    this.heroService
      .getHeroes()
      .subscribe(heroeS => this.heroes = heroeS.slice(0, 4));
  }

  ngOnInit() {
    this.getHeroes();
  }
}
