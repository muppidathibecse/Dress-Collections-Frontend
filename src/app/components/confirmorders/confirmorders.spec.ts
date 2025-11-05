import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Confirmorders } from './confirmorders';

describe('Confirmorders', () => {
  let component: Confirmorders;
  let fixture: ComponentFixture<Confirmorders>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Confirmorders]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Confirmorders);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
