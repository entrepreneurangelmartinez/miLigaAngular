import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.component.html',
  styleUrls: ['./equipo.component.css']
})
export class EquipoComponent implements OnInit {

  nombre: string='Felinos';
  estatus: boolean=true;
  jugador:string;
  constructor() { }

  ngOnInit() {
    this.nombre='Piratas';
  }

  agregarJugador() {
    let jugador="Angel";
    jugador= "Jesús";
    this.jugador=jugador;
  }

}
