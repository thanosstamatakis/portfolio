import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SophiaSkillsComponent } from './sophia-skills.component';

describe('SophiaSkillsComponent', () => {
  let component: SophiaSkillsComponent;
  let fixture: ComponentFixture<SophiaSkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SophiaSkillsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SophiaSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
