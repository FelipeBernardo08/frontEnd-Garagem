import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contrato } from 'src/app/interface/contrato';
import { ConectService } from 'src/app/services/conect.service';
import { ContratoService } from 'src/app/services/contrato.service';

@Component({
  selector: 'app-contratos-criar',
  templateUrl: './contratos-criar.component.html',
  styleUrls: ['./contratos-criar.component.css']
})
export class ContratosCriarComponent implements OnInit {

  constructor(
    private router: Router,
    private contratoService: ContratoService
  ) { }

  contrato: Contrato = {
    titulo_contrato: '',
    corpo_contrato: ''
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

  public criar(): void {
    let form = document.getElementById('formContrato')
    let valid = form?.classList.contains('ng-valid')
    if (valid) {
      this.contratoService.createContrato(this.contrato).subscribe(() => {
        this.router.navigate(['/contratos']);
      })
    } else {
      //erro
    }
  }

}
