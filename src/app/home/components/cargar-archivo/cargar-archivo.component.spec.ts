import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { CargarArchivoComponent } from './cargar-archivo.component';

describe('CargarArchivoComponent', () => {
  let component: CargarArchivoComponent;
  let fixture: ComponentFixture<CargarArchivoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CargarArchivoComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CargarArchivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should emit the selected file', () => {
    const file = new File(['sample content'], 'sample.txt');
    const event = { target: { files: [file] } };
    spyOn(component.archivoCargado, 'emit');
    
    component.onFileSelected(event);

    expect(component.archivoCargado.emit).toHaveBeenCalledWith(file);
  });
});
