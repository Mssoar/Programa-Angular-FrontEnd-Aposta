import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ClubeService } from './../services/clube.service';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlterarClubeComponent } from './alterar-clube.component';

describe('AlterarClubeComponent', () => {
  let component: AlterarClubeComponent;
  let fixture: ComponentFixture<AlterarClubeComponent>;
  let h1: HTMLElement;

  let app: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterModule, HttpClientModule, FormsModule],
      providers: [
        { provide: ActivatedRoute,
          useValue: { snapshot: { queryParamMap: {  get(): number {  return 6;  }   }    }  }}, 
          ClubeService ],
      declarations: [ AlterarClubeComponent ]
    })
    .compileComponents();
    fixture = TestBed.createComponent(AlterarClubeComponent);
    component = fixture.debugElement.componentInstance;
    app = fixture.debugElement.nativeElement;
 
  });

  it('#Create - O componente deve ser criado', () => {
    expect(component).toBeTruthy();
  });

  it('#Title - O titulo deve constar no html', () => {
    let expected: string  = 'Alterar Clube';
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
