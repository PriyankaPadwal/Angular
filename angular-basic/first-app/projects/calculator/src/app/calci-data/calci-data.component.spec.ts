import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalciDataComponent } from './calci-data.component';

describe('CalciDataComponent', () => {
  let component: CalciDataComponent;
  let fixture: ComponentFixture<CalciDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalciDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalciDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
