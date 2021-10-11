import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ResultadoService } from '../services/resultado.service';

import { ListarResultadoComponent } from './listar-resultado.component';

describe('ListarResultadoComponent', () => {
  let component: ListarResultadoComponent;
  let fixture: ComponentFixture<ListarResultadoComponent>;
  let h1: HTMLElement;
  let field: HTMLInputElement;
  let app: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[HttpClientModule],
      providers:[ResultadoService],
      declarations: [ ListarResultadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarResultadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    app = fixture.debugElement.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('#Title - O titulo deve aparecer no HTML', () => {
    let expected:string = 'Listar Resultado';
    h1 = app.querySelector('h1');
    let result = h1.innerHTML;
    expect(result).toContain(expected);
  });

  it('#Botão enviar - O botão enviar deve aparecer no html', () => {
  let expected: string = 'Incluir Resultado';
  h1= app.querySelector('.listarresultado');
  let result= h1.innerHTML;
  expect(result).toEqual(expected);

  });
});
