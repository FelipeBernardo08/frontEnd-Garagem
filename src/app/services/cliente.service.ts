import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Clientes } from '../interface/clientes';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) { }

  baseUrl = 'http://127.0.0.1:8000/api';

  criarCliente(cliente: any): Observable<Clientes> {
    return this.http.post<Clientes>(`${this.baseUrl}/cliente`, cliente);
  }

  readClientes(): Observable<Clientes[]> {
    return this.http.get<Clientes[]>(`${this.baseUrl}/cliente`);
  }

  readClientesId(id: any): Observable<Clientes> {
    return this.http.get<Clientes>(`${this.baseUrl}/cliente/${id}`);
  }

  updateCliente(id: any, cliente: Clientes): Observable<Clientes> {
    return this.http.put<Clientes>(`${this.baseUrl}/cliente/${id}`, cliente);
  }

  deleteCliente(id: any): Observable<Clientes> {
    return this.http.delete<Clientes>(`${this.baseUrl}/cliente/${id}`);
  }
}
