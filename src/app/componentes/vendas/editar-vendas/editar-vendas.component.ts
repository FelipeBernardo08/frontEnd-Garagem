import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Carro } from 'src/app/interface/carro';
import { ConectService } from 'src/app/services/conect.service';
import { VendaService } from 'src/app/services/venda.service';

@Component({
  selector: 'app-editar-vendas',
  template: `
    <div class="d-flex justify-content-end">
    <button class="btn btn-sm btn-danger material-icons botao m-2 p-1" matTooltip="Retornar"
        routerLink="/venda">reply</button>
</div>
<section class="container">
    <div class="row">
        <div class="text-center">
            <h3>
                <strong>
                    Venda #{{vendas.id}}
                </strong>
            </h3>
        </div>
    </div>
    <div class="row mt-2">
        <div class="col-md-6">
            <div class="card">
                <div class="card-header">
                    <div class="tex-center">
                        <div class="text-center">
                            <strong>
                                Resumo venda
                            </strong>
                        </div>
                    </div>
                </div>
                <div class="card-body">
                    <form class="row form-floating needs-validation">
                        <div class="col-md-6 mt-1">
                            <label for="" class="form-label">Valor</label>
                            <input type="text" class="form-control" name="valor_total" [(ngModel)]="vendas.valor_total"
                                disabled>
                        </div>
                        <div class="col-md-6 mt-1">
                            <label for="" class="form-label">Forma de Pagamento</label>
                            <input type="text" class="form-control" name="forma_pgto" [(ngModel)]="vendas.forma_pgto" disabled>
                        </div>
                        <div class="col-md-12 mt-1">
                            <label class="form-label">Data</label>
                            <input type="text" class="form-control" name="created_at" [(ngModel)]="vendas.created_at"
                                disabled>
                        </div>
                        <div class="col-md-12 mt-1">
                            <label class="form-label">Observacao</label>
                           <textarea name="observacao" class="form-control" [(ngModel)]="vendas.observacao" id="" cols="30" rows="6" disabled></textarea>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <div class="col-md-6">
            <div class="card">
                <div class="card-header">
                    <div class="text-center">
                        <strong>
                            Cliente
                        </strong>
                    </div>
                </div>
                <div class="card-body">
                    <form class="row form-floating needs-validation" id="formCliente">
                        <div class="col-md-6 mt-2">
                            <label for="nome" class="form-label">Nome</label>
                            <input type="text" name="nome" class="form-control" id="nome" placeholder="Digite o nome..."
                                [(ngModel)]="cliente.nome" disabled>
                        </div>

                        <div class="col-md-6 mt-2">
                            <label for="cpf" class="form-label">CPF</label>
                            <input type="text" name="cpf" class="form-control" id="cpf" placeholder="Digite o CPF..."
                                [(ngModel)]="cliente.cpf" disabled>
                        </div>

                        <div class="col-md-8 mt-2">
                            <label for="email" class="form-label">E-mail</label>
                            <input type="text" name="email" class="form-control" id="email"
                                placeholder="Digite o E-mail..." [(ngModel)]="cliente.email" disabled>
                        </div>

                        <div class="col-md-4 mt-2">
                            <label for="nascimento" class="form-label">Data de Nascimento</label>
                            <input type="text" name="nascimento" class="form-control" id="data-nascimento"
                                placeholder="Digite a data de nascimento..." [(ngModel)]="cliente.nascimento" disabled>
                        </div>

                        <div class="col-md-4 mt-2">
                            <label for="rua" class="form-label">Rua</label>
                            <input type="text" name="end_rua" class="form-control" id="rua"
                                placeholder="Digite a rua..." [(ngModel)]="cliente.end_rua" disabled>
                        </div>

                        <div class="col-md-4 mt-2">
                            <label for="numero" class="form-label">Número</label>
                            <input type="text" name="end_numero" class="form-control" id="numero"
                                placeholder="Digite o número..." [(ngModel)]="cliente.end_numero" disabled>
                        </div>

                        <div class="col-md-4 mt-2">
                            <label for="bairro" class="form-label">Bairro</label>
                            <input type="text" name="end_bairro" class="form-control" id="bairro"
                                placeholder="Digite o bairro..." [(ngModel)]="cliente.end_bairro" disabled>
                        </div>
                        <div class="col-md-6 mt-2">
                            <label for="cidade" class="form-label">Cidade</label>
                            <input type="text" name="end_cidade" class="form-control" id="cidade"
                                placeholder="Digite a cidade..." [(ngModel)]="cliente.end_cidade" disabled>
                        </div>

                        <div class="col-md-2 mt-2">
                            <label for="cep" class="form-label">CEP</label>
                            <input type="text" name="end_cep" class="form-control" id="cep"
                                placeholder="Digite o cep..." [(ngModel)]="cliente.end_cep" disabled>
                        </div>

                        <div class="col-md-4 mt-2">
                            <label for="uf" class="form-label">UF</label>
                            <input type="text" name="end_estado" class="form-control" id="uf"
                                placeholder="Digite o UF..." [(ngModel)]="cliente.end_estado" disabled>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    </div>
    <div class="row mt-3">
        <div class="col">
            <div *ngIf="vendas.id_carro != null">
                <div class="card">
                    <div class="card-header">
                        <div class="text-center">
                            <strong>
                                Veículo - Carro
                            </strong>
                        </div>
                    </div>
                    <div class="card-body">
                        <div class="row">
                            <div class="col-md-6">
                                <label for="listaMarca" class="form-label">Marca</label>
                                <input name="marca" class="form-control" list="optionMarca" id="listaMarca"
                                    placeholder="Pesquisar..." [(ngModel)]="carro.marca" disabled>
                            </div>

                            <div class="col-md-6">
                                <label for="nomeModelo" class="form-label">Modelo</label>
                                <input name="modelo" [(ngModel)]="carro.modelo" type="text" class="form-control"
                                    placeholder="Digite o modelo..." disabled>
                            </div>

                            <div class="col-md-3 mt-1">
                                <label for="potenciaMotor">Potencia Motor</label>
                                <input type="text" class="form-control mt-2" name="potencia_motor"
                                    [(ngModel)]="carro.potencia_motor" disabled>
                            </div>

                            <div class="col-md-3 mt-1">
                                <label for="categoria">Categoria</label>
                                <input type="text" class="form-control mt-2" name="categoria"
                                    [(ngModel)]="carro.categoria" disabled>
                            </div>

                            <div class="col-md-3 mt-1">
                                <label for="anoFabricacao" class="form-label">Ano Fabricação</label>
                                <input type="text" class="form-control" name="ano_fabricacao"
                                    [(ngModel)]="carro.ano_fabricacao" placeholder="Digite a fabricação..." disabled>
                            </div>

                            <div class="col-md-3 mt-1">
                                <label for="anoFabricacao" class="form-label">Portas</label>
                                <input type="text" class="form-control" name="portas" [(ngModel)]="carro.portas"
                                    disabled>
                            </div>

                            <div class="col-md-3 mt-1">
                                <label for="cor">Cor</label>
                                <input type="text" class="form-control" name="cor" [(ngModel)]="carro.cor" disabled>
                            </div>

                            <div class="col-md-3 mt-1">
                                <label for="km_atual" class="form-label">Km/atual</label>
                                <input type="text" name="km_atual" [(ngModel)]="carro.km_atual" class="form-control"
                                    placeholder="Digite o km..." disabled>
                            </div>

                            <div class="col-md-3 mt-1">
                                <label for="placa" class="form-label">Placa</label>
                                <input type="text" name="placa" [(ngModel)]="carro.placa" class="form-control"
                                    placeholder="Digite a placa..." disabled>
                            </div>

                            <div class="col-md-3 mt-1">
                                <label for="chassis" class="form-label">Chassis</label>
                                <input type="text" name="chassis" [(ngModel)]="carro.chassis" class="form-control"
                                    placeholder="Digite o chassis..." disabled>
                            </div>

                            <div class="col-md-3 mt-1">
                                <label for="valor_pago" class="form-label">Valor Pago</label>
                                <input type="text" class="form-control" name="valor_pago" [(ngModel)]="carro.valor_pago"
                                    value="R$" placeholder="R$" disabled>
                            </div>

                            <div class="col-md-3 mt-1">
                                <label for="ipva_valor" class="form-label">Valor IPVA</label>
                                <input type="text" class="form-control" name="ipva_valor" [(ngModel)]="carro.ipva_valor"
                                    value="R$" placeholder="R$" disabled>
                            </div>


                            <div class="col-md-3 mt-1">
                                <label for="fipe" class="form-label">Valor FIPE</label>
                                <input type="text" class="form-control" name="fipe" [(ngModel)]="carro.fipe" value="R$"
                                    placeholder="R$" disabled>
                            </div>

                            <div class="col-md-3 mt-1 mb-3">
                                <label for="valor_venda" class="form-label">Valor Venda Final</label>
                                <input type="text" class="form-control" name="valor" [(ngModel)]="carro.valor"
                                    value="R$" placeholder="R$" disabled>
                            </div>

                            <div class="col-md-3 mt-1">
                                <label for="valvulas_Motor">Valvula Motor</label>
                                <input type="text" class="form-control" name="valvulas_motor"
                                    [(ngModel)]="carro.valvulas_motor" disabled>
                            </div>

                            <div class="col-md-3 mt-1">
                                <label for="combustivel">Combustível</label>
                                <input type="text" class="form-control" name="combustivel"
                                    [(ngModel)]="carro.combustivel" disabled>
                            </div>


                            <div class="col-md-3 mt-1">
                                <label for="combustivel">Cambio</label>
                                <input type="text" class="form-control" name="cambio" [(ngModel)]="carro.cambio"
                                    disabled>
                            </div>

                            <div class="col-md-3 mt-1">
                                <label for="combustivel">Porcentagem Desconto</label>
                                <input type="text" class="form-control" name="porcentagem_maxima"
                                    [(ngModel)]="carro.porcentagem_maxima" disabled>
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
                                        [(ngModel)]="carro.ar_condicionado" value="true" id="flexCheckDefault" disabled>
                                    <label class="form-check-label" for="flexCheckDefault">
                                        Ar-condicionado
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input disabled class="form-check-input" type="checkbox" name="ar_quente"
                                        value="true" [(ngModel)]="carro.ar_quente" id="flexCheckChecked">
                                    <label class="form-check-label" for="flexCheckChecked">
                                        Ar-quente
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input disabled class="form-check-input" type="checkbox" name="air_bag_dianteiro"
                                        value="true" [(ngModel)]="carro.air_bag_dianteiro" id="flexCheckChecked">
                                    <label class="form-check-label" for="flexCheckChecked">
                                        Air-bag Dianteiro
                                    </label>
                                </div>
                            </div>

                            <div class="col-md-3 mt-2">
                                <div class="form-check">
                                    <input disabled class="form-check-input" type="checkbox" name="air_bag_traseiro"
                                        value="true" [(ngModel)]="carro.air_bag_traseiro" id="flexCheckChecked">
                                    <label class="form-check-label" for="flexCheckChecked">
                                        Air-bag Traseiro
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input disabled class="form-check-input" type="checkbox"
                                        name="vidro_eletrico_dianteiro" value="true"
                                        [(ngModel)]="carro.vidro_eletrico_dianteiro" id="flexCheckChecked">
                                    <label class="form-check-label" for="flexCheckChecked">
                                        Vidro Elétrico Dianteiro
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input disabled class="form-check-input" type="checkbox"
                                        name="vidro_eletrico_traseiro" value="true"
                                        [(ngModel)]="carro.vidro_eletrico_traseiro" id="flexCheckChecked">
                                    <label class="form-check-label" for="flexCheckChecked">
                                        Vidro Elétrico Traseiro
                                    </label>
                                </div>
                            </div>

                            <div class="col-md-3 mt-2">
                                <div class="form-check">
                                    <input disabled class="form-check-input" type="checkbox" name="multimidea"
                                        value="true" [(ngModel)]="carro.multimidea" id="flexCheckDefault">
                                    <label class="form-check-label" for="flexCheckDefault">
                                        Multimídea
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input disabled class="form-check-input" type="checkbox" name="camera_re"
                                        value="true" [(ngModel)]="carro.camera_re" id="flexCheckDefault">
                                    <label class="form-check-label" for="flexCheckDefault">
                                        Câmera de ré
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input disabled class="form-check-input" type="checkbox" name="alarme" value="true"
                                        [(ngModel)]="carro.alarme" id="flexCheckDefault">
                                    <label class="form-check-label" for="flexCheckDefault">
                                        Alarme
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input disabled class="form-check-input" type="checkbox" name="ipva_pago"
                                        value="true" [(ngModel)]="carro.ipva_pago" id="flexCheckDefault">
                                    <label class="form-check-label" for="flexCheckDefault">
                                        IPVA Pago
                                    </label>
                                </div>
                            </div>

                            <div class="col-md-3 mt-2">
                                <div class="form-check">
                                    <input disabled class="form-check-input" type="checkbox" name="trava_eletrica"
                                        value="true" [(ngModel)]="carro.travas_eletricas" id="flexCheckDefault">
                                    <label class="form-check-label" for="flexCheckDefault">
                                        Trava Elétrica
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input disabled class="form-check-input" type="checkbox" name="computador_bordo"
                                        value="true" [(ngModel)]="carro.computador_bordo" id="flexCheckDefault">
                                    <label class="form-check-label" for="flexCheckDefault">
                                        Computador de Bordo
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input disabled class="form-check-input" type="checkbox" name="regulagem_banco"
                                        value="true" [(ngModel)]="carro.regulagem_banco" id="flexCheckDefault">
                                    <label class="form-check-label" for="flexCheckDefault">
                                        Regulagem Banco
                                    </label>
                                </div>

                                <div class="form-check">
                                    <input disabled class="form-check-input" type="checkbox" name="regulagem_volante"
                                        value="true" [(ngModel)]="carro.regulagem_volante" id="flexCheckDefault">
                                    <label class="form-check-label" for="flexCheckDefault">
                                        Regulagem Volante
                                    </label>
                                </div>
                            </div>

                            <div class="col-12 mt-3">
                                <label for="descricao" class="form-label">Descrição</label>
                                <textarea disabled name="descricao" [(ngModel)]="carro.descricao" class="form-control"
                                    id="" cols="30" rows="10"></textarea>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div *ngIf="vendas.id_moto != null">
                <div class="card">
                    <div class="card-header">
                        <div class="text-center">
                            <strong>Veículo - Moto</strong>
                        </div>
                    </div>
                    <div class="card-body">
                        <form class="row form-floating needs-validation">

                            <div class="col-md-6">
                                <label for="listaMarca" class="form-label">Marca</label>
                                <input name="marca" class="form-control" list="optionMarca" id="listaMarca"
                                    placeholder="Pesquisar..." disabled [(ngModel)]="moto.marca">
                            </div>

                            <div class="col-md-6">
                                <label for="nomeModelo" class="form-label">Modelo</label>
                                <input name="modelo" [(ngModel)]="moto.modelo" type="text" class="form-control"
                                    placeholder="Digite o modelo..." disabled>
                            </div>

                            <div class="col-md-4 mt-1">
                                <label for="potenciaMotor">Potencia Motor</label>
                                <input type="text" class="form-control" name="potencia_motor"
                                    [(ngModel)]="moto.potencia_motor" disabled>
                            </div>


                            <div class="col-md-4 mt-1">
                                <label for="anoFabricacao" class="form-label">Ano Fabricação</label>
                                <input type="text" class="form-control" name="ano_fabricacao"
                                    [(ngModel)]="moto.ano_fabricacao" placeholder="Digite a fabricação..." disabled>
                            </div>

                            <div class="col-md-4 mt-1">
                                <label for="cor">Cor</label>
                                <input type="text" name="cor" class="form-control" [(ngModel)]="moto.cor" disabled>
                            </div>

                            <div class="col-md-3 mt-1">
                                <label for="combustivel">Combustível</label>
                                <input type="text" class="form-control" name="combustivel"
                                    [(ngModel)]="moto.combustivel" disabled>
                            </div>

                            <div class="col-md-3 mt-1">
                                <label for="cambio">Cambio</label>
                                <input type="text" class="form-control" name="cambio" [(ngModel)]="moto.cambio"
                                    disabled>
                            </div>

                            <div class="col-md-3 mt-1">
                                <label for="freio">Freio</label>
                                <input type="text" class="form-control" name="freio" [(ngModel)]="moto.freio" disabled>
                            </div>

                            <div class="col-md-3 mt-1">
                                <label for="km_atual">Km/atual</label>
                                <input type="text" class="form-control mt-2" name="km_atual" [(ngModel)]="moto.km_atual"
                                    placeholder="Digite o KM..." disabled>
                            </div>

                            <div class="col-md-3 mt-1">
                                <label for="placa" class="form-label">Placa</label>
                                <input type="text" name="placa" [(ngModel)]="moto.placa" class="form-control"
                                    placeholder="Digite a placa..." disabled>
                            </div>

                            <div class="col-md-3 mt-1">
                                <label for="chassis" class="form-label">Chassis</label>
                                <input type="text" name="chassis" [(ngModel)]="moto.chassis" class="form-control"
                                    placeholder="Digite o chassis..." disabled>
                            </div>

                            <div class="col-md-3 mt-1">
                                <label for="valor_pago" class="form-label">Valor Pago</label>
                                <input type="text" class="form-control" name="valor_pago" [(ngModel)]="moto.valor_pago"
                                    placeholder="R$" disabled>
                            </div>


                            <div class="col-md-3 mt-1">
                                <label for="ipva_valor" class="form-label">Valor IPVA</label>
                                <input type="text" class="form-control" name="ipva_valor" [(ngModel)]="moto.ipva_valor"
                                    placeholder="R$" disabled>
                            </div>


                            <div class="col-md-4 mt-1">
                                <label for="fipe" class="form-label">Valor FIPE</label>
                                <input type="text" class="form-control" name="fipe" [(ngModel)]="moto.fipe"
                                    placeholder="R$" disabled>
                            </div>

                            <div class="col-md-4 mt-1 mb-3">
                                <label for="valor_venda" class="form-label">Valor Venda Final</label>
                                <input type="text" class="form-control" name="valor" [(ngModel)]="moto.valor"
                                    placeholder="R$" disabled>
                            </div>

                            <div class="col-md-4 mt-1">
                                <label for="combustivel">Porcentagem Desconto</label>
                                <input type="text" class="form-control mt-2" name="porcentagem_maxima" placeholder="%"
                                    [(ngModel)]="moto.porcentagem_maxima" disabled>
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
                                    <input class="form-check-input" type="checkbox" name="freio_abs"
                                        [(ngModel)]="moto.freio_abs" value="true" id="flexCheckDefault" disabled>
                                    <label class="form-check-label" for="flexCheckDefault">
                                        Freio ABS
                                    </label>
                                </div>

                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" name="alarme"
                                        [(ngModel)]="moto.alarme" value="true" id="flexCheckDefault disabled" disabled>
                                    <label class="form-check-label" for="flexCheckDefault">
                                        Alarme
                                    </label>
                                </div>
                            </div>

                            <div class="col-4 mt-2">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" name="injecao_eletronica"
                                        [(ngModel)]="moto.injecao_eletronica" value="true" id="flexCheckDefault"
                                        disabled>
                                    <label class="form-check-label" for="flexCheckDefault">
                                        Injeção eletrônica
                                    </label>
                                </div>

                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" name="carregador_12v"
                                        [(ngModel)]="moto.carregador_12v" value="true" id="flexCheckDefault" disabled>
                                    <label class="form-check-label" for="flexCheckDefault">
                                        Carregador 12V
                                    </label>
                                </div>
                            </div>

                            <div class="col-4 mt-2">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" name="partida_eletrica"
                                        [(ngModel)]="moto.partida_eletrica" value="true" id="flexCheckDefault" disabled>
                                    <label class="form-check-label" for="flexCheckDefault">
                                        Partida elétrica
                                    </label>
                                </div>
                            </div>

                            <div class="col-12 mt-3">
                                <label for="descricao" class="form-label">Descrição</label>
                                <textarea name="descricao" [(ngModel)]="moto.descricao" class="form-control" id=""
                                    cols="30" rows="10" placeholder="Opcional" disabled></textarea>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
  `,
  styleUrls: ['./editar-vendas.component.css']
})
export class EditarVendasComponent implements OnInit {

  constructor(
    private router: Router,
    private vendaService: VendaService,
    private service: ConectService
  ) { }

  vendas: any;
  cliente: any;
  carro: any;
  moto: any;

  ngOnInit(): void {
    this.vendaService.getVendaId(this.service.recuperarIdUrl()).subscribe((venda: any) => {
      console.log(venda)
      this.vendas = venda;
      this.cliente = venda.cliente
      if (venda.id_carro != null) {
        this.carro = venda.carro
      } else if (venda.id_moto != null) {
        this.moto = venda.moto
      }
    });
  }

  atribuirVeiculo(veiculo: any): void {

  }

}
