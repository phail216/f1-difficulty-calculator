import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DifficultyCalcComponent } from './difficulty-calc.component';

describe('DifficultyCalcComponent', () => {
  let component: DifficultyCalcComponent;
  let fixture: ComponentFixture<DifficultyCalcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DifficultyCalcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DifficultyCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
