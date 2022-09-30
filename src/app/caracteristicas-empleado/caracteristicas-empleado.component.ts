import { ServicioEmpleadosService } from './../servicio-empleados.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-caracteristicas-empleado',
  templateUrl: './caracteristicas-empleado.component.html',
  styleUrls: ['./caracteristicas-empleado.component.css']
})
export class CaracteristicasEmpleadoComponent implements OnInit {

  @Output() caracteristicasEmpleados = new EventEmitter<string>();

  agregaCaracteristicas(value: string) {
    this.miServicio.muestraMensaje(value)
    this.caracteristicasEmpleados.emit(value);
  }

  constructor(private miServicio:ServicioEmpleadosService) { }

  ngOnInit(): void {
  }

}
