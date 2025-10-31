import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Upimethods } from './upimethods';

describe('Upimethods', () => {
  let component: Upimethods;
  let fixture: ComponentFixture<Upimethods>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Upimethods]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Upimethods);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
