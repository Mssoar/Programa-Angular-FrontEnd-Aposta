import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Cliente } from '../entities/cliente';
import { ClienteService } from '../services/cliente.service';

@Component({
  selector: 'app-incluir-cliente',
  templateUrl: './incluir-cliente.component.html',
  styleUrls: ['./incluir-cliente.component.css']
})
export class IncluirClienteComponent implements OnInit {

  cliente: Cliente = {idCliente:0, nome:'',email:''}

  constructor(private servicoCliente: ClienteService) { }

  ngOnInit(): void {
  }
  
  incluir(frm: NgForm){

    this.servicoCliente.incluir(this.cliente).subscribe(
      dados => alert("Cliente cadastrado com sucesso"), 
      error => alert("Erro ao cadastrar Cliente"), 
      )
    }

}
