import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { ApostaService } from './aposta.service';

describe('ApostaService', () => {
  let service: ApostaService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [ApostaService]
    });
    service = TestBed.inject(ApostaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
