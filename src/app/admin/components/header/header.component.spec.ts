import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the header component', () => {
    expect(component).toBeTruthy();
  });

  it('should have a logo with correct styles', () => {
    const logoElement: HTMLElement = fixture.nativeElement.querySelector('.logo');
    expect(logoElement).toBeTruthy();
    expect(getComputedStyle(logoElement).fontSize).toBe('20px');
  });

  it('should have a user section with correct styles', () => {
    const userElement: HTMLElement = fixture.nativeElement.querySelector('.user');
    expect(userElement).toBeTruthy();
    expect(getComputedStyle(userElement).display).toBe('flex');
    expect(getComputedStyle(userElement).alignItems).toBe('center');
  });

  it('should have a user image with correct styles', () => {
    const userImageElement: HTMLElement = fixture.nativeElement.querySelector('.user-image');
    expect(userImageElement).toBeTruthy();
    expect(getComputedStyle(userImageElement).width).toBe('50px');
    expect(getComputedStyle(userImageElement).height).toBe('50px');
    expect(getComputedStyle(userImageElement).borderRadius).toBe('50%');
    expect(getComputedStyle(userImageElement).border).toBe('2px solid rgb(255, 255, 255)');
    expect(getComputedStyle(userImageElement).backgroundColor).toBe('rgb(11, 107, 185)');
  });

  it('should have a user image with correct image inside', () => {
    const userImageElement: HTMLElement = fixture.nativeElement.querySelector('.user-image img');
    expect(userImageElement).toBeTruthy();
    expect(getComputedStyle(userImageElement).width).toBe('46px');
    expect(getComputedStyle(userImageElement).height).toBe('50px');
    expect(getComputedStyle(userImageElement).borderRadius).toBe('50%');
    expect(getComputedStyle(userImageElement).border).toBe('2px solid rgb(255, 255, 255)');
  });
});
