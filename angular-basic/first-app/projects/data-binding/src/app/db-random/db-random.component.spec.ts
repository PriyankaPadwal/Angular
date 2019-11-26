import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DbRandomComponent } from './db-random.component';

describe('DbRandomComponent', () => {
  let component: DbRandomComponent;
  let fixture: ComponentFixture<DbRandomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DbRandomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DbRandomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
