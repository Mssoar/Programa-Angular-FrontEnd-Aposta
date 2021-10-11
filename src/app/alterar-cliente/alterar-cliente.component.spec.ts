import { ClienteService } from './../services/cliente.service';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlterarClienteComponent } from './alterar-cliente.component';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';

describe('AlterarClienteComponent', () => {
  let component: AlterarClienteComponent;
  let fixture: ComponentFixture<AlterarClienteComponent>;
  let h1: HTMLElement;

  let app: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterModule, HttpClientModule, FormsModule],
      providers: [
        { provide: ActivatedRoute,
          useValue: { snapshot: { queryParamMap: {  get(): number {  return 6;  }   }    }  }}, 
          ClienteService ],
      declarations: [ AlterarClienteComponent ]
    })
    .compileComponents();
    fixture = TestBed.createComponent(AlterarClienteComponent);
    component = fixture.debugElement.componentInstance;
    app = fixture.debugElement.nativeElement;
 
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('#Title - O titulo deve constar no html', () => {
    let expected: string  = 'Alterar Cliente';
    h1 = app.querySelector('h1');
    let result = h1.innerHTML;
    expect(result).toContain(expected);

  });

  it('#Botao enviar - O botão enviar deve aparecer no html', () =>{
    let expected: string = 'Enviar';
    h1 = app.querySelector('.btn');
    let result= h1.innerHTML;
    expect(result).toEqual(expected);
  });
});
