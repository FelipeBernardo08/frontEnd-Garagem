import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contrato } from 'src/app/interface/contrato';
import { ContratoVinculado } from 'src/app/interface/contrato-vinculado';
import { Vendas } from 'src/app/interface/vendas';
import { ClienteService } from 'src/app/services/cliente.service';
import { ConectService } from 'src/app/services/conect.service';
import { ContratoVinculadoService } from 'src/app/services/contrato-vinculado.service';
import { ContratoService } from 'src/app/services/contrato.service';
import { VendaService } from 'src/app/services/venda.service';

@Component({
  selector: 'app-contratos-vincular',
  template: `
    <section class="container mt-2 mb-2">
    <div class="card">
        <div class="card-header text-center">
            <h3>
                <strong>
                    VINCULAR CONTRATO
                </strong>
            </h3>
        </div>

        <div class="card-body">
            <form class="row form-floating needs-validation" id="formCliente">

                <div class="col-md-6">
                    <label for="" class="form-label mt-2">Vincular Por</label>
                    <select name="" class="form-select mt-2" (change)="selecionarVinculo($event)" required>
                        <option value="" disabled selected>Selecione</option>
                        <option value="venda">Venda</option>
                        <option value="personalizado">Personalizado</option>
                    </select>
                </div>

                <div *ngIf="vendas.length > 0" class="col-md-6">
                    <label for="" class="form-label mt-2">Vendas</label>
                    <select name="id_venda" class="form-select mt-2" id="" [(ngModel)]="contratoVinculado.id_venda">
                        <option value="" disabled selected>Selecione</option>
                        <option *ngFor="let item of vendas" value="{{item.id}}">
                            <p *ngIf="item.id_moto != null">
                                Venda: {{item.id}} - Veículo:
                                {{item.moto.marca}} {{item.moto.modelo}} - Cliente: {{item.cliente.nome}}
                            </p>
                            <p *ngIf="item.id_carro != null">
                                Venda: {{item.id}} - Veículo:
                                {{item.carro.marca}} {{item.carro.modelo}} - Cliente: {{item.cliente.nome}}
                            </p>
                        </option>
                    </select>
                </div>

                <div class="d-flex justify-content-center mt-3">
                    <button type="submit" class="btn btn-sm btn-success w-25" (click)="criarContrato()">
                        Enviar e Imprimir
                    </button>
                </div>
            </form>
        </div>
    </div>
</section>
  `,
  styleUrls: ['./contratos-vincular.component.css']
})
export class ContratosVincularComponent implements OnInit {

  constructor(
    private service: ConectService,
    private router: Router,
    private clienteService: ClienteService,
    private vendaService: VendaService,
    private contratoVinculadoService: ContratoVinculadoService
  ) { }

  contratos: Contrato[] = [];
  vendas: Array<any> = [];

  contratoVinculado: ContratoVinculado = {
    id_contrato: this.service.recuperarIdUrl(),
    id_carro: null,
    id_cliente: null,
    id_venda: null,
    id_moto: null,
    id_vendedor: null
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

  public selecionarVinculo(e: any): void {
    let index = e.target.value
    if (index == 'venda') {
      this.vendaService.getVenda().subscribe((venda: any) => {
        this.vendas = venda;
      })
    } else if (index == 'personalizado') {
    }
  }

  public criarContrato(): void {
    this.contratoVinculadoService.createContratoVinculado(this.contratoVinculado).subscribe((contrato: any) => {
      this.router.navigate([`contratos/imprimir/${contrato.id}`])
    });
  }


  public imprimir(): void {
    let conteudo: any = document.getElementById('contratoImprimir')?.innerHTML;
    let imprimir = window.open('', '', 'heigth=700,width=800');
    imprimir?.document.write('<html><head></head><body>');
    imprimir?.document.write(conteudo);
    imprimir?.document.write('</body></html>');
    imprimir?.document.close();
    imprimir?.print();
  }
}
