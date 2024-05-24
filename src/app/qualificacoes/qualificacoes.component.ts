import { Component } from '@angular/core';
import { TimeLine } from '../time-line';

@Component({
  selector: 'app-qualificacoes',
  templateUrl: './qualificacoes.component.html',
  styleUrls: ['./qualificacoes.component.scss']
})
export class QualificacoesComponent {
  buttonStats: boolean = false;

  Experience:Array<TimeLine> = [
    {
      title: 'Produto Desginer',
      empresa: 'Microsoft',
      data: '2022-2024'
    },
    {
      title: 'Produto Desginer',
      empresa: 'Microsoft',
      data: '2022-2024'
    },
    {
      title: 'Produto Desginer',
      empresa: 'Microsoft',
      data: '2022-2024'
    },
    {
      title: 'Produto Desginer',
      empresa: 'Microsoft',
      data: '2022-2024'
    },
  ]

  Education:Array<TimeLine> = [
    {
      title: 'Informatica',
      empresa: 'uf',
      data: '2022-2024'
    },
    {
      title: 'Informatica',
      empresa: 'uf',
      data: '2022-2024'
    },
  ]

  Active() {
    this.buttonStats = !this.buttonStats;    
  }
}
