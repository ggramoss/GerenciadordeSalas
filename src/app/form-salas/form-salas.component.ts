import { Component, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Sala } from '../sala';
import { SalaApiService } from '../sala-api.service';

@Component({
  selector: 'app-form-salas',
  templateUrl: './form-salas.component.html',
  styleUrl: './form-salas.component.css'
})
export class FormSalasComponent {
  sala = new Sala();
  id?:number;
  botaoAcao = "CADASTRAR";
  
  constructor(
    private salaApiService: SalaApiService,
    private router: Router,
    private route: ActivatedRoute
    ) {
      this.id = +this.route.snapshot.params['id'];
      if(this.id) {
        this.botaoAcao = "EDITAR";
        this.salaApiService.buscarPorId(this.id).subscribe(
          (sala) => this.sala = sala
        );
      }
  }

  salvar() {
    if(this.id){
      this.salaApiService.editar(this.id, this.sala).subscribe(
        (sala) => {
          alert(`Sala ${this.sala.nome} editado com sucesso!`);
          this.sala = sala;
        }
      )
    }
    else {
      this.salaApiService.inserir(this.sala).subscribe(
        (sala) => {
          alert(`Sala ${sala.id} cadastrado com sucesso!`)
          this.sala = new Sala();    
        }
      );
    }
  }
  voltar() {
    this.router.navigate(['/tabela']);
  }
}
