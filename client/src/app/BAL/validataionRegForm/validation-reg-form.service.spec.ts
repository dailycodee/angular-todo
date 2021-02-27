import { TestBed } from '@angular/core/testing';

import { ValidationRegFormService } from './validation-reg-form.service';

describe('ValidationRegFormService', () => {
  let service: ValidationRegFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValidationRegFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
