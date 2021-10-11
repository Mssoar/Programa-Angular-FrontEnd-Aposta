import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubeService } from '../services/clube.service';

import { ListarClubeComponent } from './listar-clube.component';

describe('ListarClubeComponent', () => {
  let component: ListarClubeComponent;
  let fixture: ComponentFixture<ListarClubeComponent>;
  let h1: HTMLElement;
  
  let app: any; 

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[HttpClientModule],
      providers:[ClubeService],
      declarations: [ ListarClubeComponent ]
    })
    .compileComponents();
    fixture = TestBed.createComponent(ListarClubeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    app=fixture.debugElement.nativeElement;
  });

 
  
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('#Title - O titulo deve constar no html', () => {
    let expected: string  = 'Lista de Clubes';
    h1 = app.querySelector('h1');
    let result = h1.innerHTML;
    expect(result).toContain(expected);

  });

  it('#Botao listar - O botão enviar deve aparecer no html', () =>{
    let expected: string = 'Incluir Clube';
    h1 = app.querySelector('.listarclube');
    let result= h1.innerHTML;
    console.log("Teste:" + h1);
    expect(result).toEqual(expected);
  });
});
