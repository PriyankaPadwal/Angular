import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleNavComponent } from './google-nav.component';

describe('GoogleNavComponent', () => {
  let component: GoogleNavComponent;
  let fixture: ComponentFixture<GoogleNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoogleNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoogleNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
