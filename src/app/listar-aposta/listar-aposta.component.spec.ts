import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApostaService } from '../services/aposta.service';

import { ListarApostaComponent } from './listar-aposta.component';

describe('ListarApostaComponent', () => {
  let component: ListarApostaComponent;
  let fixture: ComponentFixture<ListarApostaComponent>;
  let h1: HTMLElement;
  let field: HTMLInputElement;
  let app: any; 


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[HttpClientModule],
      providers:[ApostaService],
      declarations: [ ListarApostaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarApostaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    app = fixture.debugElement.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('#Title - O titulo deve constar no html', () => {
    let expected: string  = 'Lista de Apostas';
    h1 = app.querySelector('h1');
    let result = h1.innerHTML;
    expect(result).toContain(expected);

  });

  it('#Botao enviar - O botão enviar deve aparecer no html', () =>{
    let expected: string = 'Incluir Apostas';
    h1 = app.querySelector('.incluiraposta');
    let result= h1.innerHTML;
    expect(result).toEqual(expected);
  });

});
