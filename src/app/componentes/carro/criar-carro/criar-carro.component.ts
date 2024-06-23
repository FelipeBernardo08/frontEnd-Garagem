import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Carro } from 'src/app/interface/carro';
import { CarroService } from 'src/app/services/carro.service';
import { ImgCarroService } from 'src/app/services/img-carro.service';
import { RequisitosFormularioCarroService } from 'src/app/services/requisitos-formulario-carro.service';

interface ImagensCarro {
    id: any,
    url: SafeUrl,
    caminho: any
}

@Component({
    selector: 'app-criar-carro',
    template: `
    <section class="container mt-2 mb-2">
    <div class="card">
        <div class="card-header text-center">
            <h4>
                <strong>
                    CADASTRAR VEÍCULO <br>CARRO
                </strong>
            </h4>
        </div>
        <div class="card-body">
            <form class="row form-floating needs-validation" id="formCarro">

                <div class="col-md-6">
                    <label for="listaMarca" class="form-label">Marca</label>
                    <input name="marca" class="form-control" list="optionMarca" id="listaMarca"
                        placeholder="Pesquisar..." required [(ngModel)]="carro.marca">
                    <datalist id="optionMarca">
                        <option *ngFor="let item of listaMarcas" value="{{item.nome}}"></option>
                    </datalist>
                </div>

                <div class="col-md-6">
                    <label for="nomeModelo" class="form-label">Modelo</label>
                    <input name="modelo" [(ngModel)]="carro.modelo" type="text" class="form-control"
                        placeholder="Digite o modelo..." required>
                </div>

                <div class="col-md-3 mt-1">
                    <label for="potenciaMotor">Potencia Motor</label>
                    <select class="form-select mt-2" aria-label="" name="potencia_motor"
                        [(ngModel)]="carro.potencia_motor" required>
                        <option value="" disabled>Selecione</option>
                        <option *ngFor="let item of potenciaMotor" value="{{item.nome}}">{{item.nome}}</option>
                    </select>
                </div>

                <div class="col-md-3 mt-1">
                    <label for="categoria">Categoria</label>
                    <select class="form-select mt-2" aria-label="" name="categoria" [(ngModel)]="carro.categoria"
                        required>
                        <option value="" disabled>Selecione</option>
                        <option *ngFor="let item of categoria" value="{{item.nome}}">{{item.nome}}</option>
                    </select>
                </div>

                <div class="col-md-3 mt-1">
                    <label for="anoFabricacao" class="form-label">Ano Fabricação</label>
                    <input type="text" class="form-control" name="ano_fabricacao" [(ngModel)]="carro.ano_fabricacao"
                        placeholder="Digite a fabricação..." required>
                </div>

                <div class="col-md-3 mt-1">
                    <label for="anoFabricacao" class="form-label">Portas</label>
                    <select class="form-select " aria-label="" name="portas" [(ngModel)]="carro.portas" required>
                        <option value="" disabled>Selecione</option>
                        <option value="2">2</option>
                        <option value="4">4</option>
                    </select>
                </div>

                <div class="col-md-3 mt-1">
                    <label for="cor">Cor</label>
                    <select class="form-select mt-2" aria-label="" name="cor" [(ngModel)]="carro.cor" required>
                        <option value="" disabled>Selecione</option>
                        <option *ngFor="let item of cor" value="{{item.nome}}">{{item.nome}}</option>
                    </select>
                </div>

                <div class="col-md-3 mt-1">
                    <label for="km_atual" class="form-label">Km/atual</label>
                    <input type="text" name="km_atual" [(ngModel)]="carro.km_atual" class="form-control"
                        placeholder="Digite o km..." required>
                </div>

                <div class="col-md-3 mt-1">
                    <label for="placa" class="form-label">Placa</label>
                    <input type="text" name="placa" [(ngModel)]="carro.placa" class="form-control"
                        placeholder="Digite a placa..." required>
                </div>

                <div class="col-md-3 mt-1">
                    <label for="chassis" class="form-label">Chassis</label>
                    <input type="text" name="chassis" [(ngModel)]="carro.chassis" class="form-control"
                        placeholder="Digite o chassis..." required>
                </div>

                <div class="col-md-3 mt-1">
                    <label for="valor_pago" class="form-label">Valor Pago</label>
                    <input type="text" class="form-control" name="valor_pago" [(ngModel)]="carro.valor_pago" value="R$"
                        placeholder="R$" required>
                </div>

                <div class="col-md-3 mt-1">
                    <label for="ipva_valor" class="form-label">Valor IPVA</label>
                    <input type="text" class="form-control" name="ipva_valor" [(ngModel)]="carro.ipva_valor" value="R$"
                        placeholder="R$" required>
                </div>


                <div class="col-md-3 mt-1">
                    <label for="fipe" class="form-label">Valor FIPE</label>
                    <input type="text" class="form-control" name="fipe" [(ngModel)]="carro.fipe" value="R$"
                        placeholder="R$" required>
                </div>

                <div class="col-md-3 mt-1 mb-3">
                    <label for="valor_venda" class="form-label">Valor Venda Final</label>
                    <input type="text" class="form-control" name="valor" [(ngModel)]="carro.valor" value="R$"
                        placeholder="R$" required>
                </div>

                <div class="col-md-3 mt-1">
                    <label for="valvulas_Motor">Valvula Motor</label>
                    <select class="form-select mt-2" aria-label="" name="valvulas_motor"
                        [(ngModel)]="carro.valvulas_motor" required>
                        <option value="" disabled>Selecione</option>
                        <option *ngFor="let item of valvulaMotor" value="{{item.nome}}">{{item.nome}}</option>
                    </select>
                </div>

                <div class="col-md-3 mt-1">
                    <label for="combustivel">Combustível</label>
                    <select class="form-select mt-2" aria-label="" name="combustivel" [(ngModel)]="carro.combustivel"
                        required>
                        <option value="" disabled>Selecione</option>
                        <option *ngFor="let item of combustivel" value="{{item.nome}}">{{item.nome}}</option>
                    </select>
                </div>


                <div class="col-md-3 mt-1">
                    <label for="combustivel">Cambio</label>
                    <select class="form-select mt-2" aria-label="" name="cambio" [(ngModel)]="carro.cambio" required>
                        <option value="" disabled>Selecione</option>
                        <option *ngFor="let item of cambio" value="{{item.nome}}">{{item.nome}}</option>
                    </select>
                </div>

                <div class="col-md-3 mt-1">
                    <label for="combustivel">Porcentagem Desconto</label>
                    <input type="text" class="form-control mt-2" name="porcentagem_maxima" placeholder="%"
                        [(ngModel)]="carro.porcentagem_maxima" required>
                </div>

                <div class="container">
                    <hr>
                </div>

                <div class="col-12 mb-4">
                    <div class="text-center">
                        <h3>Opicionais</h3>
                    </div>
                </div>

                <div class="col-md-3 mt-2">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" name="ar_condicionado"
                            [(ngModel)]="carro.ar_condicionado" value="true" id="flexCheckDefault">
                        <label class="form-check-label" for="flexCheckDefault">
                            Ar-condicionado
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" name="ar_quente" value="true"
                            [(ngModel)]="carro.ar_quente" id="flexCheckChecked">
                        <label class="form-check-label" for="flexCheckChecked">
                            Ar-quente
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" name="air_bag_dianteiro" value="true"
                            [(ngModel)]="carro.air_bag_dianteiro" id="flexCheckChecked">
                        <label class="form-check-label" for="flexCheckChecked">
                            Air-bag Dianteiro
                        </label>
                    </div>
                </div>

                <div class="col-md-3 mt-2">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" name="air_bag_traseiro" value="true"
                            [(ngModel)]="carro.air_bag_traseiro" id="flexCheckChecked">
                        <label class="form-check-label" for="flexCheckChecked">
                            Air-bag Traseiro
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" name="vidro_eletrico_dianteiro" value="true"
                            [(ngModel)]="carro.vidro_eletrico_dianteiro" id="flexCheckChecked">
                        <label class="form-check-label" for="flexCheckChecked">
                            Vidro Elétrico Dianteiro
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" name="vidro_eletrico_traseiro" value="true"
                            [(ngModel)]="carro.vidro_eletrico_traseiro" id="flexCheckChecked">
                        <label class="form-check-label" for="flexCheckChecked">
                            Vidro Elétrico Traseiro
                        </label>
                    </div>
                </div>

                <div class="col-md-3 mt-2">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" name="multimidea" value="true"
                            [(ngModel)]="carro.multimidea" id="flexCheckDefault">
                        <label class="form-check-label" for="flexCheckDefault">
                            Multimídea
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" name="camera_re" value="true"
                            [(ngModel)]="carro.camera_re" id="flexCheckDefault">
                        <label class="form-check-label" for="flexCheckDefault">
                            Câmera de ré
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" name="alarme" value="true"
                            [(ngModel)]="carro.alarme" id="flexCheckDefault">
                        <label class="form-check-label" for="flexCheckDefault">
                            Alarme
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" name="ipva_pago" value="true"
                            [(ngModel)]="carro.ipva_pago" id="flexCheckDefault">
                        <label class="form-check-label" for="flexCheckDefault">
                            IPVA Pago
                        </label>
                    </div>
                </div>

                <div class="col-md-3 mt-2">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" name="trava_eletrica" value="true"
                            [(ngModel)]="carro.travas_eletricas" id="flexCheckDefault">
                        <label class="form-check-label" for="flexCheckDefault">
                            Trava Elétrica
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" name="computador_bordo" value="true"
                            [(ngModel)]="carro.computador_bordo" id="flexCheckDefault">
                        <label class="form-check-label" for="flexCheckDefault">
                            Computador de Bordo
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" name="regulagem_banco" value="true"
                            [(ngModel)]="carro.regulagem_banco" id="flexCheckDefault">
                        <label class="form-check-label" for="flexCheckDefault">
                            Regulagem Banco
                        </label>
                    </div>

                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" name="regulagem_volante" value="true"
                            [(ngModel)]="carro.regulagem_volante" id="flexCheckDefault">
                        <label class="form-check-label" for="flexCheckDefault">
                            Regulagem Volante
                        </label>
                    </div>
                </div>

                <div class="col-12 mt-3">
                    <label for="descricao" class="form-label">Descrição</label>
                    <textarea name="descricao" [(ngModel)]="carro.descricao" class="form-control" id="" cols="30"
                        rows="10" placeholder="Opcional"></textarea>
                </div>

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
                                    <button class="btn btn-sm btn-danger" (click)="apagarImg(0)">Excluir</button>
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
                                    <button class="btn btn-sm btn-danger" (click)="apagarImg(1)">Excluir</button>
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
                                    <button class="btn btn-sm btn-danger" (click)="apagarImg(2)">Excluir</button>
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
                                    <button class="btn btn-sm btn-danger" (click)="apagarImg(3)">Excluir</button>
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
                                    <button class="btn btn-sm btn-danger" (click)="apagarImg(4)">Excluir</button>
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
                                    <button class="btn btn-sm btn-danger" (click)="apagarImg(5)">Excluir</button>
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
                                    <button class="btn btn-sm btn-danger" (click)="apagarImg(6)">Excluir</button>
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
                                    <button class="btn btn-sm btn-danger" (click)="apagarImg(7)">Excluir</button>
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
    styleUrls: ['./criar-carro.component.css']
})
export class CriarCarroComponent implements OnInit {

    constructor(
        private router: Router,
        private sanitizer: DomSanitizer,
        private serviceForm: RequisitosFormularioCarroService,
        private serviceCarro: CarroService,
        private carroImg: ImgCarroService
    ) { }

    listaMarcas = this.serviceForm.listaMarcas
    potenciaMotor = this.serviceForm.potenciaMotor
    valvulaMotor = this.serviceForm.valvulaMotor
    combustivel = this.serviceForm.combustivel
    cambio = this.serviceForm.cambio
    cor = this.serviceForm.cor
    categoria = this.serviceForm.categoria

    imagemSelecionada: any;
    img: ImagensCarro[] = [];
    urlImagemSelecionada: SafeUrl = '';
    formData: any;


    public carro: Carro = {
        marca: '',
        modelo: '',
        potencia_motor: '',
        valvulas_motor: '',
        combustivel: '',
        cambio: '',
        km_atual: '',
        ano_fabricacao: '',
        final_placa: '',
        cor: '',
        categoria: '',
        descricao: '',
        portas: '',

        ar_condicionado: false,
        ar_quente: false,
        air_bag_dianteiro: false,
        air_bag_traseiro: false,
        vidro_eletrico_dianteiro: false,
        vidro_eletrico_traseiro: false,
        multimidea: false,
        camera_re: false,
        alarme: false,
        travas_eletricas: false,
        computador_bordo: false,
        regulagem_banco: false,
        regulagem_volante: false,

        placa: '',
        chassis: '',
        ipva_pago: false,
        ipva_valor: undefined,
        fipe: undefined,
        valor_pago: undefined,
        porcentagem_maxima: undefined,
        valor: undefined,
        vendido: false,

        fotos: ""
    };
    //

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
        let form = document.getElementById('formCarro')
        let valid = form?.classList.contains('ng-valid')
        if (valid) {
            this.serviceCarro.createCarro(this.carro).subscribe(carro => {
                let id: any = carro.id
                this.criarImagem();
                this.carro.fotos = id;
                this.serviceCarro.updateCarro(this.carro, id).subscribe(() => {
                    this.router.navigate(['/carro'])
                });
            }, error => {
            });
        } else {
        }
    }

    selecionarImagem(event: any, id: number) {
        this.imagemSelecionada = event.target.files;
        const imagem: ImagensCarro = {
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
            console.log(this.formData.get(`img${i + 1}`))
        }
        this.carroImg.createImgCarro(this.formData).subscribe(() => {
        });
    }

    apagarImg(id: any) {
        this.img.splice(id, 1);
    }

}
