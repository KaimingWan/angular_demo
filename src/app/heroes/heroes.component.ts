import {Component, OnInit} from '@angular/core';
import {Hero} from './hero';
import {HEROES} from './mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.less']
})
export class HeroesComponent implements OnInit {

  selectedHero: Hero;
  heroes = HEROES;
  // hero: Hero = {
  //   id: 1,
  //   name: 'Windstorm'
  // };


  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  constructor() {
  }

  ngOnInit() {
  }

}
