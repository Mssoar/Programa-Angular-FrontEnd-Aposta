import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { ResultadoService } from './resultado.service';
import * as $ from 'jquery'

interface Resultado{
  idResultado: number;
  nome:string;
  vencedor:boolean;
  idJogo:number;
  idClube:number;
}

const testUrl = 'http://localhost:8080/resultado/listar';

describe('ResultadoService com ajax', () => {
  let service: ResultadoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule],
      providers: [ResultadoService]
    })
    service = TestBed.inject(ResultadoService);

  });
  it('Teste de Listar do componente com BackEnd', function(doneFn) {
    $.ajax({
        url: 'http://localhost:8080/resultado/listar',
        dataType: 'json',
        success: function (data: Resultado[], response: any) {
            // Here your expected using data
            expect(data.length).toBeGreaterThanOrEqual(0)
            doneFn();
        },
        error: function( data, response){
          expect(() => { "Erro ao Testar" }).toThrow("Erro ao testar")
        }
    });
  }); 
    

})

