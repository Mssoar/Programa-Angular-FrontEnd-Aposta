import { Component, OnInit } from '@angular/core';
import { Aposta } from '../entities/aposta';
import { ApostaService } from '../services/aposta.service';

@Component({
  selector: 'app-listar-aposta',
  templateUrl: './listar-aposta.component.html',
  styleUrls: ['./listar-aposta.component.css']
})
export class ListarApostaComponent implements OnInit {

  apostas:Aposta[]=[];

  constructor(private servicoAposta: ApostaService) { }

  ngOnInit(): void {
    this.servicoAposta.listar().subscribe(
      dados => { this.apostas= dados, console.log(this.apostas) },
      error => { console.log("Erro ao recuperar aposta ", error)}
    )
  }
  

}
