import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SideNavComponent } from './side-nav.component';
import { RouterTestingModule } from '@angular/router/testing';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

describe('SideNavComponent', () => {
  let component: SideNavComponent;
  let fixture: ComponentFixture<SideNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SideNavComponent],
      imports: [RouterTestingModule, FontAwesomeModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the side nav component', () => {
    expect(component).toBeTruthy();
  });

  it('should render the dashboard link', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('[routerLink="pages/dashboard"]')).toBeTruthy();
  });

  it('should render the dashboard icon', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.fa-dashboard')).toBeTruthy(); // Assuming you have a class to style the dashboard icon
  });

  it('should render the dashboard label', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.nav-item:nth-child(1) p').textContent).toContain('Dashboard');
  });

  it('should render the registrados link', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('[routerLink="pages/registrados"]')).toBeTruthy();
  });

  it('should render the registrados icon', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.fa-location')).toBeTruthy(); // Assuming you have a class to style the location icon
  });

  it('should render the registrados label', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.nav-item:nth-child(2) p').textContent).toContain('Pendientes');
  });

  it('should render the confirmados link', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('[routerLink="pages/confirmados"]')).toBeTruthy();
  });

  it('should render the confirmados icon', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.fa-location')).toBeTruthy(); // Assuming you have a class to style the location icon
  });

  it('should render the confirmados label', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.nav-item:nth-child(3) p').textContent).toContain('Aceptados');
  });
});
