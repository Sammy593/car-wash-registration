import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { LayoutComponent2 } from './layout.component';

describe('LayoutComponent', () => {
  let component: LayoutComponent2;
  let fixture: ComponentFixture<LayoutComponent2>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [LayoutComponent2],
      imports: [RouterTestingModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutComponent2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should render router-outlet', () => {
    const element: HTMLElement = fixture.nativeElement;
    const routerOutlet = element.querySelector('router-outlet');
    expect(routerOutlet).toBeTruthy();
  });
});
