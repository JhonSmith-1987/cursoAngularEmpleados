import { Empleado } from './../empleado.Model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado-hijo-c',
  templateUrl: './empleado-hijo-c.component.html',
  styleUrls: ['./empleado-hijo-c.component.css']
})
export class EmpleadoHijoCComponent implements OnInit {

  @Input() empleado:Empleado;
  @Input() i:number;

  arrayCaracteristicas = [''];

  agregarCaracteristica(nuevaCaracteristica: string) {
    this.arrayCaracteristicas.push(nuevaCaracteristica);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
