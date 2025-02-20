import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Contenst1Component } from './contenst1.component';

describe('Contenst1Component', () => {
  let component: Contenst1Component;
  let fixture: ComponentFixture<Contenst1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Contenst1Component]
    });
    fixture = TestBed.createComponent(Contenst1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
