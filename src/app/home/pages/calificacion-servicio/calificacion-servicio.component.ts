import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import {CarwashService} from "../../../carwash.service";


@Component({
  selector: 'app-calificacion-servicio',
  templateUrl: './calificacion-servicio.component.html',
  styleUrls: ['./calificacion-servicio.component.scss']
})
export class CalificacionServicioComponent implements OnInit{

  imagenCargada: any;
  calificacion: number = 0;
  archivo!: File;
  idSolicitud: string | null = "";

  mostrarMensaje = false;
  mostrarSubirArchivo = false;
  form: FormGroup;
  archivoSeleccionado = false;

  constructor(private formBuilder: FormBuilder, private carwashService: CarwashService, private route: ActivatedRoute) {
    this.form = this.formBuilder.group({
      //recaptcha: ['', Validators.required],
      calificacion: ['', Validators.required],
      archivo: ['', Validators.required]
    });
  }
  ngOnInit(): void {
    this.idSolicitud = this.route.snapshot.paramMap.get('_id');
  }

  calificar(): void {
    this.mostrarMensaje = true;
    this.mostrarSubirArchivo = true;
  }


  enviarArchivo(event: any): void {
    this.archivoSeleccionado = true;
    this.imagenCargada = event.target.files[0];
  }


  // Método para verificar si el botón de enviar debe estar habilitado o no
  puedeEnviar(): boolean {
    return this.form.valid && this.archivoSeleccionado;
  }


  // Método para enviar el formulario
  enviarFormulario(event: any): void {
    event.preventDefault();
    
    if (this.puedeEnviar() && this.idSolicitud != null && this.imagenCargada) { // Verifica que this.imagenCargada no sea undefined
      const value = this.form.value;
    
      const formData = new FormData();
      formData.append('idSolicitud', this.idSolicitud);
      formData.append('calificacion', value.calificacion.toString());
    
      // Verifica que this.imagenCargada no sea undefined antes de acceder a su propiedad name
      if (this.imagenCargada && this.imagenCargada.name) {
        formData.append('archivo', this.imagenCargada, this.imagenCargada.name);
    
        console.log(formData);
    
        this.carwashService.actualizarPagoSolicitud(formData).subscribe(
          (response) => {
            console.log(response);
            Swal.fire({
              icon: 'success',
              title: 'Registro completo',
              showConfirmButton: false,
              timer: 1500
            });
          },
          (error) => {
            console.error(error);
          });
      } else {
        console.error('La imagen cargada es undefined o no tiene una propiedad "name".');
      }
    } else {
      this.form.markAllAsTouched();
      console.log("Error");
      Swal.fire({
        icon: 'error',
        title: 'Complete el formulario',
        showConfirmButton: false,
        timer: 1500
      });
    }
  }
}  