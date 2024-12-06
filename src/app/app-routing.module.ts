import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormSalasComponent } from './form-salas/form-salas.component';
import { ListCardSalasComponent } from './list-card-salas/list-card-salas.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TabelaSalasComponent } from './tabela-salas/tabela-salas.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'tabela', component: TabelaSalasComponent },
  { path: 'novo', component: FormSalasComponent },
  { path: 'edit/:id', component: FormSalasComponent },
  { path: 'cards', component: ListCardSalasComponent },
  { path: '', component: HomeComponent }, 
  { path: '**', component: PageNotFoundComponent}  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
