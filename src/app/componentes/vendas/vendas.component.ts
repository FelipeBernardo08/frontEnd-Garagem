import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vendas } from 'src/app/interface/vendas';
import { ConectService } from 'src/app/services/conect.service';
import { VendaService } from 'src/app/services/venda.service';

@Component({
  selector: 'app-vendas',
  template: `
    <div class="d-flex justify-content-end">
    <button class="btn btn-sm btn-danger material-icons botao m-2 p-1" matTooltip="Retornar"
        routerLink="/">reply</button>
    <button class="btn btn-sm btn-success material-icons botao m-2 p-1" matTooltip="Nova venda"
        routerLink="/venda/criar">shopping_cart</button>
</div>

<section id="listaVendas">
    <div class="text-center">
        <h3>
            <strong>
                Vendas
            </strong>
        </h3>

        <div *ngIf="vendas.length == 0">
            <p>Nenhuma registro, clique <a routerLink="/venda/criar">aqui</a> para criar</p>
        </div>

        <div *ngIf="vendas.length > 0" class="d-flex justify-content-center">
            <div class="card w-75">
                <div class="card-body">
                    <table class="table striped-table">
                        <thead>
                            <tr class="tex-center">
                                <th scope="col">#</th>
                                <th scope="col">Cliente</th>
                                <th scope="col">Veículo</th>
                                <th scope="col">Valor</th>
                                <th scope="col">Data</th>
                                <th scope="col">Visualizar</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr *ngFor="let item of vendas" class="text-center">
                                <td>{{item.id}}</td>
                                <td *ngIf="item.cliente != null">{{item.cliente.nome}}</td>
                                <td *ngIf="item.cliente == null">Desativado</td>
                                <td *ngIf="item.id_carro != null">
                                    {{item.carro.marca}} -
                                    {{item.carro.modelo}} -
                                    {{item.carro.ano_fabricacao}}
                                </td>
                                <td *ngIf="item.id_moto != null">
                                    {{item.moto.marca}} -
                                    {{item.moto.modelo}} -
                                    {{item.moto.ano_fabricacao}}
                                </td>
                                <td>R$ {{item.valor_total}},00</td>
                                <td>{{item.created_at | date: 'dd/MM/yyyy'}}</td>
                                <td>
                                    <i class="material-icons text-info button-visibility"
                                        (click)="visualizar(item.id)">visibility</i>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</section>
  `,
  styleUrls: ['./vendas.component.css']
})
export class VendasComponent implements OnInit {

  constructor(
    private router: Router,
    private vendaService: VendaService
  ) { }

  vendas: Array<any> = [];
  valorTotal: number = 0;

  ngOnInit(): void {
    this.vendaService.getVenda().subscribe((venda: any) => {
      this.vendas = venda;
      for (let i = 0; i < venda.length; i++) {
        this.valorTotal += venda[i].valor_total
      }
    })
    let conteudo = document.getElementById('listaVendas')?.innerHTML;
  }

  public visualizar(id: any): void {
    this.router.navigate([`/venda/visualizar/${id}`])
  }

}
