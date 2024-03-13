import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FormularioRegistroComponent } from './formulario-registro.component';
import {NgxCaptchaModule} from "ngx-captcha";

describe('FormularioRegistroComponent', () => {
  let component: FormularioRegistroComponent;
  let fixture: ComponentFixture<FormularioRegistroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormularioRegistroComponent],
      imports: [HttpClientModule, RouterTestingModule, FormsModule, ReactiveFormsModule, NgxCaptchaModule], 
    });
    fixture = TestBed.createComponent(FormularioRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});