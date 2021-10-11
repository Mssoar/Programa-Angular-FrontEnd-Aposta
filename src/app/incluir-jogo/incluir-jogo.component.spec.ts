import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { ClubeService } from '../services/clube.service';
import { EstadioService } from '../services/estadio.service';
import { JogoService } from '../services/jogo.service';

import { IncluirJogoComponent } from './incluir-jogo.component';

describe('IncluirJogoComponent', () => {
  let component: IncluirJogoComponent;
  let fixture: ComponentFixture<IncluirJogoComponent>;
  let h1: HTMLElement;
  let field: HTMLInputElement;
  let app: any; 

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, FormsModule],
      providers: [JogoService, ClubeService, EstadioService],
      declarations: [ IncluirJogoComponent ]
    })
    .compileComponents();
    fixture = TestBed.createComponent(IncluirJogoComponent);
    component = fixture.componentInstance;
    app=fixture.debugElement.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('#Title - O titulo deve aparecer no HTML', () => {
    let expected:string = 'Incluir Jogo';
    h1 = app.querySelector('h1');
    let result = h1.innerHTML;
    expect(result).toContain(expected);
  });

  it('#Botão enviar - O botão enviar deve aparecer no html', () => {
  let expected: string = 'Enviar';
  h1= app.querySelector('.btn');
  let result= h1.innerHTML;
  expect(result).toEqual(expected);
  });
});
