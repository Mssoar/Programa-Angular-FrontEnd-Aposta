import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EstadioService } from '../services/estadio.service';

import { ListarEstadioComponent } from './listar-estadio.component';

describe('ListarEstadioComponent', () => {
  let component: ListarEstadioComponent;
  let fixture: ComponentFixture<ListarEstadioComponent>;
  let h1: HTMLElement;
  let field: HTMLInputElement;
  let app: any; 

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[HttpClientModule],
      providers:[EstadioService],
      declarations: [ ListarEstadioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarEstadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    app=fixture.debugElement.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('#Title - O titulo deve aparecer no HTML', () => {
    let expected:string = 'Listar Estadios';
    h1 = app.querySelector('h1');
    let result = h1.innerHTML;
    expect(result).toContain(expected);
  });

  it('#Botão enviar - O botão enviar deve aparecer no html', () => {
  let expected: string = 'Incluir Estadio';
  h1= app.querySelector('.incluirestadio');
  let result= h1.innerHTML;
  expect(result).toEqual(expected);

  });
});
