import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contrato } from 'src/app/interface/contrato';
import { ConectService } from 'src/app/services/conect.service';
import { ContratoService } from 'src/app/services/contrato.service';

@Component({
  selector: 'app-contratos-criar',
  template: `
    <section class="container mt-2 mb-2">
    <div class="card">
        <div class="card-header text-center">
            <h4>
                <strong>
                    CADASTRAR CONTRATO
                </strong>
            </h4>
        </div>

        <div class="card-body">
            <form class="row form-floating needs-validation" id="formContrato">

                <div class="col-md-12 text-center mt-2 mb-2">
                    <input type="text" name="titulo_contrato" class="form-control" id="nomeContrato"
                        placeholder="Título..." [(ngModel)]="contrato.titulo_contrato" required>
                </div>

                <div class="col-md-12 text-center mt-2 mb-2">
                    <textarea name="corpo_contrato" cols="30" rows="25" class="form-control"
                        [(ngModel)]="contrato.corpo_contrato" required></textarea>
                </div>

                <div class="d-flex justify-content-around mt-3">
                    <div class="w-25">
                        <button class="btn btn-sm btn-danger w-100" routerLink="/contratos">
                            Cancelar
                        </button>
                    </div>
                    <div class="w-25">
                        <button type="submit" class="btn btn-sm btn-success w-100" (click)="criar()">
                            Enviar
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</section>
  `,
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
