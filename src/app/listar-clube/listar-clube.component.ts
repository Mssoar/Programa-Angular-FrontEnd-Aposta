import { Component, OnInit } from '@angular/core';
import { Clube } from '../entities/clube';
import { ClubeService } from '../services/clube.service';

@Component({
  selector: 'app-listar-clube',
  templateUrl: './listar-clube.component.html',
  styleUrls: ['./listar-clube.component.css']
})
export class ListarClubeComponent implements OnInit {

  clubes: Clube[] = [];

  constructor(private servicoClube: ClubeService) { }

  ngOnInit(): void {

    this.servicoClube.listar().subscribe(
      dados => { this.clubes= dados, console.log(this.clubes) },
      error => { console.log("Erro ao recuperar clubes ", error)}
    )
  }

}
