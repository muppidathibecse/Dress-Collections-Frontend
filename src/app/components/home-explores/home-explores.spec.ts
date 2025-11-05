import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeExplores } from './home-explores';

describe('HomeExplores', () => {
  let component: HomeExplores;
  let fixture: ComponentFixture<HomeExplores>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeExplores]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeExplores);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
