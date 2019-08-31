import { TestBed } from '@angular/core/testing';

import { ApiServiceService } from './api-service.service';
import { HttpClientModule } from '@angular/common/http';
import { GenericHttpService } from 'src/core/services/generic-http.service';

describe('ApiServiceService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [GenericHttpService, ApiServiceService]
    })
  );

  it('should be created', () => {
    const service: ApiServiceService = TestBed.get(ApiServiceService);
    expect(service).toBeTruthy();
  });
});
