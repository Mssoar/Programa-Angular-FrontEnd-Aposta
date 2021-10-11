import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Aposta } from '../entities/aposta';

@Injectable({
  providedIn: 'root'
})
export class ApostaService {

  rotaBase: String = "http://localhost:8080/aposta"

  constructor(private http:HttpClient) { }

  listar():Observable<any>{
    return this.http.get<Aposta>(`${this.rotaBase}/listar`)
  }

  incluir(aposta: Aposta): Observable<Aposta> {
    return this.http.post<Aposta>(`${this.rotaBase}/incluir`, aposta)
  }

  alterar(aposta: Aposta): Observable<Aposta> {
    return this.http.post<Aposta>(`${this.rotaBase}/alterar`, aposta)
  }

  consultar(id: number): Observable<Aposta> {
    return this.http.get<Aposta>(`${this.rotaBase}/${id}`)
  }
}
