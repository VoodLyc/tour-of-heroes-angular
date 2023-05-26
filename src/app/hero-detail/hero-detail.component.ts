import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from '../hero.service';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  hero?: Hero

  constructor(private route: ActivatedRoute, private heroService: HeroService, private location: Location) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.heroService.getHero(Number(id)).subscribe(
      (hero: Hero) => {
        this.hero = hero
      }
    )
  }

  goBack(): void {
    this.location.back()
  }

}
