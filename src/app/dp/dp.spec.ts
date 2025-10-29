import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dp } from './dp';

describe('Dp', () => {
  let component: Dp;
  let fixture: ComponentFixture<Dp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Dp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
