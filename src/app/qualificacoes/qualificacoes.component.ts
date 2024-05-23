import { Component } from '@angular/core';

@Component({
  selector: 'app-qualificacoes',
  templateUrl: './qualificacoes.component.html',
  styleUrls: ['./qualificacoes.component.scss']
})
export class QualificacoesComponent {
  buttonStats: boolean = false;

  Active() {
    this.buttonStats = !this.buttonStats;    
  }
}
