import { Component, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Router } from '@angular/router';
import { Clientes } from 'src/app/interface/clientes';
import { ConectService } from 'src/app/services/conect.service';

@Component({
  selector: 'app-criar-cliente',
  templateUrl: './criar-cliente.component.html',
  styleUrls: ['./criar-cliente.component.css'],
})
export class CriarClienteComponent implements OnInit {

  constructor(private service: ConectService, private route: Router) { }

  public cliente: Clientes = {
    nome: '',
    cpf: '',
    nascimento: '',
    email: '',
    end_rua: '',
    end_numero: '',
    end_bairro: '',
    end_cidade: '',
    end_estado: ''
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
      this.service.criarCliente(this.cliente).subscribe(() => {
        this.route.navigate(['/cliente'])
      })
    }
  }
}
