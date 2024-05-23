import { Component } from '@angular/core';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.scss']
})
export class HabilidadesComponent {
  habilidadesFront = [
    {
      nome: 'HTML',
      level: 'Basico'
    },
    {
      nome: 'CSS',
      level: 'Intermediario'
    },
    {
      nome: 'TypeScript',
      level: 'Intermediario'
    },
    {
      nome: 'Angular',
      level: 'Intermediario'
    },
    {
      nome: 'Bootstrap',
      level: 'Basico'
    },
    {
      nome: 'Git',
      level: 'Basico'
    },
  ]
  habilidadesBack = [
    {
      nome: 'MySql',
      level: 'Intermediario'
    },
    {
      nome: 'Node Js',
      level: 'Basico'
    },
  ]
}
