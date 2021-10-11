import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Jogo } from 'src/app/entities/Jogo';

@Injectable({
  providedIn: 'root'
})
export class JogoService {


  rotaBase: String = "http://localhost:8080/jogo"

  constructor(private http: HttpClient) { }

  listar():Observable<any>{
    return this.http.get<Jogo>(`${this.rotaBase}/listar`)
  }

  incluir(jogo: Jogo): Observable<Jogo> {
    return this.http.post<Jogo>(`${this.rotaBase}/incluir`, jogo)
  }

  alterar(jogo: Jogo): Observable<Jogo> {
    return this.http.post<Jogo>(`${this.rotaBase}/alterar`, jogo)
  }

  consultar(id: number): Observable<Jogo> {
    return this.http.get<Jogo>(`${this.rotaBase}/${id}`)
  }
}
