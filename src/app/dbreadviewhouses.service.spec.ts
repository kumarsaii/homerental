import { TestBed } from '@angular/core/testing';

import { DbreadviewhousesService } from './dbreadviewhouses.service';

describe('DbreadviewhousesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DbreadviewhousesService = TestBed.get(DbreadviewhousesService);
    expect(service).toBeTruthy();
  });
});
