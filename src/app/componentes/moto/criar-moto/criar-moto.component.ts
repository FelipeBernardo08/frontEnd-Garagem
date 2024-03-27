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
  templateUrl: './criar-moto.component.html',
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
