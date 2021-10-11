import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Cliente } from '../entities/cliente';
import { ClienteService } from '../services/cliente.service';

@Component({
  selector: 'app-alterar-cliente',
  templateUrl: './alterar-cliente.component.html',
  styleUrls: ['./alterar-cliente.component.css']
})
export class AlterarClienteComponent implements OnInit {

  cliente: Cliente = {idCliente:0, nome:'',email:''}

  constructor(private servicoCliente:ClienteService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'))
    this.servicoCliente.consultar(id).subscribe(
      dados => this.cliente = dados,
      error => {alert("Erro ao ler cliente"), console.log(error)}
    )
  }
  alterar(frm: NgForm){
    this.servicoCliente.alterar(this.cliente).subscribe(
      dados => {alert("Cliente alterado com sucesso."), console.log(dados)},
      error=> {alert("Erro ao alterar Cliente"), console.log(error)}
    )
  }

}
