import { TestBed } from '@angular/core/testing';

import { AuthgarudGuard } from './authgarud.guard';

describe('AuthgarudGuard', () => {
  let guard: AuthgarudGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthgarudGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
