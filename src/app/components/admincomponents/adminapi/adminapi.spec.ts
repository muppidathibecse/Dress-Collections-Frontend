import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Adminapi } from './adminapi';

describe('Adminapi', () => {
  let component: Adminapi;
  let fixture: ComponentFixture<Adminapi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Adminapi]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Adminapi);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
