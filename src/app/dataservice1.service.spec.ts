import { TestBed } from '@angular/core/testing';

import { Dataservice1Service } from './dataservice1.service';

describe('Dataservice1Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Dataservice1Service = TestBed.get(Dataservice1Service);
    expect(service).toBeTruthy();
  });
});
