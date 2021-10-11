import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Clube } from '../entities/clube';
import { ClubeService } from '../services/clube.service';

@Component({
  selector: 'app-alterar-clube',
  templateUrl: './alterar-clube.component.html',
  styleUrls: ['./alterar-clube.component.css']
})
export class AlterarClubeComponent implements OnInit {

  clube : Clube = {idClube: 0, nome:'', telefone:'', email:''}

  @Input() id?:Number

  constructor(private route: ActivatedRoute, private servicoClube: ClubeService) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'))
    this.servicoClube.consultar( id ).subscribe(
      dados => this.clube = dados,
      error => alert("erro ao ler clube")
    )
  }

  alterar(frm: NgForm){
    this.servicoClube.alterar(this.clube).subscribe(
      dados=> { alert("Clube Cadastrada com sucesso."), console.log(dados)},
      error=> { alert("Erro ao Cadastrar Clube"), console.log(error) }
    )
  }

}
