import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import {CarwashService} from "../../../carwash.service";


@Component({
  selector: 'app-aceptados',
  templateUrl: './aceptados.component.html',
  styleUrls: ['./aceptados.component.scss']
})
export class AceptadosComponent implements OnInit {
  public registros: any;


  constructor(
    public CarwashService: CarwashService,
    public router: Router
  ) { }

  ngOnInit(): void {
    this.traerRegistrosPendientes();
  }

  traerRegistrosPendientes() {
    this.CarwashService.getEstadoAceptado().then(data => this.registros = data);
  }

  redirectToMostrarDetalle(_id:number){
    this.router.navigate(['/admin/pages/confirmadosDetalles', {_id:_id}])
  }

  async aceptarSolicitud(idSolicitud: string) {
    try {
      await this.CarwashService.aceptarSolicitud(idSolicitud);
      console.log('Solicitud aceptada correctamente');
      this.traerRegistrosPendientes();
    } catch (error) {
      console.error('Error al aceptar la solicitud:', error);
    }
  }

  async rechazarSolicitud(idSolicitud: string) {
    try {
      await this.CarwashService.rechazarPago(idSolicitud);

      this.traerRegistrosPendientes();
    } catch (error) {
      console.error('Error al aceptar la solicitud:', error);
    }
  }

}
