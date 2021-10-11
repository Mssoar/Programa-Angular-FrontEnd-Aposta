import { JogoService } from './../services/jogo.service';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlterarJogoComponent } from './alterar-jogo.component';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

describe('AlterarJogoComponent', () => {
  let component: AlterarJogoComponent;
  let fixture: ComponentFixture<AlterarJogoComponent>;
  let h1: HTMLElement;
  let field: HTMLInputElement;

  let app: any; 

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterModule, HttpClientModule, FormsModule],
      providers: [
        { provide: ActivatedRoute,
          useValue: { snapshot: { queryParamMap: {  get(): number {  return 6;  }   }    }  }}, 
          JogoService ],
      declarations: [ AlterarJogoComponent ]
    })
    .compileComponents();
    fixture = TestBed.createComponent(AlterarJogoComponent);
    component = fixture.debugElement.componentInstance;
    app = fixture.debugElement.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('#Title - O titulo deve constar no html', () => {
    let expected: string  = 'Alterar Jogo';
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
