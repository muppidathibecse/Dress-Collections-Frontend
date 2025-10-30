import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeOffers } from './home-offers';

describe('HomeOffers', () => {
  let component: HomeOffers;
  let fixture: ComponentFixture<HomeOffers>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeOffers]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeOffers);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
