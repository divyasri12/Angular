import { TestBed, inject } from '@angular/core/testing';

import { ServicejsonService } from './servicejson.service';

describe('ServicejsonService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServicejsonService]
    });
  });

  it('should be created', inject([ServicejsonService], (service: ServicejsonService) => {
    expect(service).toBeTruthy();
  }));
});
