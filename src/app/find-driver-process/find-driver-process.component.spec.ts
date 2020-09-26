import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindDriverProcessComponent } from './find-driver-process.component';

describe('FindDriverProcessComponent', () => {
  let component: FindDriverProcessComponent;
  let fixture: ComponentFixture<FindDriverProcessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindDriverProcessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindDriverProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
