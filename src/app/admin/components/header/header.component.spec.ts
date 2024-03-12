import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the header component', () => {
    expect(component).toBeTruthy();
  });

  it('should render the logo', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.logo').textContent).toContain('Logo');
  });

  it('should render the user name', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.user-name').textContent).toContain('Usuario');
  });

  it('should render the user image', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.user-image img').getAttribute('src')).toContain('assets/img_globals/perrito_perfil.jpeg');
  });
});
