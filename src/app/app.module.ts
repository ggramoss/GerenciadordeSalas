import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabelaSalasComponent } from './tabela-salas/tabela-salas.component';
import { FormSalasComponent } from './form-salas/form-salas.component';
import { FormsModule } from '@angular/forms';
import { CardSalaComponent } from './card-sala/card-sala.component';
import { ListCardSalasComponent } from './list-card-salas/list-card-salas.component';

import { FiltroPesquisaPipe } from './filtro-pesquisa.pipe';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { provideHttpClient } from '@angular/common/http';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    TabelaSalasComponent,
    FormSalasComponent,
    CardSalaComponent,
    ListCardSalasComponent,
    FiltroPesquisaPipe,
    PageNotFoundComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
