import { Component, Input } from '@angular/core';
import { Sala } from '../sala';
import { SalaApiService } from '../sala-api.service';

@Component({
  selector: 'app-tabela-salas',
  templateUrl: './tabela-salas.component.html',
  styleUrl: './tabela-salas.component.css'
})
export class TabelaSalasComponent {
  listaSalas: Sala[] = [];  
  nomePesquisado = "";

  constructor(private salaApiService: SalaApiService) {
    this.listar();
  }

  listar() {
    this.salaApiService.listar().subscribe(
      (salas) => {
        this.listaSalas = salas;
      }
    );
  }

  deletar(id?:number) {
    this.salaApiService.deletar(id!).subscribe(
      (sala) => {
        alert(`Sala deletado com sucesso!`);   
        this.listar();     
      }
    )
  }
}
