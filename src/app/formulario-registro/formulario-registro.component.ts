import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';  
@Component({
  selector: 'app-formulario-registro',
  templateUrl: './formulario-registro.component.html',
  styleUrls: ['./formulario-registro.component.scss']
})
export class FormularioRegistroComponent implements OnInit{


  form:FormGroup;

  constructor(private formBuilder:FormBuilder){
    this.buildForm();
  }

  ngOnInit(): void {
  }

  private buildForm(){
    this.form = this.formBuilder.group({
      name: new FormControl('', [Validators.required]),
      dni: new FormControl('', [Validators.required]),
      direccion: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      marca: new FormControl('', [Validators.required]),
      modelo: new FormControl('', [Validators.required]),
      date: new FormControl('', [Validators.required]),
      horaIngreso: new FormControl('', [Validators.required, Validators.pattern("^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$")]),
      horaSalida: new FormControl('', [Validators.required, Validators.pattern("^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$")]),
      mecaninco: new FormControl('', [Validators.required]),
      tip_lavado: new FormControl('', Validators.required)
    })
  }

  

  save(event:Event) {
    event.preventDefault();
    if(this.form.valid){
      const value = this.form.value;
      console.log(value);
    }else{
      this.form.markAllAsTouched();
    }
  }


}
