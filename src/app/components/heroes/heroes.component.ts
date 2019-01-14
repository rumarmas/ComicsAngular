import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from 'src/app/servicios/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {

  heroes:Heroe[] = [];

  constructor(private _heroesService:HeroesService, private router:Router) {
    //console.log("constructor");
   }

  //Se ejecuta cuando la pagina ya esta cargada
  ngOnInit() {
    //console.log("ngOnInit");
    this.heroes = this._heroesService.getHeroes();
    //console.log(this.heroes);

  }

  verHeroe(index: number) {
    console.log(index);
    this.router.navigate(['/heroe',index]);
  }

}


