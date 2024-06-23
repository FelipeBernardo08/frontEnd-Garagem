import { CarroService } from './../../services/carro.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Carro } from 'src/app/interface/carro';
import { ConectService } from 'src/app/services/conect.service';

@Component({
  selector: 'app-carro',
  template: `
    <div class="d-flex justify-content-end">
      <button class="btn btn-sm btn-danger material-icons botao m-2 p-1" matTooltip="Retornar"
          routerLink="/">reply</button>
      <button class="btn btn-sm btn-success material-icons botao m-2 p-1" matTooltip="Cadastrar"
          routerLink="/carro/criar">add</button>
    </div>
    
    <section id="listaCarros">
      <div id="" class="text-center">
          <h3><strong>Carros Cadastrados</strong></h3>
      </div>

      <div class="d-flex justify-content-center">
        <div *ngIf="carro.length == 0">
          <p>Nenhuma registro, clique <a routerLink="/carro/criar">aqui</a> para criar</p>
        </div>

        <div *ngIf="carro.length > 0" class="card w-75">
          <div class="card-body">
            <table class="table striped-table">
              <thead>
                <tr class="text-center">
                  <th scope="col">Imagem</th>
                  <th scope="col">Marca</th>
                  <th scope="col">Modelo</th>
                  <th scope="col">Ano</th>
                  <th scope="col">Placa</th>
                  <th scope="col">Valor</th>
                  <th scope="col">Editar</th>
                </tr>
              </thead>
              <tbody>
                <tr *ngFor="let item of carro" class="text-center">
                  <td *ngIf="item.fotos != null ">
                    <img src="{{img}}/{{item.fotos.img1}}" alt="" style="width: 50px;">
                  </td>
                  <td *ngIf="item.fotos == null">
                    Sem fotos
                  </td>
                  <td>{{item.marca}}</td>
                  <td>{{item.modelo}}</td>
                  <td>{{item.potencia_motor}}</td>
                  <td>{{item.ano_fabricacao}}</td>
                  <td>{{item.placa}}</td>
                  <td>R$ {{item.valor}},00</td>
                  <td class="text-center"><i class="material-icons text-info button-edit"
                    (click)="editar(item.id)">edit</i></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./carro.component.css']
})
export class CarroComponent implements OnInit {

  carro: Carro[] = []
  img: string = ''
  valorTotal: number = 0
  constructor(
    public service: ConectService,
    public router: Router,
    public carroService: CarroService
  ) { }

  ngOnInit(): void {
    this.carroService.readCarro().subscribe(carros => {
      for (let i = 0; i < carros.length; i++) {
        if (carros[i].vendido != true) {
          this.carro.push(carros[i])
          this.valorTotal += carros[i].valor
        }
      }
    })
    this.img = this.service.urlImg
  }


  editar(id: number) {
    this.router.navigate([`/carro/editar/${id}`])
  }
}
