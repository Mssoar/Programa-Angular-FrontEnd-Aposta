import { Component, OnInit } from '@angular/core';
import { Jogo } from 'src/app/entities/Jogo';
import { JogoService } from 'src/app/services/jogo.service';

@Component({
  selector: 'app-jogo',
  templateUrl: './listar-jogo.component.html',
  styleUrls: ['./listar-jogo.component.css']
})
export class ListarJogoComponent implements OnInit {

  jogos: Jogo[] =[]

  constructor(private jogoService: JogoService) { }

  ngOnInit(): void {
    this.jogoService.listar().subscribe(
      dados => {this.jogos = dados, console.log(dados)},
      error => alert("erro ao recuperar roupas.")
    )
  }

}
