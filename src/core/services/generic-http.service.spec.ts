import { TestBed } from '@angular/core/testing';

import { GenericHttpService } from './generic-http.service';
import { HttpClientModule } from '@angular/common/http';

describe('GenericHttpService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [GenericHttpService]
    })
  );

  it('should be created', () => {
    const service: GenericHttpService = TestBed.get(GenericHttpService);
    expect(service).toBeTruthy();
  });
});
