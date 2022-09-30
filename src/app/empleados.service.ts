import { Injectable } from '@angular/core';
import { Empleado } from './empleado.Model';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  empleados:Empleado[]=[

    new Empleado('harold', 'reyes', 'joder', 500000),
    new Empleado('kelly', 'sanchez', 'proferosa', 1300000),
    new Empleado('aleida', 'prado', 'modista', 1000000),
    new Empleado('john', 'mora', 'programador', 2000000)
  ];

  agregarEmpleadoServicio(empleado:Empleado){
    this.empleados.push(empleado);
  }

  constructor() { }
}
