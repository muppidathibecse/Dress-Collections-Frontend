import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBrands } from './home-brands';

describe('HomeBrands', () => {
  let component: HomeBrands;
  let fixture: ComponentFixture<HomeBrands>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeBrands]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeBrands);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
