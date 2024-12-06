import { Component, Input } from '@angular/core';
import { Sala } from '../sala';
import { SalaApiService } from '../sala-api.service';


@Component({
  selector: 'app-list-card-salas',
  templateUrl: './list-card-salas.component.html',
  styleUrl: './list-card-salas.component.css'
})
export class ListCardSalasComponent {
  listaSalas: Sala[] = [];  

  constructor(private salaApiService: SalaApiService) {
    this.salaApiService.listar().subscribe(
      (salas) => {
        this.listaSalas = salas;
      }
    )
  }
}
