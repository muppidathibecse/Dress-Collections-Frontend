import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bags } from './bags';

describe('Bags', () => {
  let component: Bags;
  let fixture: ComponentFixture<Bags>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bags]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bags);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
