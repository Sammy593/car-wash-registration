import { Component } from '@angular/core';

@Component({
  selector: 'app-calificacion-servicio',
  templateUrl: './calificacion-servicio.component.html',
  styleUrls: ['./calificacion-servicio.component.scss']
})
export class CalificacionServicioComponent {
  
  stars: boolean[] = [false, false, false, false, false];
  archivoSeleccionado: File;

  onStarClicked(index: number): void {
    this.stars.fill(false);
    this.stars.fill(true, 0, index + 1);
  }
  onArchivoCargado(archivo: File): void {
    this.archivoSeleccionado = archivo;
    console.log('Archivo cargado:', archivo);
  }
  enviarCalificacion(): void {
    // enviar la calificación y el comprobante
    console.log('Calificación y comprobante enviados');
  }
}
