import { EmpleadosService } from './empleados.service';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmpleadoHijoCComponent } from './empleado-hijo-c/empleado-hijo-c.component';
import { CaracteristicasEmpleadoComponent } from './caracteristicas-empleado/caracteristicas-empleado.component';
import { ServicioEmpleadosService } from './servicio-empleados.service';
import { HomeComponent } from './home/home.component';
import { ProyectoComponent } from './proyecto/proyecto.component';
import { QuienesComponent } from './quienes/quienes.component';
import { ContactoComponent } from './contacto/contacto.component';
import { RouterModule, Routes } from '@angular/router';
import { ActualizaEmpleadoComponent } from './actualiza-empleado/actualiza-empleado.component';

const appRoutes:Routes=[
  {path:'', component:HomeComponent},
  {path:'proyectos', component:ProyectoComponent},
  {path:'quienes', component:QuienesComponent},
  {path:'contacto', component:ContactoComponent},
  {path:'actualizar_empleado/:id', component:ActualizaEmpleadoComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    EmpleadoHijoCComponent,
    CaracteristicasEmpleadoComponent,
    HomeComponent,
    ProyectoComponent,
    QuienesComponent,
    ContactoComponent,
    ActualizaEmpleadoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ServicioEmpleadosService, EmpleadosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
