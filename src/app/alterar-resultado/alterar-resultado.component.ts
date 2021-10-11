import { Component, OnInit } from '@angular/core';
import { Resultado } from 'src/app/entities/resultado';
import { Jogo } from 'src/app/entities/Jogo';
import { Clube } from 'src/app/entities/clube';
import { ResultadoService } from 'src/app/services/resultado.service';
import { ActivatedRoute } from '@angular/router';
import { JogoService } from 'src/app/services/jogo.service';
import { ClubeService } from 'src/app/services/clube.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-alterar-resultado',
  templateUrl: './alterar-resultado.component.html',
  styleUrls: ['./alterar-resultado.component.css']
})
export class AlterarResultadoComponent implements OnInit {

  resultado : Resultado = { idResultado: 0,nome: '',vencedor:false,idJogo:0,idClube:0 };
  jogos : Jogo [] = [];
  clubes: Clube[] = [];
  
  constructor(private servicoResultado:ResultadoService,private route:ActivatedRoute, private servicoJogo: JogoService, private servicoClube: ClubeService) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'))
    this.servicoResultado.consultar(id).subscribe(
      dados => this.resultado = dados,
      error => {alert("Erro ao ler resultado"), console.log(error)}
    )
    this.servicoClube.listar().subscribe(
      dados => this.clubes = dados,
      error=> alert('Erro ao recuperar clubes')
    )
    this.servicoJogo.listar().subscribe(
      dados => this.jogos = dados,
      error => alert('Erro a recuperar jogo')
    )
  }
  alterar(frm: NgForm){
    this.servicoResultado.alterar(this.resultado).subscribe(
      dados => {alert("Resultado alterado com sucesso."), console.log(dados)},
      error=> {alert("Erro ao alterar resultado"), console.log(error)}
    )
  }

}
