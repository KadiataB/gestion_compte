import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { paramsGuard } from './params.guard';

describe('paramsGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => paramsGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
