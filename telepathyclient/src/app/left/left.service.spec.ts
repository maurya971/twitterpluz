import { TestBed, inject } from '@angular/core/testing';

import { LeftService } from './left.service';

describe('LoginService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LeftService]
    });
  });

  it('should be created', inject([LeftService], (service: LeftService) => {
    expect(service).toBeTruthy();
  }));
});
