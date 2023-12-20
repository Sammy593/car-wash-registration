import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalificacionServicioComponent } from './calificacion-servicio.component';

describe('CalificacionServicioComponent', () => {
  let component: CalificacionServicioComponent;
  let fixture: ComponentFixture<CalificacionServicioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CalificacionServicioComponent]
    });
    fixture = TestBed.createComponent(CalificacionServicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
