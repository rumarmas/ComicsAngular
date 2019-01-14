import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from 'src/app/servicios/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})
export class HeroeComponent {

  heroe: any = {};
  constructor(private activatedRoute:ActivatedRoute, private heroesService:HeroesService) {
    //esto devuelve un observador
    this.activatedRoute.params.subscribe( params => {
      //id es el parametro de la ruta
      console.log(params['id']);
      this.heroe = this.heroesService.getHeroe(params['id']);
      console.log(this.heroe);
    });
   }
}
