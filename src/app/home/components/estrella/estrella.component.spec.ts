import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { EstrellaComponent } from './estrella.component';

describe('EstrellaComponent', () => {
  let component: EstrellaComponent;
  let fixture: ComponentFixture<EstrellaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EstrellaComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstrellaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should emit estrellaClicked event on star click', () => {
    spyOn(component.estrellaClicked, 'emit');
    component.onStarClick();
    expect(component.estrellaClicked.emit).toHaveBeenCalled();
  });

  it('should set cargaDocumentosMostrada to true when star is clicked if isFilled is true', () => {
    component.isFilled = true;
    component.onStarClick();
    expect(component.cargaDocumentosMostrada).toBeTruthy();
  });

  it('should not set cargaDocumentosMostrada to true when star is clicked if isFilled is false', () => {
    component.isFilled = false;
    component.onStarClick();
    expect(component.cargaDocumentosMostrada).toBeFalsy();
  });

  it('should emit archivoCargado event with the selected file when onArchivoCargado is called', () => {
    const file = new File(['sample content'], 'sample.txt');
    spyOn(component.archivoCargado, 'emit');
    component.archivoSeleccionado = file;
    component.onArchivoCargado(file);
    expect(component.archivoCargado.emit).toHaveBeenCalledWith(file);
  });

  it('should emit enviarCalificacionEvent when enviarCalificacion is called and isFilled and cargaDocumentosMostrada are true', () => {
    component.isFilled = true;
    component.cargaDocumentosMostrada = true;
    spyOn(component.enviarCalificacionEvent, 'emit');
    component.enviarCalificacion();
    expect(component.enviarCalificacionEvent.emit).toHaveBeenCalled();
  });

  it('should not emit enviarCalificacionEvent when enviarCalificacion is called and isFilled is false', () => {
    component.isFilled = false;
    component.cargaDocumentosMostrada = true;
    spyOn(component.enviarCalificacionEvent, 'emit');
    component.enviarCalificacion();
    expect(component.enviarCalificacionEvent.emit).not.toHaveBeenCalled();
  });

  it('should not emit enviarCalificacionEvent when enviarCalificacion is called and cargaDocumentosMostrada is false', () => {
    component.isFilled = true;
    component.cargaDocumentosMostrada = false;
    spyOn(component.enviarCalificacionEvent, 'emit');
    component.enviarCalificacion();
    expect(component.enviarCalificacionEvent.emit).not.toHaveBeenCalled();
  });
});
