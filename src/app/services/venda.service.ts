import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vendas } from '../interface/vendas';

@Injectable({
  providedIn: 'root'
})
export class VendaService {

  constructor(private http: HttpClient) { }

  baseUrl = 'http://127.0.0.1:8000/api';

  createVenda(venda: any): Observable<Vendas> {
    return this.http.post<Vendas>(`${this.baseUrl}/venda`, venda);
  }

  getVenda(): Observable<Vendas> {
    return this.http.get<Vendas>(`${this.baseUrl}/venda`);
  }

  getVendaId(id: any): Observable<Vendas> {
    return this.http.get<Vendas>(`${this.baseUrl}/venda/${id}`);
  }
}
