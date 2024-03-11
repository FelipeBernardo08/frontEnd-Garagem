import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarroComponent } from './componentes/carro/carro.component';
import { HomeComponent } from './componentes/home/home.component';
import { CriarCarroComponent } from './componentes/carro/criar-carro/criar-carro.component';
import { EditarCarroComponent } from './componentes/carro/editar-carro/editar-carro.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NavComponent } from './template/nav/nav.component';
import { FooterComponent } from './template/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MotoComponent } from './componentes/moto/moto.component';
import { EditarMotoComponent } from './componentes/moto/editar-moto/editar-moto.component';
import { CriarMotoComponent } from './componentes/moto/criar-moto/criar-moto.component';
import { ClientesComponent } from './componentes/clientes/clientes.component';
import { CriarClienteComponent } from './componentes/clientes/criar-cliente/criar-cliente.component';
import { EditarClienteComponent } from './componentes/clientes/editar-cliente/editar-cliente.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import { VendasComponent } from './componentes/vendas/vendas.component';
import { CriarVendasComponent } from './componentes/vendas/criar-vendas/criar-vendas.component';
import { EditarVendasComponent } from './componentes/vendas/editar-vendas/editar-vendas.component';
import { DespesasComponent } from './componentes/despesas/despesas.component';
import { CriarDespesasComponent } from './componentes/despesas/criar-despesas/criar-despesas.component';
import { EditarDespesasComponent } from './componentes/despesas/editar-despesas/editar-despesas.component';
import { ContratosComponent } from './componentes/contratos/contratos.component';
import { ContratosCriarComponent } from './componentes/contratos/contratos-criar/contratos-criar.component';
import { ContratosEditarComponent } from './componentes/contratos/contratos-editar/contratos-editar.component';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  declarations: [
    AppComponent,
    CarroComponent,
    HomeComponent,
    CriarCarroComponent,
    EditarCarroComponent,
    NavComponent,
    FooterComponent,
    MotoComponent,
    EditarMotoComponent,
    CriarMotoComponent,
    ClientesComponent,
    CriarClienteComponent,
    EditarClienteComponent,
    VendasComponent,
    CriarVendasComponent,
    EditarVendasComponent,
    DespesasComponent,
    CriarDespesasComponent,
    EditarDespesasComponent,
    ContratosComponent,
    ContratosCriarComponent,
    ContratosEditarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
