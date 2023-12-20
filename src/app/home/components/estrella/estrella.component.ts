// estrella.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-estrella',
  templateUrl: './estrella.component.html',
  styleUrls: []
})
export class EstrellaComponent {
  @Input() isFilled: boolean;
  @Output() estrellaClicked = new EventEmitter<void>();
  @Output() archivoCargado = new EventEmitter<File>();
  @Output() enviarCalificacionEvent = new EventEmitter<void>();

  cargaDocumentosMostrada: boolean = false;

  // Mantén una referencia al archivo seleccionado
  archivoSeleccionado: File;

  onStarClick(): void {
    this.estrellaClicked.emit();
    // Mostrar la carga de documentos solo cuando se selecciona la primera estrella
    if (this.isFilled && !this.cargaDocumentosMostrada) {
      this.cargaDocumentosMostrada = true;
    }
  }

  // Agrega esta función para manejar la carga de archivos
  onArchivoCargado(archivo: File): void {
    // Solo emitir el evento si hay un archivo seleccionado
    if (this.archivoSeleccionado) {
      this.archivoCargado.emit(this.archivoSeleccionado);
    }
  }

  // Agrega esta función para manejar el evento de enviar calificación
  enviarCalificacion(): void {
    if (this.isFilled && this.cargaDocumentosMostrada) {
    this.enviarCalificacionEvent.emit();
  }
  
}
}
