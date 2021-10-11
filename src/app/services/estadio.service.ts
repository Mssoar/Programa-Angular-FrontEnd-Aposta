import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Estadio } from '../entities/estadio';

@Injectable({
  providedIn: 'root'
})
export class EstadioService {

  rotaBase: String = "http://localhost:8080/estadio"

  constructor(private http:HttpClient) { }

  listar():Observable<any>{
    return this.http.get<Estadio>(`${this.rotaBase}/listar`)
  }

  incluir(estadio: Estadio): Observable<Estadio> {
    return this.http.post<Estadio>(`${this.rotaBase}/incluir`, estadio)
  }

  alterar(estadio: Estadio): Observable<Estadio> {
    return this.http.post<Estadio>(`${this.rotaBase}/alterar`, estadio)
  }

  consultar(id: number): Observable<Estadio> {
    return this.http.get<Estadio>(`${this.rotaBase}/${id}`)
  }
}
