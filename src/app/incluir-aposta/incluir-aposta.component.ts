import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Aposta } from '../entities/aposta';
import { Cliente } from '../entities/cliente';
import { Jogo } from '../entities/Jogo';
import { ApostaService } from '../services/aposta.service';
import { ClienteService } from '../services/cliente.service';
import { JogoService } from '../services/jogo.service';

@Component({
  selector: 'app-incluir-aposta',
  templateUrl: './incluir-aposta.component.html',
  styleUrls: ['./incluir-aposta.component.css']
})
export class IncluirApostaComponent implements OnInit {

  aposta: Aposta = {idAposta: 0,idCliente:0,dataCompra:new Date(),valor: 0,pago: false,idJogo: 0}
  clientes: Cliente[] = []
  jogos: Jogo[] =[]

  constructor(private servicoAposta: ApostaService, private servicoCliente:ClienteService, private servicoJogo:JogoService) { }

  ngOnInit(): void {
    this.servicoCliente.listar().subscribe(
      dados => this.clientes = dados,
      erro => alert("Erro ao listar apostas")
    )
    this.servicoJogo.listar().subscribe(
      dados => this.jogos = dados,
      erro => alert("Erro aos listar jogos")
    )
  }

  incluir(frm: NgForm){
    this.servicoAposta.incluir(this.aposta).subscribe(
      dados => {alert("Aposta incluida com sucesso.:\n"), console.log(dados)},
      error=> {alert("Erro ao alterar Aposta:\n"+ error), console.log(error)}
    )
  }


}
