import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApMnComponent } from './ap-mn.component';

describe('ApMnComponent', () => {
  let component: ApMnComponent;
  let fixture: ComponentFixture<ApMnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApMnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApMnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
