import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { JogoService } from './jogo.service';

describe('JogoService', () => {
  let service: JogoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [JogoService]

    });
    service = TestBed.inject(JogoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
