import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SomChartsComponent } from './som-charts.component';

describe('SomChartsComponent', () => {
  let component: SomChartsComponent;
  let fixture: ComponentFixture<SomChartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SomChartsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SomChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
