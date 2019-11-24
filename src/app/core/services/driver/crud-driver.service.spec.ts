import { TestBed } from '@angular/core/testing';

import { CrudDriverService } from './crud-driver.service';

describe('CrudDriverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CrudDriverService = TestBed.get(CrudDriverService);
    expect(service).toBeTruthy();
  });
});
