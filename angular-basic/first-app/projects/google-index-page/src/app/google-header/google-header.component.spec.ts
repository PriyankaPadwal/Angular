import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleHeaderComponent } from './google-header.component';

describe('GoogleHeaderComponent', () => {
  let component: GoogleHeaderComponent;
  let fixture: ComponentFixture<GoogleHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoogleHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoogleHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
