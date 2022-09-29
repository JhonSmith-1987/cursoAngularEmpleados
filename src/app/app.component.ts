import { Empleado } from './empleado.Model';
import { Component } from '@angular/core';
import { ServicioEmpleadosService } from './servicio-empleados.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private miServicio:ServicioEmpleadosService){}

  titulo = 'Listado de empleados';

  empleados:Empleado[]=[

    new Empleado('harold', 'reyes', 'joder', 500000),
    new Empleado('kelly', 'sanchez', 'proferosa', 1300000),
    new Empleado('aleida', 'prado', 'modista', 1000000),
    new Empleado('john', 'mora', 'programador', 2000000)

  ];

  agregarEmpleado(){
    let miEmpleado = new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
    this.miServicio.muestraMensaje('nombre del empleado: ' + miEmpleado.nombre + '\napellido: ' + miEmpleado.apellido + '\ncargo: ' + miEmpleado.cargo + '\nsalario: ' + miEmpleado.salario);
    this.empleados.push(miEmpleado);
  }

  cuadroNombre:string='';
  cuadroApellido:string='';
  cuadroCargo:string='';
  cuadroSalario:number=0;
}
