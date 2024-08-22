import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerChartComponent } from './manager-chart.component';

describe('ManagerChartComponent', () => {
  let component: ManagerChartComponent;
  let fixture: ComponentFixture<ManagerChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManagerChartComponent]
    });
    fixture = TestBed.createComponent(ManagerChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
