import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from 'src/app/servicios/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-buscar-heroe',
  templateUrl: './buscar-heroe.component.html'
})
export class BuscarHeroeComponent implements OnInit {


  heroes:Heroe[] = [];
  termino:string;

  constructor(private activatedRoute:ActivatedRoute, private _heroeService:HeroesService, private router:Router) {
     //esto devuelve un observador
     this.activatedRoute.params.subscribe( params => {
      //id es el parametro de la ruta
      console.log(params['termino']);
      this.termino = params['termino'];
      this.heroes = this._heroeService.buscarHeroe(params['termino']);
    });

  }

  ngOnInit() {
  }

  verHeroe(index: number) {
    console.log(index);
    this.router.navigate(['/heroe',index]);
  }

}
