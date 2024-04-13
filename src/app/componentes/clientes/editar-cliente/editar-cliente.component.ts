import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Clientes } from 'src/app/interface/clientes';
import { ClienteService } from 'src/app/services/cliente.service';
import { ConectService } from 'src/app/services/conect.service';

@Component({
  selector: 'app-editar-cliente',
  templateUrl: './editar-cliente.component.html',
  styleUrls: ['./editar-cliente.component.css']
})
export class EditarClienteComponent implements OnInit {

  constructor(
    private router: Router,
    private clienteService: ClienteService,
    private service: ConectService
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

    this.clienteService.readClientesId(this.service.recuperarIdUrl()).subscribe(clientes => [
      this.cliente = clientes
    ])
  }


  atualizar() {
    let form = document.getElementById('formCliente')
    let valid = form?.classList.contains('ng-valid')
    if (valid) {
      this.clienteService.updateCliente(this.service.recuperarIdUrl(), this.cliente).subscribe(() => {
        this.retornarListagem();
      })
    } else {
      //mensagem de erro
    }
  }

  retornarListagem() {
    this.router.navigate(['/cliente'])
  }

  desativar() {
    this.clienteService.deleteCliente(this.service.recuperarIdUrl()).subscribe(() => {
      this.retornarListagem();

    })
  }

}
