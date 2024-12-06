import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Sala } from './sala';

const BASE_API = "http://localhost:3000/salas";
const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
}

@Injectable({
  providedIn: 'root'
})
export class SalaApiService {

  constructor(private http: HttpClient) { }

  listar(): Observable<Sala[]> {
    return this.http.get<Sala[]>(BASE_API);
  }

  buscarPorId(id: number): Observable<Sala> {
    const uri = `${BASE_API}/${id}`;
    return this.http.get<Sala>(uri);
  }

  inserir(sala: Sala): Observable<Sala> {
    return this.http.post(BASE_API, sala, httpOptions);
  }

  editar(id: number, sala:Sala): Observable<Sala> {
    const uri = `${BASE_API}/${id}`;
    return this.http.put<Sala>(uri,sala,httpOptions);
  }

  deletar(id: number): Observable<Sala> {
    const uri = `${BASE_API}/${id}`;
    return this.http.delete<Sala>(uri);
  }
}
