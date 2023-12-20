import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvioemailComponent } from './envioemail.component';

describe('EnvioemailComponent', () => {
  let component: EnvioemailComponent;
  let fixture: ComponentFixture<EnvioemailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnvioemailComponent]
    });
    fixture = TestBed.createComponent(EnvioemailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
