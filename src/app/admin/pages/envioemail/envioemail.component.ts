import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import {CarwashService} from "../../../carwash.service";


@Component({
  selector: 'app-envioemail',
  templateUrl: './envioemail.component.html',
  styleUrls: ['./envioemail.component.scss']
})
export class EnvioemailComponent implements OnInit {
  public registros: any;


  constructor(
    public CarwashService: CarwashService,
    public router: Router
  ) { }

  ngOnInit(): void {
    this.traerRegistrosPendientes();
  }

  traerRegistrosPendientes() {
    this.CarwashService.getEstadoPendiente().then(data => this.registros = data);
  }

  redirectToMostrarDetalle(_id:number){
    this.router.navigate(['admin/pages/verDetalles', {_id:_id}])
  }

  async rechazarSolicitud(idSolicitud: string) {
    try {
      await this.CarwashService.rechazarSolicitud(idSolicitud);
      console.log('Solicitud rechazada correctamente');
      this.traerRegistrosPendientes();
    } catch (error) {
      console.error('Error al rechazar la solicitud:', error);
    }
  }

  async impagoSolicitud(idSolicitud: string) {
    try {
      await this.CarwashService.impagoSolicitud(idSolicitud);
      console.log('Solicitud aceptada correctamente');
      this.traerRegistrosPendientes();
      //this.redirectToCalificacionPago(idSolicitud);
    } catch (error) {
      console.error('Error al aceptar la solicitud:', error);
    }
  }

  redirectToCalificacionPago(_id: string){
    this.router.navigate(['/calificacionPago', {_id:_id}])
  }

}
