import { Component, OnInit } from '@angular/core';
import { DespesasService } from 'src/app/services/despesas.service';

@Component({
  selector: 'app-despesas',
  template: `
      <section class="container mt-3">
        <div class="row">
          <div class="text-center">
            <h3>
              <strong>
                Despesas
              </strong>
            </h3>
          </div>
        </div>  
        <div class="d-flex justify-content-center">
          <div class="card">
            <div class="card-body">
              <table *ngIf="despesas.length != 0" class="table striped-table">
                <thead>
                  <tr class="text-center">
                    <th scope="col">#</th>
                    <th scope="col">Descrição</th>
                    <th scope="col">Valor</th>
                    <th scope="col">Vendedor</th>
                    <th scope="col">Cliente</th>
                    <th scope="col">Venda</th>
                    <th scope="col">Carro</th>
                    <th scope="col">Moto</th>
                  </tr>
                </thead>
                <tbody>
                  <tr *ngFor="let item of despesas" class="text-center">
                    <td>{{item.id}}</td>
                    <td>{{item.descricao}}</td>
                    <td>{{'R$ ' + item.valor }},00</td>
                    <td>{{item.id_vendedor != null ? item.vendedor.name : 'Não possui registro'}}</td>
                    <td>{{item.id_cliente != null ? item.cliente.nome - item.cliente.cpf : 'Não possui registro'}}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
  `,
  styleUrls: ['./despesas.component.css']
})
export class DespesasComponent implements OnInit {

  constructor(private despesasService: DespesasService) { }

  despesas: Array<any> = []

  ngOnInit(): void {
    this.despesasService.getDespesas().subscribe((despesa: any) => {
      this.despesas = despesa;
      console.log(this.despesas)
    })
  }

}
