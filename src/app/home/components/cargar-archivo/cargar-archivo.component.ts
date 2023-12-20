// cargar-archivo.component.ts
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cargar-archivo',
  templateUrl: './cargar-archivo.component.html',
  styleUrls: []
})
export class CargarArchivoComponent {
  @Output() archivoCargado = new EventEmitter<File>();

  onFileSelected(event: any): void {
    const archivo: File = event.target.files[0];
    this.archivoCargado.emit(archivo);
  }
}
