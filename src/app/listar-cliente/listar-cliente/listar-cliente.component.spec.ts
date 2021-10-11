import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClienteService } from 'src/app/services/cliente.service';

import { ListarClienteComponent } from './listar-cliente.component';

describe('ListarClienteComponent', () => {
  let component: ListarClienteComponent;
  let fixture: ComponentFixture<ListarClienteComponent>;
  let h1: HTMLElement;
  let field: HTMLInputElement;
  let app: any; 

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[HttpClientModule],
      providers:[ClienteService],
      declarations: [ ListarClienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    app=fixture.debugElement.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('#Title - O titulo deve aparecer no HTML', () => {
    let expected:string = 'Listar Cliente';
    h1 = app.querySelector('h1');
    let result = h1.innerHTML;
    expect(result).toContain(expected);
  });

  it('#Botão enviar - O botão enviar deve aparecer no html', () => {
  let expected: string = 'Incluir Cliente';
  h1= app.querySelector('.listarcliente');
  let result= h1.innerHTML;
  expect(result).toEqual(expected);

  });

});
