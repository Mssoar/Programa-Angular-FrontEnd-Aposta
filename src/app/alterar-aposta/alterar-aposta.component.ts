import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Aposta } from '../entities/aposta';
import { Cliente } from '../entities/cliente';
import { Jogo } from '../entities/Jogo';
import { ApostaService } from '../services/aposta.service';
import { ClienteService } from '../services/cliente.service';
import { JogoService } from '../services/jogo.service';

@Component({
  selector: 'app-alterar-aposta',
  templateUrl: './alterar-aposta.component.html',
  styleUrls: ['./alterar-aposta.component.css']
})
export class AlterarApostaComponent implements OnInit {

  aposta: Aposta = {idAposta: 0,idCliente:0,dataCompra:new Date(),valor: 0,pago: false,idJogo: 0}
  clientes: Cliente[] = []
  jogos: Jogo[] =[]

  constructor(private route: ActivatedRoute,private servicoCliente:ClienteService, private servicoJogo:JogoService, private servicoAposta: ApostaService) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'))
    this.servicoAposta.consultar(id).subscribe(
      dados => this.aposta = dados,
      error => {alert("Erro ao ler Aposta"), console.log(error)}
    )
    this.servicoCliente.listar().subscribe(
      dados => this.clientes = dados,
      erro => alert("Erro ao listar apostas")
    )
    this.servicoJogo.listar().subscribe(
      dados => this.jogos = dados,
      erro => alert("Erro aos listar jogos")
    )
}

  alterar(frm: NgForm){
    this.servicoAposta.alterar(this.aposta).subscribe(
      dados => {alert("Aposta alterada com sucesso.:\n"), console.log(dados)},
      error=> {alert("Erro ao alterar Aposta:\n"+ error), console.log(error)}    
    )
  }

}
