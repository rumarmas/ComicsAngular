import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent implements OnInit {

  //Si ponemos la propiedad @Input significa que la propiedad puede venir de afuera -> De padre a hijo
  @Input() heroe: any = {};
  @Input() index: number;

  //De hijo a padre
  @Output() heroeSeleccionado: EventEmitter<number>;

  constructor(private router:Router) {
    //Hay que inicializar EventEmitter
    this.heroeSeleccionado = new EventEmitter();
   }

  ngOnInit() {
  }

  verHeroe() {
     console.log(this.index);
    this.router.navigate(['/heroe',this.index]);
    // this.heroeSeleccionado.emit(this.index);
  }

}
