import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Clientes } from 'src/app/interface/clientes';
import { ConectService } from 'src/app/services/conect.service';

@Component({
  selector: 'app-editar-cliente',
  templateUrl: './editar-cliente.component.html',
  styleUrls: ['./editar-cliente.component.css']
})
export class EditarClienteComponent implements OnInit {

  constructor(private service: ConectService, private router: Router) { }

  public cliente: Clientes = {
    nome: '',
    cpf: '',
    nascimento: '',
    email: '',
    end_rua: '',
    end_numero: '',
    end_bairro: '',
    end_cidade: '',
    end_estado: ''
  }


  ngOnInit(): void {
    const forms = document.querySelectorAll('.needs-validation')
    Array.from(forms).forEach((form:any) => {
      form.addEventListener('submit', (event:any) => {
        if(form.classList == 'ng-valid'){
        }
        form.classList.add('was-validated')
      }, false)
    })

    this.service.readClientesId(this.recuperarIdUrl()).subscribe(clientes =>[
      this.cliente = clientes
    ]) 
  }

  recuperarIdUrl(){
    let href = window.location.href
    let id = href.charAt(href.length -1);
    return id
  }

  atualizar(){
    let form = document.getElementById('formCliente')
    let valid = form?.classList.contains('ng-valid')
    if(valid){
      this.service.updateCliente(this.recuperarIdUrl(), this.cliente).subscribe(()=>{
        console.log('Dados atualizados com sucesso!')
        this.retornarListagem();
      })
    }else{
      //mensagem de erro
    }
  }

  retornarListagem(){
    this.router.navigate(['/cliente'])
  }

  desativar(){
    this.service.deleteCliente(this.recuperarIdUrl()).subscribe(() => {
      console.log('Dados excluidos com sucesso!');
      this.retornarListagem();

    })
  }

}
