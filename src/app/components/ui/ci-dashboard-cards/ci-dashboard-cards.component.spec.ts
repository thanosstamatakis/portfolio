import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CiDashboardCardsComponent } from './ci-dashboard-cards.component';

describe('CiDashboardCardsComponent', () => {
  let component: CiDashboardCardsComponent;
  let fixture: ComponentFixture<CiDashboardCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CiDashboardCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CiDashboardCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
