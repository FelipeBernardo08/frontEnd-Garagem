import { ClienteService } from './../../../services/cliente.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Clientes } from 'src/app/interface/clientes';
import { ConectService } from 'src/app/services/conect.service';

@Component({
  selector: 'app-criar-cliente',
  template: `
    <section class="container mt-2 mb-2">
    <div class="card">
        <div class="card-header text-center">
            <h4>
                <strong>
                    CADASTRAR CLIENTE
                </strong>
            </h4>
        </div>
        <div class="card-body">
            <form class="row form-floating needs-validation" id="formCliente">

                <div class="col-md-6 mt-2">
                    <label for="nome" class="form-label">Nome</label>
                    <input type="text" name="nome" class="form-control" id="nome" placeholder="Digite o nome..."
                        [(ngModel)]="cliente.nome" required>
                </div>

                <div class="col-md-6 mt-2">
                    <label for="cpf" class="form-label">CPF</label>
                    <input type="text" name="cpf" class="form-control" id="cpf" placeholder="Digite o CPF..."
                        [(ngModel)]="cliente.cpf" required>
                </div>

                <div class="col-md-8 mt-2">
                    <label for="email" class="form-label">E-mail</label>
                    <input type="text" name="email" class="form-control" id="email" placeholder="Digite o E-mail..."
                        [(ngModel)]="cliente.email" required>
                </div>

                <div class="col-md-4 mt-2">
                    <label for="nascimento" class="form-label">Data de Nascimento</label>
                    <input type="text" name="nascimento" class="form-control" id="data-nascimento"
                        placeholder="Digite a data de nascimento..." [(ngModel)]="cliente.nascimento" required>
                </div>

                <div class="col-md-4 mt-2">
                    <label for="rua" class="form-label">Rua</label>
                    <input type="text" name="end_rua" class="form-control" id="rua" placeholder="Digite a rua..."
                        [(ngModel)]="cliente.end_rua" required>
                </div>

                <div class="col-md-4 mt-2">
                    <label for="numero" class="form-label">Número</label>
                    <input type="text" name="end_numero" class="form-control" id="numero"
                        placeholder="Digite o número..." [(ngModel)]="cliente.end_numero" required>
                </div>

                <div class="col-md-4 mt-2">
                    <label for="bairro" class="form-label">Bairro</label>
                    <input type="text" name="end_bairro" class="form-control" id="bairro"
                        placeholder="Digite o bairro..." [(ngModel)]="cliente.end_bairro" required>
                </div>

                <div class="col-md-6 mt-2">
                    <label for="cidade" class="form-label">Cidade</label>
                    <input type="text" name="end_cidade" class="form-control" id="cidade"
                        placeholder="Digite a cidade..." [(ngModel)]="cliente.end_cidade" required>
                </div>

                <div class="col-md-2 mt-2">
                    <label for="cep" class="form-label">CEP</label>
                    <input type="text" name="end_cep" class="form-control" id="cep" placeholder="Digite o cep..."
                        [(ngModel)]="cliente.end_cep" required>
                </div>

                <div class="col-md-4 mt-2">
                    <label for="uf" class="form-label">UF</label>
                    <input type="text" name="end_estado" class="form-control" id="uf" placeholder="Digite o UF..."
                        [(ngModel)]="cliente.end_estado" required>
                </div>

                <div class="row">
                    <div class="col-md-6">
                        <button class="btn btn-sm btn-danger mt-3 w-100 m-1" routerLink="/cliente">Cancelar</button>
                    </div>
                    <div class="col-md-6">
                        <button class="btn btn-sm btn-success mt-3 w-100 m-1" type="submit"
                            (click)="enviar()">Criar</button>
                    </div>
                </div>

            </form>
        </div>
    </div>
</section>
  `,
  styleUrls: ['./criar-cliente.component.css'],
})
export class CriarClienteComponent implements OnInit {

  constructor(
    private route: Router,
    private clienteService: ClienteService
  ) { }

  public cliente: Clientes = {
    nome: '',
    cpf: '',
    nascimento: '',
    email: '',
    end_rua: '',
    end_numero: '',
    end_bairro: '',
    end_cidade: '',
    end_estado: '',
    end_cep: ''
  }

  ngOnInit(): void {
    const forms = document.querySelectorAll('.needs-validation')
    Array.from(forms).forEach((form: any) => {
      form.addEventListener('submit', (event: any) => {
        if (form.classList == 'ng-valid') {
        }
        form.classList.add('was-validated')
      }, false)
    })
  }


  enviar() {
    let form = document.getElementById('formCliente')
    let valid = form?.classList.contains('ng-valid')
    if (valid) {
      this.clienteService.criarCliente(this.cliente).subscribe(() => {
        this.route.navigate(['/cliente'])
      })
    }
  }
}
