import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LayoutComponent } from './layout.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('LayoutComponent', () => {
  let component: LayoutComponent;
  let fixture: ComponentFixture<LayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LayoutComponent],
      schemas: [NO_ERRORS_SCHEMA] // Ignora los errores de componentes desconocidos
    });
    fixture = TestBed.createComponent(LayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a container div with "container" class', () => {
    const containerDiv = fixture.nativeElement.querySelector('.container');
    expect(containerDiv).toBeTruthy();
  });

  it('should have a header div with "header" class', () => {
    const headerDiv = fixture.nativeElement.querySelector('.header');
    expect(headerDiv).toBeTruthy();
  });

  it('should have an app-header component inside the header div', () => {
    const appHeaderComponent = fixture.nativeElement.querySelector('.header app-header');
    expect(appHeaderComponent).toBeTruthy();
  });

  it('should have a main-container div with "main-container" class', () => {
    const mainContainerDiv = fixture.nativeElement.querySelector('.main-container');
    expect(mainContainerDiv).toBeTruthy();
  });

  it('should have a side-nav div with "side-nav" class', () => {
    const sideNavDiv = fixture.nativeElement.querySelector('.side-nav');
    expect(sideNavDiv).toBeTruthy();
  });

  it('should have an app-side-nav component inside the side-nav div', () => {
    const appSideNavComponent = fixture.nativeElement.querySelector('.side-nav app-side-nav');
    expect(appSideNavComponent).toBeTruthy();
  });

  it('should have a main div with "main" class', () => {
    const mainDiv = fixture.nativeElement.querySelector('.main');
    expect(mainDiv).toBeTruthy();
  });

  it('should have a router-outlet inside the main div', () => {
    const routerOutlet = fixture.nativeElement.querySelector('.main router-outlet');
    expect(routerOutlet).toBeTruthy();
  });
});
