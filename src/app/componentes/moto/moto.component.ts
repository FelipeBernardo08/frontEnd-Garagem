import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Moto } from 'src/app/interface/moto';
import { ConectService } from 'src/app/services/conect.service';
import { MotoService } from 'src/app/services/moto.service';

@Component({
  selector: 'app-moto',
  template: `
    <div class="d-flex justify-content-end">
    <button class="btn btn-sm btn-danger material-icons botao m-2 p-1" matTooltip="Retornar"
        routerLink="/">reply</button>
    <button class="btn btn-sm btn-success material-icons botao m-2 p-1" matTooltip="Cadastrar"
        routerLink="/moto/criar">add</button>
</div>

<section id="listaMotos">
    <div id="" class="text-center">
        <h3><strong>Motos Cadastradas</strong></h3>
    </div>

    <div class="d-flex justify-content-center">
        <div *ngIf="moto.length == 0">
            <p>Nenhuma registro, clique <a routerLink="/moto/criar">aqui</a> para criar</p>
        </div>

        <div *ngIf="moto.length > 0" class="card w-75">
            <div class="card-body">
                <table class="table striped-table">
                    <thead>
                        <tr class="text-center">
                            <th scope="col">Imagem</th>
                            <th scope="col">Marca</th>
                            <th scope="col">Modelo</th>
                            <th scope="col">Celindradas</th>
                            <th scope="col">Ano</th>
                            <th scope="col">Placa</th>
                            <th scope="col">Valor</th>
                            <th scope="col">Editar</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr *ngFor="let item of moto" class="text-center">
                            <td *ngIf="item.fotos.img1 != null ">
                                <img src="{{img}}/{{item.fotos.img1}}" alt="" style="width: 50px;">
                            </td>
                            <td *ngIf="item.fotos.img1 == null">
                                Sem Fotos
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
  styleUrls: ['./moto.component.css']
})
export class MotoComponent implements OnInit {

  constructor(
    private service: ConectService,
    private router: Router,
    private motoService: MotoService
  ) { }

  moto: Moto[] = []
  img: any
  valorTotal: number = 0
  ngOnInit(): void {
    this.motoService.readMoto().subscribe(moto => {
      for (let i = 0; i < moto.length; i++) {
        if (moto[i].vendido != true) {
          this.moto.push(moto[i])
          this.valorTotal += moto[i].valor
        }
      }
    })
    this.img = this.service.urlImg
  }

  editar(id: number) {
    this.router.navigate([`/moto/editar/${id}`])
  }

}
