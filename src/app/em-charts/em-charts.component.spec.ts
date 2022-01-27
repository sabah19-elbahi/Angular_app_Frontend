import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmChartsComponent } from './em-charts.component';

describe('EmChartsComponent', () => {
  let component: EmChartsComponent;
  let fixture: ComponentFixture<EmChartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmChartsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
