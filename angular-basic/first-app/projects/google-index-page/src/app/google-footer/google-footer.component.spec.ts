import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleFooterComponent } from './google-footer.component';

describe('GoogleFooterComponent', () => {
  let component: GoogleFooterComponent;
  let fixture: ComponentFixture<GoogleFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoogleFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoogleFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
