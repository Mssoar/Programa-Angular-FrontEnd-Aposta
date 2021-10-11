import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { ClubeService } from '../services/clube.service';

import { IncluirClubeComponent } from './incluir-clube.component';

describe('IncluirClubeComponent', () => {
  let component: IncluirClubeComponent;
  let fixture: ComponentFixture<IncluirClubeComponent>;
  let h1: HTMLElement;
  let field: HTMLInputElement;

  let app: any; 


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, FormsModule],
      providers: [ClubeService],
      declarations: [ IncluirClubeComponent ],

    })
    .compileComponents();
    fixture = TestBed.createComponent(IncluirClubeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    app = fixture.debugElement.nativeElement;
  });
  
  it('#Create - O componente deve ser criado', () => {
    expect(component).toBeTruthy();
  });

  it('#Title - O titulo deve constar no html', () => {
    let expected: string  = 'Incluir Clube';
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
