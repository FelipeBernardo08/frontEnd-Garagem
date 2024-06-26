import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { CarroComponent } from './componentes/carro/carro.component';
import { CriarCarroComponent } from './componentes/carro/criar-carro/criar-carro.component';
import { EditarCarroComponent } from './componentes/carro/editar-carro/editar-carro.component';
import { MotoComponent } from './componentes/moto/moto.component';
import { CriarMotoComponent } from './componentes/moto/criar-moto/criar-moto.component';
import { EditarMotoComponent } from './componentes/moto/editar-moto/editar-moto.component';
import { ClientesComponent } from './componentes/clientes/clientes.component';
import { CriarClienteComponent } from './componentes/clientes/criar-cliente/criar-cliente.component';
import { EditarClienteComponent } from './componentes/clientes/editar-cliente/editar-cliente.component';
import { VendasComponent } from './componentes/vendas/vendas.component';
import { CriarVendasComponent } from './componentes/vendas/criar-vendas/criar-vendas.component';
import { DespesasComponent } from './componentes/despesas/despesas.component';
import { CriarDespesasComponent } from './componentes/despesas/criar-despesas/criar-despesas.component';
import { EditarDespesasComponent } from './componentes/despesas/editar-despesas/editar-despesas.component';
import { ContratosComponent } from './componentes/contratos/contratos.component';
import { ContratosCriarComponent } from './componentes/contratos/contratos-criar/contratos-criar.component';
import { ContratosEditarComponent } from './componentes/contratos/contratos-editar/contratos-editar.component';
import { EditarVendasComponent } from './componentes/vendas/editar-vendas/editar-vendas.component';
import { ContratosVincularComponent } from './componentes/contratos/contratos-vincular/contratos-vincular.component';
import { ContratosImprimirComponent } from './componentes/contratos-imprimir/contratos-imprimir.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'carro',
    component: CarroComponent
  },
  {
    path: 'carro/criar',
    component: CriarCarroComponent
  },
  {
    path: 'carro/editar/:id',
    component: EditarCarroComponent
  },
  {
    path: 'moto',
    component: MotoComponent
  },
  {
    path: 'moto/criar',
    component: CriarMotoComponent
  },
  {
    path: 'moto/editar/:id',
    component: EditarMotoComponent
  },
  {
    path: 'cliente',
    component: ClientesComponent
  },
  {
    path: 'cliente/criar',
    component: CriarClienteComponent
  },
  {
    path: 'cliente/editar/:id',
    component: EditarClienteComponent
  },
  {
    path: 'venda',
    component: VendasComponent
  },
  {
    path: 'venda/criar',
    component: CriarVendasComponent
  },
  {
    path: 'venda/visualizar/:id',
    component: EditarVendasComponent
  },
  {
    path: 'despesas',
    component: DespesasComponent
  },
  {
    path: 'despesas/criar',
    component: CriarDespesasComponent
  },
  {
    path: 'despesas/editar',
    component: EditarDespesasComponent
  },
  {
    path: 'contratos',
    component: ContratosComponent
  },
  {
    path: 'contratos/criar',
    component: ContratosCriarComponent
  },
  {
    path: 'contratos/editar',
    component: ContratosEditarComponent
  },
  {
    path: 'contratos/vincular/:id',
    component: ContratosVincularComponent
  },
  {
    path: 'contratos/imprimir/:id',
    component: ContratosImprimirComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
