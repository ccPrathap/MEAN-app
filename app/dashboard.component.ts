import { Component, OnInit } from '@angular/core';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  moduleId: module.id,
  selector: 'my-dashboard',
  templateUrl: '../../views/dashboard.component.html',
  styleUrls: [ '../../appcss/dashboard.component.css' ],
  providers: [ HeroService ]
})
export class DashboardComponent implements OnInit {

  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes.splice(0, 4));
  }

 }