import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleContainerComponent } from './google-container.component';

describe('GoogleContainerComponent', () => {
  let component: GoogleContainerComponent;
  let fixture: ComponentFixture<GoogleContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoogleContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoogleContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
