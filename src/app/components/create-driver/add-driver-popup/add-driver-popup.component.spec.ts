import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDriverPopupComponent } from './add-driver-popup.component';

describe('AddDriverPopupComponent', () => {
  let component: AddDriverPopupComponent;
  let fixture: ComponentFixture<AddDriverPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDriverPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDriverPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
