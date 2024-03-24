import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contrato } from 'src/app/interface/contrato';
import { ConectService } from 'src/app/services/conect.service';

@Component({
  selector: 'app-contratos-criar',
  templateUrl: './contratos-criar.component.html',
  styleUrls: ['./contratos-criar.component.css']
})
export class ContratosCriarComponent implements OnInit {

  constructor(private service: ConectService, private router: Router) { }

  contrato: Contrato = {
    titulo_contrato: '',
    corpo_contrato: ''
  }

  placeholder: string = `  Corpo...

  Digite aqui o corpo do seu contrato. Utilize ao final de cada paragrafo a potuação ' ; '. 
  Ex: Esta é uma linha com;
  Parágrafo.
  
  Para fazer referencia á cliente utilize nome_cliente, cpf_cliente.
  O mesmo para veiculo, exemplo: veiculo_marca, veiculo_modelo.
  `;

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

  public criar(): void {
    let form = document.getElementById('formContrato')
    let valid = form?.classList.contains('ng-valid')
    if (valid) {
      this.service.createContrato(this.contrato).subscribe(() => {
        console.log('ok');
      })
    } else {
      //erro
    }
  }

}
