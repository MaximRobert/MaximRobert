import { TestBed } from '@angular/core/testing';

import { Checkout.ServiceService } from './checkout.service.service';

describe('Checkout.ServiceService', () => {
  let service: Checkout.ServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Checkout.ServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
