import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contrato } from 'src/app/interface/contrato';
import { ConectService } from 'src/app/services/conect.service';
import { ContratoService } from 'src/app/services/contrato.service';

@Component({
  selector: 'app-contratos',
  template: `
    <div class="d-flex justify-content-end">
    <button class="btn btn-sm btn-danger material-icons botao m-2 p-1" matTooltip="Retornar"
        routerLink="/">reply</button>
    <button class="btn btn-sm btn-primary material-icons botao m-2 p-1" matTooltip="Listar contratos"
        routerLink="/contratos/editar">list</button>
    <button class="btn btn-sm btn-success material-icons botao m-2 p-1" matTooltip="Cadastrar"
        routerLink="/contratos/criar">add</button>
</div>

<section class="container">
    <div class="row">
        <div class="text-center">
            <h3>
                <strong>
                    Contratos
                </strong>
            </h3>
        </div>
        <div *ngIf="contrato.length == 0">
            <div class="row">
                <div class="text-center">
                    <p>Nenhuma registro, clique <a routerLink="/contratos/criar">aqui</a> para criar</p>
                </div>
            </div>
        </div>
        <div *ngFor="let item of contrato" class="col-md-4">
            <div class="d-flex justify-content-center">
                <div class="card w-100" id="contratoCard">
                    <div class="card-header text-center">
                        {{item.titulo_contrato}}
                    </div>
                    <div class="card-body" [innerHTML]="item.corpo_contrato"></div>
                    <div class="card-footer text-center">
                        <div class="row">
                            <div class="col-md-6">
                                <button class="btn btn-sm btn-success w-100"
                                    routerLink="/contratos/vincular/{{item.id}}">Vincular
                                    Contrato</button>

                            </div>
                            <div class="col-md-6">
                                <button class="btn btn-sm btn-danger w-100" (click)="apagar(item.id)">Apagar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
  `,
  styleUrls: ['./contratos.component.css']
})
export class ContratosComponent implements OnInit {

  constructor(
    private router: Router,
    private contratoService: ContratoService
  ) { }

  cliente = {
    nome: 'Felipe Bernardo de Oliveira',
    cpf: '123.456.789-00',
    endereco: {
      rua: 'rua da amora',
      numero: '123',
      bairro: 'josé paulo',
      cidade: 'sao Paulo',
      estado: 'SP'
    }
  }

  contrato: Contrato[] = []

  ngOnInit(): void {
    this.contratoService.readContrato().subscribe((contratos: any) => {
      this.contrato = contratos;
      this.formatarTexto(this.contrato)
    })
  }

  public formatarTexto(contrato: any): void {
    contrato[0].corpo_contrato = contrato[0].corpo_contrato.replace(/;/g, '<br><br>');
  }

  public apagar(id: any): void {
    this.contratoService.deleteContrato(id).subscribe(() => {
      this.router.navigate(['/contratos']);
    });
  }

}
