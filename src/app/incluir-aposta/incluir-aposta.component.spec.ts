import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { ApostaService } from '../services/aposta.service';
import { ClienteService } from '../services/cliente.service';
import { JogoService } from '../services/jogo.service';

import { IncluirApostaComponent } from './incluir-aposta.component';

describe('IncluirApostaComponent', () => {
  let component: IncluirApostaComponent;
  let fixture: ComponentFixture<IncluirApostaComponent>;
  let h1: HTMLElement;
  let field: HTMLInputElement;
  let app: any; 

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, FormsModule],
      providers: [ApostaService, ClienteService, JogoService],
      declarations: [ IncluirApostaComponent ]
    })
    .compileComponents();
    fixture = TestBed.createComponent(IncluirApostaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    app = fixture.debugElement.nativeElement;
  });

  it('#Create - O componente deve ser criado', () => {
    expect(component).toBeTruthy();
  });

  it('#Title - O titulo deve constar no html', () => {
    let expected: string  = 'Incluir Aposta';
    h1 = app.querySelector('h1');
    let result = h1.innerHTML;
    expect(result).toContain(expected);

  });

  it('#Botao enviar - O botão enviar deve aparecer no html', () =>{
    let expected: string = 'Enviar';
    h1 = app.querySelector('#botaoEnviar');
    let result= h1.innerHTML;
    expect(result).toEqual(expected);
  });

});
