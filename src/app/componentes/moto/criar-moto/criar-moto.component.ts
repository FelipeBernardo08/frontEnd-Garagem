import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Moto } from 'src/app/interface/moto';
import { ConectService } from 'src/app/services/conect.service';
import { ImgMotoService } from 'src/app/services/img-moto.service';
import { MotoService } from 'src/app/services/moto.service';
import { RequisitosFormularioMotoService } from 'src/app/services/requisitos-formulario-moto.service';

interface ImagensMoto {
  id: any,
  url: SafeUrl,
  caminho: any
}

@Component({
  selector: 'app-criar-moto',
  template: `
    <section class="container mt-2 mb-2">
    <div class="card">
        <div class="card-header text-center">
            <h4>
                <strong>
                    CADASTRAR VEÍCULO<br>MOTO
                </strong>
            </h4>
        </div>
        <div class="card-body">
            <form class="row form-floating needs-validation" id="formMoto">

                <div class="col-md-6">
                    <label for="listaMarca" class="form-label">Marca</label>
                    <input name="marca" class="form-control" list="optionMarca" id="listaMarca"
                        placeholder="Pesquisar..." required [(ngModel)]="moto.marca">
                    <datalist id="optionMarca">
                        <option *ngFor="let item of listaMarcas" value="{{item.nome}}"></option>
                    </datalist>
                </div>

                <div class="col-md-6">
                    <label for="nomeModelo" class="form-label">Modelo</label>
                    <input name="modelo" [(ngModel)]="moto.modelo" type="text" class="form-control"
                        placeholder="Digite o modelo..." required>
                </div>

                <div class="col-md-4 mt-1">
                    <label for="potenciaMotor">Potencia Motor</label>
                    <select class="form-select mt-2" aria-label="" name="potencia_motor"
                        [(ngModel)]="moto.potencia_motor" required>
                        <option value="" disabled>Selecione</option>
                        <option *ngFor="let item of potencia_motor" value="{{item.nome}}">{{item.nome}}</option>
                    </select>
                </div>


                <div class="col-md-4 mt-1">
                    <label for="anoFabricacao" class="form-label">Ano Fabricação</label>
                    <input type="text" class="form-control" name="ano_fabricacao" [(ngModel)]="moto.ano_fabricacao"
                        placeholder="Digite a fabricação..." required>
                </div>

                <div class="col-md-4 mt-1">
                    <label for="cor">Cor</label>
                    <select class="form-select mt-2" aria-label="" name="cor" [(ngModel)]="moto.cor" required>
                        <option value="" disabled>Selecione</option>
                        <option *ngFor="let item of cor" value="{{item.nome}}">{{item.nome}}</option>
                    </select>
                </div>

                <div class="col-md-3 mt-1">
                    <label for="combustivel">Combustível</label>
                    <select class="form-select mt-2" aria-label="" name="combustivel" [(ngModel)]="moto.combustivel"
                        required>
                        <option value="" disabled>Selecione</option>
                        <option *ngFor="let item of combustivel" value="{{item.nome}}">{{item.nome}}</option>
                    </select>
                </div>

                <div class="col-md-3 mt-1">
                    <label for="cambio">Cambio</label>
                    <select class="form-select mt-2" aria-label="" name="cambio" [(ngModel)]="moto.cambio" required>
                        <option value="" disabled>Selecione</option>
                        <option *ngFor="let item of cambio" value="{{item.nome}}">{{item.nome}}</option>
                    </select>
                </div>

                <div class="col-md-3 mt-1">
                    <label for="freio">Freio</label>
                    <select class="form-select mt-2" aria-label="" name="freio" [(ngModel)]="moto.freio" required>
                        <option value="" disabled>Selecione</option>
                        <option *ngFor="let item of freio" value="{{item.nome}}">{{item.nome}}</option>
                    </select>
                </div>

                <div class="col-md-3 mt-1">
                    <label for="km_atual">Km/atual</label>
                    <input type="text" class="form-control mt-2" name="km_atual" [(ngModel)]="moto.km_atual"
                        placeholder="Digite o KM..." required>
                </div>

                <div class="col-md-3 mt-1">
                    <label for="placa" class="form-label">Placa</label>
                    <input type="text" name="placa" [(ngModel)]="moto.placa" class="form-control"
                        placeholder="Digite a placa..." required>
                </div>

                <div class="col-md-3 mt-1">
                    <label for="chassis" class="form-label">Chassis</label>
                    <input type="text" name="chassis" [(ngModel)]="moto.chassis" class="form-control"
                        placeholder="Digite o chassis..." required>
                </div>

                <div class="col-md-3 mt-1">
                    <label for="valor_pago" class="form-label">Valor Pago</label>
                    <input type="text" class="form-control" name="valor_pago" [(ngModel)]="moto.valor_pago"
                        placeholder="R$" required>
                </div>


                <div class="col-md-3 mt-1">
                    <label for="ipva_valor" class="form-label">Valor IPVA</label>
                    <input type="text" class="form-control" name="ipva_valor" [(ngModel)]="moto.ipva_valor"
                        placeholder="R$" required>
                </div>


                <div class="col-md-4 mt-1">
                    <label for="fipe" class="form-label">Valor FIPE</label>
                    <input type="text" class="form-control" name="fipe" [(ngModel)]="moto.fipe" placeholder="R$"
                        required>
                </div>

                <div class="col-md-4 mt-1 mb-3">
                    <label for="valor_venda" class="form-label">Valor Venda Final</label>
                    <input type="text" class="form-control" name="valor" [(ngModel)]="moto.valor" placeholder="R$"
                        required>
                </div>

                <div class="col-md-4 mt-1">
                    <label for="combustivel">Porcentagem Desconto</label>
                    <input type="text" class="form-control mt-2" name="porcentagem_maxima" placeholder="%"
                        [(ngModel)]="moto.porcentagem_maxima" required>
                </div>

                <div class="container">
                    <hr>
                </div>

                <div class="col-12 mb-4">
                    <div class="text-center">
                        <h3>Opicionais</h3>
                    </div>
                </div>

                <div class="col-4 mt-2">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" name="freio_abs" [(ngModel)]="moto.freio_abs"
                            value="true" id="flexCheckDefault">
                        <label class="form-check-label" for="flexCheckDefault">
                            Freio ABS
                        </label>
                    </div>

                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" name="alarme" [(ngModel)]="moto.alarme"
                            value="true" id="flexCheckDefault">
                        <label class="form-check-label" for="flexCheckDefault">
                            Alarme
                        </label>
                    </div>
                </div>

                <div class="col-4 mt-2">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" name="injecao_eletronica"
                            [(ngModel)]="moto.injecao_eletronica" value="true" id="flexCheckDefault">
                        <label class="form-check-label" for="flexCheckDefault">
                            Injeção eletrônica
                        </label>
                    </div>

                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" name="carregador_12v"
                            [(ngModel)]="moto.carregador_12v" value="true" id="flexCheckDefault">
                        <label class="form-check-label" for="flexCheckDefault">
                            Carregador 12V
                        </label>
                    </div>
                </div>

                <div class="col-4 mt-2">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" name="partida_eletrica"
                            [(ngModel)]="moto.partida_eletrica" value="true" id="flexCheckDefault">
                        <label class="form-check-label" for="flexCheckDefault">
                            Partida elétrica
                        </label>
                    </div>
                </div>

                <div class="col-12 mt-3">
                    <label for="descricao" class="form-label">Descrição</label>
                    <textarea name="descricao" [(ngModel)]="moto.descricao" class="form-control" id="" cols="30"
                        rows="10" placeholder="Opcional"></textarea>
                </div>

                <div class="mt-2 mb-2">
                    <div class="">
                        <h3>Fotos</h3>
                        <div class="row">
                            <div class="col-md-4 mb-1">
                                <div class="card text-center">
                                    <div *ngIf="img[0] != undefined" class="card-header">
                                        <div class="d-flex justify-content-center">
                                            <img [src]="img[0].url" alt="" class="img-fluid">
                                        </div>
                                    </div>
                                    <div class="card-body">
                                        <p>Imagem - 1</p>
                                        <div *ngIf="img[0] == undefined" class="input-group mb-2">
                                            <input type="file" accept="image/*" (change)="selecionarImagem($event, 0)"
                                                class="form-control" aria-describedby="inputGroupFileAddon04"
                                                aria-label="Upload">
                                        </div>

                                        <div *ngIf="img[0] != undefined" class="d-flex justify-content-center">
                                            <button class="btn btn-sm btn-danger"
                                                (click)="apagarImg(0)">Excluir</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-4 mb-1">
                                <div class="card text-center">
                                    <div *ngIf="img[1] != undefined" class="card-header">
                                        <div class="d-flex justify-content-center">
                                            <img [src]="img[1].url" alt="" class="img-fluid">
                                        </div>
                                    </div>
                                    <div class="card-body">
                                        <p>Imagem - 2</p>
                                        <div *ngIf="img[1] == undefined" class="input-group mb-2">
                                            <input type="file" accept="image/*" (change)="selecionarImagem($event, 1)"
                                                class="form-control" aria-describedby="inputGroupFileAddon04"
                                                aria-label="Upload">
                                        </div>

                                        <div *ngIf="img[1] != undefined" class="d-flex justify-content-center">
                                            <button class="btn btn-sm btn-danger"
                                                (click)="apagarImg(1)">Excluir</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-4 mb-1">
                                <div class="card text-center">
                                    <div *ngIf="img[2] != undefined" class="card-header">
                                        <div class="d-flex justify-content-center">
                                            <img [src]="img[2].url" alt="" class="img-fluid">
                                        </div>
                                    </div>
                                    <div class="card-body">
                                        <p>Imagem - 3</p>
                                        <div *ngIf="img[2] == undefined" class="input-group mb-2">
                                            <input type="file" accept="image/*" (change)="selecionarImagem($event, 2)"
                                                class="form-control" aria-describedby="inputGroupFileAddon04"
                                                aria-label="Upload">
                                        </div>

                                        <div *ngIf="img[2] != undefined" class="d-flex justify-content-center">
                                            <button class="btn btn-sm btn-danger"
                                                (click)="apagarImg(2)">Excluir</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-4 mb-1">
                                <div class="card text-center">
                                    <div *ngIf="img[3] != undefined" class="card-header">
                                        <div class="d-flex justify-content-center">
                                            <img [src]="img[3].url" alt="" class="img-fluid">
                                        </div>
                                    </div>
                                    <div class="card-body">
                                        <p>Imagem - 4</p>
                                        <div *ngIf="img[3] == undefined" class="input-group mb-2">
                                            <input type="file" accept="image/*" (change)="selecionarImagem($event, 3)"
                                                class="form-control" aria-describedby="inputGroupFileAddon04"
                                                aria-label="Upload">
                                        </div>

                                        <div *ngIf="img[3] != undefined" class="d-flex justify-content-center">
                                            <button class="btn btn-sm btn-danger"
                                                (click)="apagarImg(3)">Excluir</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-4 mb-1">
                                <div class="card text-center">
                                    <div *ngIf="img[4] != undefined" class="card-header">
                                        <div class="d-flex justify-content-center">
                                            <img [src]="img[4].url" alt="" class="img-fluid">
                                        </div>
                                    </div>
                                    <div class="card-body">
                                        <p>Imagem - 5</p>
                                        <div *ngIf="img[4] == undefined" class="input-group mb-2">
                                            <input type="file" accept="image/*" (change)="selecionarImagem($event, 4)"
                                                class="form-control" aria-describedby="inputGroupFileAddon04"
                                                aria-label="Upload">
                                        </div>

                                        <div *ngIf="img[4] != undefined" class="d-flex justify-content-center">
                                            <button class="btn btn-sm btn-danger"
                                                (click)="apagarImg(4)">Excluir</button>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div class="col-md-4 mb-1">
                                <div class="card text-center">
                                    <div *ngIf="img[5] != undefined" class="card-header">
                                        <div class="d-flex justify-content-center">
                                            <img [src]="img[5].url" alt="" class="img-fluid">
                                        </div>
                                    </div>
                                    <div class="card-body">
                                        <p>Imagem - 6</p>
                                        <div *ngIf="img[5] == undefined" class="input-group mb-2">
                                            <input type="file" accept="image/*" (change)="selecionarImagem($event, 5)"
                                                class="form-control" aria-describedby="inputGroupFileAddon04"
                                                aria-label="Upload">
                                        </div>

                                        <div *ngIf="img[5] != undefined" class="d-flex justify-content-center">
                                            <button class="btn btn-sm btn-danger"
                                                (click)="apagarImg(5)">Excluir</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-4 mb-1">
                                <div class="card text-center">
                                    <div *ngIf="img[6] != undefined" class="card-header">
                                        <div class="d-flex justify-content-center">
                                            <img [src]="img[6].url" alt="" class="img-fluid">
                                        </div>
                                    </div>
                                    <div class="card-body">
                                        <p>Imagem - 7</p>
                                        <div *ngIf="img[6] == undefined" class="input-group mb-2">
                                            <input type="file" accept="image/*" (change)="selecionarImagem($event, 6)"
                                                class="form-control" aria-describedby="inputGroupFileAddon04"
                                                aria-label="Upload">
                                        </div>

                                        <div *ngIf="img[6] != undefined" class="d-flex justify-content-center">
                                            <button class="btn btn-sm btn-danger"
                                                (click)="apagarImg(6)">Excluir</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-4 mb-1">
                                <div class="card text-center">
                                    <div *ngIf="img[7] != undefined" class="card-header">
                                        <div class="d-flex justify-content-center">
                                            <img [src]="img[7].url" alt="" class="img-fluid">
                                        </div>
                                    </div>
                                    <div class="card-body">
                                        <p>Imagem - 8</p>
                                        <div *ngIf="img[7] == undefined" class="input-group mb-2">
                                            <input type="file" accept="image/*" (change)="selecionarImagem($event, 7)"
                                                class="form-control" aria-describedby="inputGroupFileAddon04"
                                                aria-label="Upload">
                                        </div>

                                        <div *ngIf="img[7] != undefined" class="d-flex justify-content-center">
                                            <button class="btn btn-sm btn-danger"
                                                (click)="apagarImg(7)">Excluir</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>


                <div class="row">
                    <div class="col-md-6">
                        <button class="btn btn-sm btn-danger mt-3 w-100 m-1" routerLink="/carro">Cancelar</button>
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
  styleUrls: ['./criar-moto.component.css']
})
export class CriarMotoComponent implements OnInit {

  constructor(
    private service: ConectService,
    private serviceRequisitos: RequisitosFormularioMotoService,
    private sanitizer: DomSanitizer,
    private router: Router,
    private motoService: MotoService,
    private motoImg: ImgMotoService
  ) { }

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

  moto: Moto = {
    id: '',
    marca: '',
    modelo: '',
    potencia_motor: '',
    combustivel: '',
    freio: '',
    cambio: '',
    km_atual: '',
    ano_fabricacao: '',
    final_placa: '',
    cor: '',
    descricao: '',

    freio_abs: false,
    alarme: false,
    injecao_eletronica: false,
    carregador_12v: false,
    partida_eletrica: false,

    placa: '',
    chassis: '',
    ipva_pago: false,
    ipva_valor: undefined,
    fipe: undefined,
    valor_pago: undefined,
    porcentagem_maxima: undefined,
    valor: undefined,
    vendido: false,

    fotos: undefined
  }
  listaMarcas: Array<any> = this.serviceRequisitos.listaMarcas
  potencia_motor: Array<any> = this.serviceRequisitos.potenciaMotor
  cor: Array<any> = this.serviceRequisitos.cor
  combustivel: Array<any> = this.serviceRequisitos.combustivel
  cambio: Array<any> = this.serviceRequisitos.cambio
  freio: Array<any> = this.serviceRequisitos.freio
  imagemSelecionada: any;
  img: ImagensMoto[] = [];
  urlImagemSelecionada: SafeUrl = '';
  formData: any;

  selecionarImagem(event: any, id: number) {
    this.imagemSelecionada = event.target.files;
    const imagem: ImagensMoto = {
      id: id,
      url: this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(this.imagemSelecionada[0])),
      caminho: this.imagemSelecionada[0]
    };

    this.adicionarAoArray(imagem)
  }

  adicionarAoArray(imagem: any) {
    this.img[imagem.id] = imagem
  }

  criarImagem() {
    this.formData = new FormData();
    for (let i = 0; i < this.img.length; i++) {
      this.formData.append(`img${i + 1}`, this.img[i].caminho);
    }
    this.motoImg.createImgMoto(this.formData).subscribe(() => {
    });
  }

  apagarImg(id: any) {
    this.img.splice(id, 1);
  }

  enviar() {
    let form = document.getElementById('formMoto')
    let valid = form?.classList.contains('ng-valid')
    if (valid) {
      this.motoService.createMoto(this.moto).subscribe(moto => {
        let id: any = moto.id
        this.criarImagem()
        this.moto.fotos = id
        this.motoService.updateMoto(this.moto, id).subscribe(() => {
          this.router.navigate(['/moto'])
        })
      }, error => {
      })
    } else {
      //mensagem de erro
    }
  }

}
