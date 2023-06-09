import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = HEROES

  constructor(private heroService: HeroService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getHeroes()
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(
      (heroes: Hero[]) => {
        this.heroes = heroes
      }
    )
  }

  add(name: string): void {
    name = name.trim()
    if (name) {
      this.heroService.addHero({ name } as Hero)
        .subscribe((hero: Hero) => {
          this.heroes.push(hero)
        })
    }
  }

  delete(hero: Hero) {
    this.heroes = this.heroes.filter(h => h !== hero)
    this.heroService.deleteHero(hero.id).subscribe()
  }
}
