/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { OneclickserviceService } from './oneclickservice.service';

describe('OneclickserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OneclickserviceService]
    });
  });

  it('should ...', inject([OneclickserviceService], (service: OneclickserviceService) => {
    expect(service).toBeTruthy();
  }));
});
