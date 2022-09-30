import { ActivatedRoute, Route, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Empleado } from '../empleado.Model';
import { EmpleadosService } from '../empleados.service';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-actualiza-empleado',
  templateUrl: './actualiza-empleado.component.html',
  styleUrls: ['./actualiza-empleado.component.css']
})
export class ActualizaEmpleadoComponent implements OnInit {

  constructor(private router:Router, private route:ActivatedRoute, private miServicio:ServicioEmpleadosService, private empleadosService:EmpleadosService) { }

  ngOnInit(): void {
    this.empleados = this.empleadosService.empleados;
    this.indice = this.route.snapshot.params['id'];
    let empleado:Empleado=this.empleadosService.encontrarEmpleadoService(this.indice);
    this.cuadroNombre = empleado.nombre;
    this.cuadroApellido = empleado.apellido;
    this.cuadroCargo = empleado.cargo;
    this.cuadroSalario = empleado.salario;

    this.accion = this.route.snapshot.queryParams['accion'];

  }

  cuadroNombre:string='';
  cuadroApellido:string='';
  cuadroCargo:string='';
  cuadroSalario:number=0;

  titulo = 'Listado de empleados';

  indice:number;

  empleados:Empleado[]=[];

  accion:string;
  mensajeBoton:string = this.route.snapshot.queryParams['accion'];


  actualizaElimina(){
    if (this.accion == 'actualizar') {
      let miEmpleado = new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
      this.miServicio.muestraMensaje('nombre del empleado: ' + miEmpleado.nombre + '\napellido: ' + miEmpleado.apellido + '\ncargo: ' + miEmpleado.cargo + '\nsalario: ' + miEmpleado.salario);
      this.empleadosService.actualizarEmpleadoService(this.indice, miEmpleado);
      this.router.navigate(['']);
    }else{
      this.empleadosService.eliminarEmpleadoService(this.indice);
      this.router.navigate(['']);
    }
  }

  volverHome(){
    this.router.navigate(['']);
  }

}
