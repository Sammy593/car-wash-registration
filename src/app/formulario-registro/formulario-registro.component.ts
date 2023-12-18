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
      
    })
  }

  

}
