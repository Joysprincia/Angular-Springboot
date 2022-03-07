import { TestBed } from '@angular/core/testing';

import { LoginformserviceService } from './loginformservice.service';

describe('LoginformserviceService', () => {
  let service: LoginformserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginformserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
