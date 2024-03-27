import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Carro } from '../interface/carro';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarroService {

  constructor(private http: HttpClient) { }

  baseUrl = 'http://127.0.0.1:8000/api';

  createCarro(carro: Carro): Observable<Carro> {
    return this.http.post<Carro>(`${this.baseUrl}/carro`, carro)
  }

  updateCarro(carro: Carro, id: any): Observable<Carro> {
    return this.http.put<Carro>(`${this.baseUrl}/carro/${id}`, carro);
  }

  readCarro(): Observable<Carro[]> {
    return this.http.get<Carro[]>(`${this.baseUrl}/carro`);
  }

  readCarroId(id: any): Observable<Carro> {
    return this.http.get<Carro>(`${this.baseUrl}/carro/${id}`);
  }

  deleteCarro(id: any): Observable<Carro> {
    return this.http.delete<Carro>(`${this.baseUrl}/carro/${id}`);
  }

}
