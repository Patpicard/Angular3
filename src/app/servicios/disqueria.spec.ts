import { TestBed } from '@angular/core/testing';

import { Disqueria } from './disqueria';

describe('Disqueria', () => {
  let service: Disqueria;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Disqueria);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
