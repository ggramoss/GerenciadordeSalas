import { Pipe, PipeTransform } from '@angular/core';
import { Sala } from './sala';

@Pipe({
  name: 'filtroPesquisa',
  pure: false
})
export class FiltroPesquisaPipe implements PipeTransform {

  transform(listaSalas: Sala[], nomePesquisado: string): Sala[] {
    if(nomePesquisado.length < 3) { 
      return listaSalas;
    }

    return listaSalas.filter( (sala: Sala) => {
      return sala.nome?.toLowerCase().includes(nomePesquisado.toLowerCase());
    })      
  }

}
