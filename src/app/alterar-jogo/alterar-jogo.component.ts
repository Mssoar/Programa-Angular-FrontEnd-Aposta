import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Clube } from '../entities/clube';
import { Estadio } from '../entities/estadio';
import { Jogo } from '../entities/Jogo';
import { ClubeService } from '../services/clube.service';
import { EstadioService } from '../services/estadio.service';
import { JogoService } from '../services/jogo.service';

@Component({
  selector: 'app-alterar-jogo',
  templateUrl: './alterar-jogo.component.html',
  styleUrls: ['./alterar-jogo.component.css']
})
export class AlterarJogoComponent implements OnInit {

  jogo : Jogo = { idJogo: 0,nome: '',idCasa:0,idVisitante:0,idEstadio:0 };
  clubes: Clube[] = [];
  estadios: Estadio[] = [];

  constructor(private servicoJogo:JogoService, private route: ActivatedRoute,private servicoClube: ClubeService, private servicoEstadio: EstadioService) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'))
    this.servicoJogo.consultar(id).subscribe(
      dados => this.jogo = dados,
      error => {alert("Erro ao ler jogo"), console.log(error)}
    )
    this.servicoClube.listar().subscribe(
      dados => this.clubes = dados,
      error=> alert('Erro ao recuperar setores')
    )
    this.servicoEstadio.listar().subscribe(
      dados => this.estadios = dados,
      error => alert('Erro a recuperar funcoes')
    )
  }

  alterar(frm: NgForm){
    this.servicoJogo.alterar(this.jogo).subscribe(
      dados => {alert("jogo alterado com sucesso."), console.log(dados)},
      error=> {alert("Erro ao alterar jogo"), console.log(error)}
    )
  }

}
