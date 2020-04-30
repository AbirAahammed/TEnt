import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';

import { CrudInterfaceComponent } from './crud-interface.component';

describe('CrudInterfaceComponent', () => {
  let component: CrudInterfaceComponent;
  let fixture: ComponentFixture<CrudInterfaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudInterfaceComponent ],
      imports: [
        NoopAnimationsModule,
        MatPaginatorModule,
        MatSortModule,
        MatTableModule,
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudInterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
