import { TestBed, inject } from '@angular/core/testing';

import { AngularAppServiceService } from './angular-app-service.service';

describe('AngularAppServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AngularAppServiceService]
    });
  });

  it('should be created', inject([AngularAppServiceService], (service: AngularAppServiceService) => {
    expect(service).toBeTruthy();
  }));
});
