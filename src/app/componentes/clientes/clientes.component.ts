import { ClienteService } from 'src/app/services/cliente.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Clientes } from 'src/app/interface/clientes';
import { ConectService } from 'src/app/services/conect.service';

@Component({
  selector: 'app-clientes',
  template: `
    <div class="d-flex justify-content-end">
    <button class="btn btn-sm btn-danger material-icons botao m-2 p-1" matTooltip="Retornar"
        routerLink="/">reply</button>
    <button class="btn btn-sm btn-success material-icons botao m-2 p-1" matTooltip="Cadastrar"
        routerLink="/cliente/criar">add</button>
</div>

<section id="listaCarros">
    <div class="text-center">
        <h3><strong>Clientes Cadastrados</strong></h3>
    </div>
    <div class="d-flex justify-content-center">

        <div *ngIf="clientes.length == 0">
            <p>Nenhuma registro, clique <a routerLink="/cliente/criar">aqui</a> para criar</p>
        </div>

        <div *ngIf="clientes.length > 0" class="card w-75">
            <div class="card-body">
                <table class="table striped-table">
                    <thead>
                        <tr class="text-center">
                            <th scope="col">Nome</th>
                            <th scope="col">CPF</th>
                            <th scope="col">Nascimento</th>
                            <th scope="col">E-mail</th>
                            <th scope="col">Rua</th>
                            <th scope="col">Número</th>
                            <th scope="col">Bairro</th>
                            <th scope="col">Cidade</th>
                            <th scope="col">Estado</th>
                            <th scope="col">Editar</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr *ngFor="let item of clientes" class="text-center">
                            <td>{{item.nome}}</td>
                            <td>{{item.cpf}}</td>
                            <td>{{item.nascimento}}</td>
                            <td>{{item.email}}</td>
                            <td>{{item.end_rua}}</td>
                            <td>{{item.end_numero}}</td>
                            <td>{{item.end_bairro}}</td>
                            <td>{{item.end_cidade}}</td>
                            <td>{{item.end_estado}}</td>
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
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  constructor(
    private service: ConectService,
    private router: Router,
    private clienteService: ClienteService
  ) { }

  clientes: Clientes[] = []

  ngOnInit(): void {
    this.clienteService.readClientes().subscribe(cliente => {
      this.clientes = cliente
    })
  }

  editar(id: any) {
    this.router.navigate([`/cliente/editar/${id}`])
  }

}
