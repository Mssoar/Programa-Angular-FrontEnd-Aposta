import { Component, OnInit } from '@angular/core';
import { Resultado } from 'src/app/entities/resultado';
import { Clube } from 'src/app/entities/clube';
import { Jogo } from 'src/app/entities/Jogo';
import { NgForm } from '@angular/forms';
import { ResultadoService } from 'src/app/services/resultado.service';
import { ClubeService } from 'src/app/services/clube.service';
import { JogoService } from 'src/app/services/jogo.service';


@Component({
  selector: 'app-incluir-resultado',
  templateUrl: './incluir-resultado.component.html',
  styleUrls: ['./incluir-resultado.component.css']
})
export class IncluirResultadoComponent implements OnInit {

  resultado : Resultado = { idResultado: 0,nome: '',vencedor:false,idJogo:0,idClube:0 };
  clubes: Clube[] = [];
  jogos: Jogo[] = [];
  constructor(private servicoResultado: ResultadoService, private servicoClube: ClubeService, private servicoJogos: JogoService) { }

  ngOnInit(): void {
    this.servicoClube.listar().subscribe(
      dados => {this.clubes = dados,console.log(dados)},
      error=> alert('Erro ao recuperar setores')
    )
    this.servicoJogos.listar().subscribe(
      dados => {this.jogos = dados,console.log(dados)},
      error=> alert('Erro ao recuperar jogos')
    )


  }
  incluir(frm: NgForm){

    this.servicoResultado.incluir(this.resultado).subscribe(
      dados => alert("Resultado cadastrado com sucesso"), 
      error => alert("Erro ao cadastrar resultado"), 
      )
    }

}
