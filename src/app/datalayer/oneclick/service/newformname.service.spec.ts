/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { NewformnameService } from './newformname.service';

describe('NewformnameService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NewformnameService]
    });
  });

  it('should ...', inject([NewformnameService], (service: NewformnameService) => {
    expect(service).toBeTruthy();
  }));
});
