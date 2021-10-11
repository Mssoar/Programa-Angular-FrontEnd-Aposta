import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { ClienteService } from '../services/cliente.service';

import { IncluirClienteComponent } from './incluir-cliente.component';

describe('IncluirClienteComponent', () => {
  let component: IncluirClienteComponent;
  let fixture: ComponentFixture<IncluirClienteComponent>;
  let h1: HTMLElement;
  let field: HTMLInputElement;

  let app: any; 

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, FormsModule],
      providers: [ClienteService],
      declarations: [ IncluirClienteComponent ]
    })
    .compileComponents();
    fixture = TestBed.createComponent(IncluirClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    app = fixture.debugElement.nativeElement;
  });


  it('#Create - O componente deve ser criado.', () => {
    expect(component).toBeTruthy();
  });


  it('#Title - O titulo deve constar no html', () => {
    let expected: string  = 'Incluir Cliente';
    h1 = app.querySelector('h1');
    let result = h1.innerHTML;
    expect(result).toContain(expected);

  });

  /*it('#Botao enviar - O botão enviar deve aparecer no html', () =>{
    let expected: string = 'Incluir Cliente';
    h1 = app.querySelector('#incluirCliente');
    let result= h1.innerHTML;
    expect(result).toEqual(expected);
  });

  
  it('#Input email - O input de email  deve aparecer no html', () =>{
    let expected: string = 'fulano';
    field = app.querySelector('#Email');
    console.log('input', field.innerText);
    let result= field.innerText;
    expect(result).toEqual(expected);
  });
*/

});
