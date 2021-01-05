import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillGenComponent } from './bill-gen.component';

describe('BillGenComponent', () => {
  let component: BillGenComponent;
  let fixture: ComponentFixture<BillGenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillGenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillGenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
