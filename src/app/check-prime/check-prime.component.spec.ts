import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckPrimeComponent } from './check-prime.component';

describe('CheckPrimeComponent', () => {
  let component: CheckPrimeComponent;
  let fixture: ComponentFixture<CheckPrimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckPrimeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckPrimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
