import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Jogo } from 'src/app/entities/Jogo';
import { JogoService } from 'src/app/services/jogo.service';
import { Clube } from '../entities/clube';
import { Estadio } from '../entities/estadio';
import { ClubeService } from '../services/clube.service';
import { EstadioService } from '../services/estadio.service';

@Component({
  selector: 'app-incluir-jogo',
  templateUrl: './incluir-jogo.component.html',
  styleUrls: ['./incluir-jogo.component.css']
})
export class IncluirJogoComponent implements OnInit {

  jogo : Jogo = { idJogo: 0,nome: '',idCasa:0,idVisitante:0,idEstadio:0 };
  clubes: Clube[] = [];
  estadios: Estadio[] = [];

  constructor(private servicoJogo: JogoService, private servicoClube: ClubeService, private servicoEstadio: EstadioService) { }

  ngOnInit(): void {
    this.servicoClube.listar().subscribe(
      dados => {this.clubes = dados,console.log(dados)},
      error=> alert('Erro ao recuperar setores')
    )
    this.servicoEstadio.listar().subscribe(
      dados => {this.estadios = dados, console.log(dados)},
      error => alert('Erro a recuperar funcoes')
    )
  }

  incluir(frm: NgForm){

    this.servicoJogo.incluir(this.jogo).subscribe(
      dados => alert("Clube cadastrado com sucesso"), 
      error => alert("Erro ao cadastrar clube"), 
      )
    }

}
