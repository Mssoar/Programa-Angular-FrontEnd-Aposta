import { ResultadoService } from './../services/resultado.service';
import { ClubeService } from './../services/clube.service';
import { JogoService } from './../services/jogo.service';
import {  HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncluirResultadoComponent } from './incluir-resultado.component';

describe('IncluirResultadoComponent', () => {
  let component: IncluirResultadoComponent;
  let fixture: ComponentFixture<IncluirResultadoComponent>;
  let h1: HTMLElement;
  let field: HTMLInputElement;
  let app: any; 

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, FormsModule],
      providers: [JogoService, ClubeService, ResultadoService],
      declarations: [ IncluirResultadoComponent ]
    })
    .compileComponents();   
  });
  beforeEach(() => {
    fixture = TestBed.createComponent(IncluirResultadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    app=fixture.debugElement.nativeElement;
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('#Title - O titulo deve aparecer no HTML', () => {
    let expected:string = 'Incluir Resultado';
    h1 = app.querySelector('h1');
    let result = h1.innerHTML;
    expect(result).toContain(expected);
  });

  it('#Botão enviar - O botão enviar deve aparecer no html', () => {
  let expected: string = 'Enviar';
  h1= app.querySelector('.incluirresultado');
  let result= h1.innerHTML;
  expect(result).toEqual(expected);

  });
});
