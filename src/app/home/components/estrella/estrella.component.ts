
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-estrella',
  templateUrl: './estrella.component.html',
  styleUrls: ['./estrella.component.scss']
})
export class EstrellaComponent {
  @Input() isFilled: boolean;
  @Output() estrellaClicked = new EventEmitter<void>();
  @Output() archivoCargado = new EventEmitter<File>();
  @Output() enviarCalificacionEvent = new EventEmitter<void>();

  cargaDocumentosMostrada: boolean = false;
  archivoSeleccionado: File;
  onStarClick(): void {
    this.estrellaClicked.emit();
    if (this.isFilled && !this.cargaDocumentosMostrada) {
      this.cargaDocumentosMostrada = true;
    }
  }
  onArchivoCargado(archivo: File): void { //carga de archivo, evento del archivo seleccionado
    if (this.archivoSeleccionado) {
      this.archivoCargado.emit(this.archivoSeleccionado);
    }
  }
  enviarCalificacion(): void {
    if (this.isFilled && this.cargaDocumentosMostrada) {
    this.enviarCalificacionEvent.emit();
  }
  
}
}
