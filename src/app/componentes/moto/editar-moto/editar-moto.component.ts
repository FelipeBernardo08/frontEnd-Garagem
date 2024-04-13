import { MotoService } from './../../../services/moto.service';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Moto } from 'src/app/interface/moto';
import { ConectService } from 'src/app/services/conect.service';
import { ImgMotoService } from 'src/app/services/img-moto.service';
import { RequisitosFormularioMotoService } from 'src/app/services/requisitos-formulario-moto.service';

interface ImagensMoto {
  id: any,
  url: SafeUrl,
  caminho: any
}

@Component({
  selector: 'app-editar-moto',
  templateUrl: './editar-moto.component.html',
  styleUrls: ['./editar-moto.component.css']
})
export class EditarMotoComponent implements OnInit {

  constructor(
    private service: ConectService,
    private router: Router,
    private serviceRequisitos: RequisitosFormularioMotoService,
    private sanitizer: DomSanitizer,
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

    this.imagemCaminho = this.service.urlImg
    this.motoService.readMotoId(this.service.recuperarIdUrl()).subscribe(motos => {
      this.moto = motos
      this.atribuirImg(this.moto.fotos)
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

  imagemCaminho: any
  imagemSelecionada: any;
  img: Array<any> = []
  urlImagemSelecionada: SafeUrl = ''
  formData: any;
  imagem: Array<any> = []
  condicaoImagem: Array<boolean> = []
  condicaoBotao: boolean = true

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
    let form = document.getElementById('formMoto')
    let valid = form?.classList.contains('ng-valid')
    if (valid) {
      this.criarImagem()
      this.motoImg.updateImgMoto(this.formData, this.service.recuperarIdUrl()).subscribe(imagem => {
        this.moto.fotos = this.service.recuperarIdUrl()
        this.motoService.updateMoto(this.moto, this.service.recuperarIdUrl()).subscribe(() => {
          this.router.navigate(['/moto'])
        })
      })
    } else {
    }
  }

  desativar() {
    this.motoService.deleteMoto(this.service.recuperarIdUrl()).subscribe(() => {
      this.motoImg.deleteImgMoto(this.service.recuperarIdUrl()).subscribe(() => {
        this.router.navigate(['/moto'])
      })
    });
  }

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
    this.service.apagarTodasImagensMoto(this.formData, this.service.recuperarIdUrl()).subscribe(() => {
      window.location.reload()
    });
  }


}
