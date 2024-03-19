import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Carro } from '../interface/carro';
import { Observable } from 'rxjs';
import { ImagemCarro } from '../interface/imagem-carro';
import { Moto } from '../interface/moto';
import { Clientes } from '../interface/clientes';
import { Vendas } from '../interface/vendas';
import { Users } from '../interface/users';

@Injectable({
  providedIn: 'root'
})
export class ConectService {

  baseUrl = 'http://127.0.0.1:8000/api';

  urlImg = 'http://127.0.0.1:8000/storage';

  constructor(private http: HttpClient) { }

  createImgCarro(formData: any) {
    return this.http.post(`${this.baseUrl}/imgCarro`, formData);
  }

  readImg(id: any): Observable<ImagemCarro> {
    return this.http.get<ImagemCarro>(`${this.baseUrl}/imgCarro/${id}`);
  }

  updateImg(img: ImagemCarro, id: any): Observable<ImagemCarro> {
    return this.http.post<ImagemCarro>(`${this.baseUrl}/atualzar-imagem-carro/${id}`, img);
  }

  deleteImg(id: any): Observable<ImagemCarro> {
    return this.http.delete<ImagemCarro>(`${this.baseUrl}/imgCarro/${id}`)
  }

  apagarTodasImagens(img: ImagemCarro, id: any): Observable<ImagemCarro> {
    return this.http.post<ImagemCarro>(`${this.baseUrl}/apagar-imagem-carro/${id}`, img);
  }

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

  createMoto(moto: Moto): Observable<Moto> {
    return this.http.post<Moto>(`${this.baseUrl}/moto/`, moto)
  }

  readMoto(): Observable<Moto[]> {
    return this.http.get<Moto[]>(`${this.baseUrl}/moto`);
  }

  updateMoto(moto: Moto, id: any,): Observable<Moto> {
    return this.http.put<Moto>(`${this.baseUrl}/moto/${id}`, moto);
  }

  readMotoId(id: any): Observable<Moto> {
    return this.http.get<Moto>(`${this.baseUrl}/moto/${id}`);
  }

  createImgMoto(formData: any) {
    return this.http.post(`${this.baseUrl}/imgMoto`, formData);
  }

  updateImgMoto(img: any, id: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/atualzar-imagem-moto/${id}`, img);
  }

  deleteMoto(id: any): Observable<Moto> {
    return this.http.delete<Moto>(`${this.baseUrl}/moto/${id}`)
  }

  deleteImgMoto(id: any): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/imgMoto/${id}`)
  }

  apagarTodasImagensMoto(img: any, id: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/apagar-imagem-moto/${id}`, img);
  }

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

  createVenda(venda: any): Observable<Vendas> {
    return this.http.post<Vendas>(`${this.baseUrl}/venda`, venda);
  }

  readUsers(): Observable<Users> {
    return this.http.get<Users>(`${this.baseUrl}/recuperarUser`);
  }
}
