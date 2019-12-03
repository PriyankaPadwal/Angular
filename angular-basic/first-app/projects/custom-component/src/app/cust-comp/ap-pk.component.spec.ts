import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApPkComponent } from './ap-pk.component';

describe('ApPkComponent', () => {
  let component: ApPkComponent;
  let fixture: ComponentFixture<ApPkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApPkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApPkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
