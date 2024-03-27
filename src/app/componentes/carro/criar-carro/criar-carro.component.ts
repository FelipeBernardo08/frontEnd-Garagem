import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Carro } from 'src/app/interface/carro';
import { CarroService } from 'src/app/services/carro.service';
import { ConectService } from 'src/app/services/conect.service';
import { ImgCarroService } from 'src/app/services/img-carro.service';
import { RequisitosFormularioCarroService } from 'src/app/services/requisitos-formulario-carro.service';

interface ImagensCarro {
  id: any,
  url: SafeUrl,
  caminho: any
}

@Component({
  selector: 'app-criar-carro',
  templateUrl: './criar-carro.component.html',
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
    }
    this.carroImg.createImgCarro(this.formData).subscribe(() => {
    });
  }

  apagarImg(id: any) {
    this.img.splice(id, 1);
  }

}
