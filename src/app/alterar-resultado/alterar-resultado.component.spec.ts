import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ResultadoService } from '../services/resultado.service';

import { AlterarResultadoComponent } from './alterar-resultado.component';

describe('AlterarResultadoComponent', () => {
  let component: AlterarResultadoComponent;
  let fixture: ComponentFixture<AlterarResultadoComponent>;
  let h1: HTMLElement;
  let field: HTMLInputElement;
  let app: any; 
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterModule, HttpClientModule, FormsModule],
      providers: [
        { provide: ActivatedRoute,
          useValue: { snapshot: { queryParamMap: {  get(): number {  return 6;  }   }    }  }}, 
          ResultadoService ],
      declarations: [ AlterarResultadoComponent ]
    })
    .compileComponents();
    fixture = TestBed.createComponent(AlterarResultadoComponent);
    component = fixture.componentInstance;  
    app=fixture.debugElement.nativeElement;
 
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('#Title - O titulo deve aparecer no HTML', () => {
    let expected:string = 'Alterar Resultado';
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
