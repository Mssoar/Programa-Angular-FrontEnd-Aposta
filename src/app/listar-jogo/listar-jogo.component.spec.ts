import { JogoService } from './../services/jogo.service';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarJogoComponent } from './listar-jogo.component';

describe('ListarJogoComponent', () => {
  let component: ListarJogoComponent;
  let fixture: ComponentFixture<ListarJogoComponent>;
  let h1: HTMLElement;
  let field: HTMLInputElement;
  let app: any; 

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [JogoService],
      declarations: [ ListarJogoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarJogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    app=fixture.debugElement.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  
  it('#Title - O titulo deve aparecer no HTML', () => {
    let expected:string = 'Listar Jogos';
    h1 = app.querySelector('h1');
    let result = h1.innerHTML;
    expect(result).toContain(expected);
  });

  it('#Botão enviar - O botão enviar deve aparecer no html', () => {
  let expected: string = 'Incluir Jogo';
  h1= app.querySelector('.incluirjogo');
  let result= h1.innerHTML;
  expect(result).toEqual(expected);

  });
});
