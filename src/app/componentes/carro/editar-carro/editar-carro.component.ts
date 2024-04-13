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
  selector: 'app-editar-carro',
  templateUrl: './editar-carro.component.html',
  styleUrls: ['./editar-carro.component.css']
})
export class EditarCarroComponent implements OnInit {

  constructor(
    private service: ConectService,
    private router: Router,
    private sanitizer: DomSanitizer,
    private serviceForm: RequisitosFormularioCarroService,
    private serviceImg: ImgCarroService,
    private serviceCarro: CarroService) { }

  listaMarcas = this.serviceForm.listaMarcas
  potenciaMotor = this.serviceForm.potenciaMotor
  valvulaMotor = this.serviceForm.valvulaMotor
  combustivel = this.serviceForm.combustivel
  cambio = this.serviceForm.cambio
  cor = this.serviceForm.cor
  categoria = this.serviceForm.categoria

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
  };

  imagemCaminho: any
  imagemSelecionada: any;
  img: Array<any> = []
  urlImagemSelecionada: SafeUrl = ''
  formData: any;
  imagem: Array<any> = []
  condicaoImagem: Array<boolean> = []
  condicaoBotao: boolean = true

  ngOnInit(): void {
    const forms = document.querySelectorAll('.needs-validation')
    Array.from(forms).forEach((form: any) => {
      form.addEventListener('submit', (event: any) => {
        if (form.classList == 'ng-valid') {
        }
        form.classList.add('was-validated')
      }, false)
    })

    this.imagemCaminho = this.service.urlImg
    this.serviceCarro.readCarroId(this.service.recuperarIdUrl()).subscribe(carros => {
      this.carro = carros
      this.atribuirImg(this.carro.fotos)
    })
  }

  atribuirImg(img: any) {
    this.imagem[0] = img.img1
    this.imagem[1] = img.img2
    this.imagem[2] = img.img3
    this.imagem[3] = img.img4
    this.imagem[4] = img.img5
    this.imagem[5] = img.img6
    this.imagem[6] = img.img7
    this.imagem[7] = img.img8

    for (let i = 0; i < this.imagem.length; i++) {
      if (this.imagem[i] != null) {
        this.condicaoImagem[i] = true
        this.condicaoBotao = false
      }
    }
  }

  atualizar() {
    let form = document.getElementById('formCarro')
    let valid = form?.classList.contains('ng-valid')
    if (valid) {
      this.criarImagem()
      this.serviceImg.updateImg(this.formData, this.service.recuperarIdUrl()).subscribe(imagem => {
        this.carro.fotos = this.service.recuperarIdUrl();
        this.serviceCarro.updateCarro(this.carro, this.service.recuperarIdUrl()).subscribe(() => {
          this.router.navigate(['/carro'])
        })
      })
    } else {

    }
  }

  desativar() {
    this.serviceCarro.deleteCarro(this.service.recuperarIdUrl()).subscribe(() => {
      this.serviceImg.deleteImg(this.service.recuperarIdUrl()).subscribe(() => {
        this.router.navigate(['/carro'])
      })
    });
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
      if (this.img[i] != null) {
        this.formData.append(`img${i + 1}`, this.img[i].caminho);
      }
    }
  }

  apagarImg(id: any) {
    this.condicaoImagem[id] = true
    this.img.splice(id, 1);
  }

  alterarImagem(id: any) {
    this.condicaoImagem[id] = false
  }

  apagarTodasImagens() {
    this.formData = new FormData();
    for (let i = 0; i < this.imagem.length; i++) {
      this.img[i] = null
      this.formData.append(`img${i + 1}`, this.img[i]);
    }
    this.serviceImg.apagarTodasImagens(this.formData, this.service.recuperarIdUrl()).subscribe(() => {
      window.location.reload()
    });
  }

}