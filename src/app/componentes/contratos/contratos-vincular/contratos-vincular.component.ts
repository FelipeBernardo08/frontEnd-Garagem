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
  templateUrl: './contratos-vincular.component.html',
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
    id_contrato: this.recuperarIdUrl(),
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
        console.log(venda);
      })
    } else if (index == 'personalizado') {
    }
  }

  public criarContrato(): void {
    this.contratoVinculadoService.createContratoVinculado(this.contratoVinculado).subscribe((contrato: any) => {
      this.router.navigate([`contratos/imprimir/${contrato.id}`])
    });
  }

  public recuperarIdUrl(): string {
    let href = window.location.href
    let id = href.charAt(href.length - 1);
    return id
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
