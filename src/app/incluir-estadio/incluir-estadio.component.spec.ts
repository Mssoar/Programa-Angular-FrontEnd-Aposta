import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { EstadioService } from '../services/estadio.service';

import { IncluirEstadioComponent } from './incluir-estadio.component';

describe('IncluirEstadioComponent', () => {
  let component: IncluirEstadioComponent;
  let fixture: ComponentFixture<IncluirEstadioComponent>;
  let h1: HTMLElement;
  let field: HTMLInputElement;
  let app: any; 

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, FormsModule],
      providers: [EstadioService],
      declarations: [ IncluirEstadioComponent ]
    })
    .compileComponents();
    fixture = TestBed.createComponent(IncluirEstadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    app=fixture.debugElement.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('#Title - O titulo deve aparecer no HTML', () => {
    let expected:string = 'Incluir Estadio';
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
