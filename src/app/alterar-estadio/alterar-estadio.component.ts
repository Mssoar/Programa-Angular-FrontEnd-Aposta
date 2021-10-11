import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Estadio } from '../entities/estadio';
import { EstadioService } from '../services/estadio.service';

@Component({
  selector: 'app-alterar-estadio',
  templateUrl: './alterar-estadio.component.html',
  styleUrls: ['./alterar-estadio.component.css']
})
export class AlterarEstadioComponent implements OnInit {

  estadio: Estadio = {idEstadio:0, nome:''}

  constructor(private servicoEstadio: EstadioService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'))
    this.servicoEstadio.consultar(id).subscribe(
      dados => this.estadio = dados,
      error => {alert("Erro ao ler Estado"), console.log(error)}
    )
  }

  alterar(frm: NgForm){
    this.servicoEstadio.alterar(this.estadio).subscribe(
      dados=> { alert("Estadio Alterado com sucesso."), console.log(dados)},
      error=> { alert("Erro ao Cadastrar Estadio"), console.log(error) }
    )
  }  

}
