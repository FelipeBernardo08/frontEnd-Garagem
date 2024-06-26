import { Component, OnInit } from '@angular/core';
import { ContratoVinculadoService } from 'src/app/services/contrato-vinculado.service';

@Component({
  selector: 'app-contratos-editar',
  template: `
  <div class="d-flex justify-content-end">
    <button class="btn btn-sm btn-danger material-icons botao m-2 p-1" matTooltip="Retornar"
        routerLink="/contratos">reply</button>
</div>

<section class="mt-5">
    <div class="text-center">
        <h3>
            <strong>
                Contratos
            </strong>
        </h3>
    </div>

    <div class="d-flex justify-content-center">
        <div class="card w-75">
            <div class="card-boy">
                <table class="table striped-table">
                    <thead>
                        <tr class="text-center">
                            <th scope="col">#</th>
                            <th scope="col">Nome Contrato</th>
                            <th scope="col">Cliente</th>
                            <th scope="col">Veiculo</th>
                            <th scope="col">Valor</th>
                            <th scope="col">Visualizar e Imprimir</th>
                        </tr>
                    </thead>
                    <tbody class="text-center">
                        <tr *ngFor="let item of contratos">
                            <td>
                                {{item.id}}
                            </td>
                            <td>
                                {{item.contrato.titulo_contrato}}
                            </td>
                            <td *ngIf="item.venda.cliente != null">
                                {{item.venda.cliente.nome}}
                            </td>
                            <td *ngIf="item.venda.cliente == null">
                                Desativado
                            </td>
                            <td *ngIf="item.venda.carro != null">
                                {{item.venda.carro.marca}} {{item.venda.carro.modelo}}
                                {{item.venda.carro.potencia_motor}}
                            </td>
                            <td *ngIf="item.venda.moto != null">
                                {{item.venda.moto.marca}} {{item.venda.moto.modelo}}
                                {{item.venda.moto.potencia_motor}}
                            </td>
                            <td>
                                {{ 'RS ' + item.venda.valor_total }},00
                            </td>
                            <td routerLink="/contratos/imprimir/{{item.id}}">
                                <i class="material-icons text-info button-edit">visibility</i>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</section>
  `,
  styleUrls: ['./contratos-editar.component.css']
})
export class ContratosEditarComponent implements OnInit {

  constructor(
    private contratoVinculado: ContratoVinculadoService
  ) { }

  contratos: Array<any> = []

  ngOnInit(): void {
    this.contratoVinculado.getAllContratosVinculados().subscribe((contrato: any) => {
      this.contratos = contrato;
    })
  }

}
