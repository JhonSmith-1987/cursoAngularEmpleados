import { Component, OnInit } from '@angular/core';
import { Empleado } from '../empleado.Model';
import { EmpleadosService } from '../empleados.service';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private miServicio:ServicioEmpleadosService, private empleadosService:EmpleadosService) { }

  ngOnInit(): void {
    this.empleados = this.empleadosService.empleados;
  }

  titulo = 'Listado de empleados';

  empleados:Empleado[]=[];

  agregarEmpleado(){
    let miEmpleado = new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
    this.miServicio.muestraMensaje('nombre del empleado: ' + miEmpleado.nombre + '\napellido: ' + miEmpleado.apellido + '\ncargo: ' + miEmpleado.cargo + '\nsalario: ' + miEmpleado.salario);
    this.empleadosService.agregarEmpleadoServicio(miEmpleado)
  }

  cuadroNombre:string='';
  cuadroApellido:string='';
  cuadroCargo:string='';
  cuadroSalario:number=0;

}
