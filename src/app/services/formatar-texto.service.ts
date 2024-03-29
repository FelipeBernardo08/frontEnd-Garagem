import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormatarTextoService {

  constructor() { }

  public formatarTexto(contrato: any): void {
    contrato.contrato.corpo_contrato = contrato.contrato.corpo_contrato.replace(/;/g, '<br><br>');

    //cliente
    contrato.contrato.corpo_contrato = contrato.contrato.corpo_contrato.replace('nome_cliente', contrato.venda.cliente.nome);
    contrato.contrato.corpo_contrato = contrato.contrato.corpo_contrato.replace('cpf_cliente', contrato.venda.cliente.cpf);
    contrato.contrato.corpo_contrato = contrato.contrato.corpo_contrato.replace('rua_cliente', contrato.venda.cliente.end_rua);
    contrato.contrato.corpo_contrato = contrato.contrato.corpo_contrato.replace('numero_cliente', contrato.venda.cliente.end_numero);
    contrato.contrato.corpo_contrato = contrato.contrato.corpo_contrato.replace('bairro_cliente', contrato.venda.cliente.end_bairro);
    contrato.contrato.corpo_contrato = contrato.contrato.corpo_contrato.replace('cidade_cliente', contrato.venda.cliente.end_cidade);
    contrato.contrato.corpo_contrato = contrato.contrato.corpo_contrato.replace('estado_cliente', contrato.venda.cliente.end_estado);

    //veiculo
    if (contrato.venda.moto != null) {
      contrato.contrato.corpo_contrato = contrato.contrato.corpo_contrato.replace('veiculo_marca', contrato.venda.moto.marca);
      contrato.contrato.corpo_contrato = contrato.contrato.corpo_contrato.replace('veiculo_modelo', contrato.venda.moto.modelo);
      contrato.contrato.corpo_contrato = contrato.contrato.corpo_contrato.replace('veiculo_placa', contrato.venda.moto.placa);
      contrato.contrato.corpo_contrato = contrato.contrato.corpo_contrato.replace('veiculo_ano', contrato.venda.moto.ano_fabricacao);
    } else if (contrato.venda.carro != null) {
      contrato.contrato.corpo_contrato = contrato.contrato.corpo_contrato.replace('veiculo_marca', contrato.venda.carro.marca);
      contrato.contrato.corpo_contrato = contrato.contrato.corpo_contrato.replace('veiculo_modelo', contrato.venda.carro.modelo);
      contrato.contrato.corpo_contrato = contrato.contrato.corpo_contrato.replace('veiculo_placa', contrato.venda.carro.placa);
      contrato.contrato.corpo_contrato = contrato.contrato.corpo_contrato.replace('veiculo_ano', contrato.venda.carro.ano_fabricacao);
    }
  }
}
