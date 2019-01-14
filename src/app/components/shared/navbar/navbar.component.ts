import { Component, OnInit } from '@angular/core';
import { Heroe, HeroesService } from 'src/app/servicios/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  constructor(private _heroeService: HeroesService, private router:Router) { }

  ngOnInit() {
  }

  buscarHeroe(termino:string){
    console.log(termino);
    this.router.navigate(['/buscarHeroe',termino]);
  }

}
