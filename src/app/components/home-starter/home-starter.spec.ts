import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeStarter } from './home-starter';

describe('HomeStarter', () => {
  let component: HomeStarter;
  let fixture: ComponentFixture<HomeStarter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeStarter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeStarter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
