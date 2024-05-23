import { Component } from '@angular/core';
import {
  MatDialog,
} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { DialogServiceComponent } from './dialog-service/dialog-service.component';


@Component({
  selector: 'app-servicos',
  templateUrl: './servicos.component.html',
  styleUrls: ['./servicos.component.scss'],
})
export class ServicosComponent {
  servicos = [
    {
      icon: 'bi bi-tablet',
      title: 'Web Designer',
      conteudo: {
        title: '',
        resumo: '',
        lista: [
          '',
          '',
          '',
          '',
          ''
        ]
      }
    },
    {
      icon: '',
      title: 'UI/UX',
      conteudo: {
        title: '',
        resumo: '',
        lista: [
          '',
          '',
          '',
          '',
          ''
        ]
      }
    },
    {
      icon: '',
      title: 'Branding Designer',
      conteudo: {
        title: '',
        resumo: '',
        lista: [
          '',
          '',
          '',
          '',
          ''
        ]
      }
    },
  ]

    constructor(public dialog:MatDialog){

    }

  openDialog(conteudo:object) {    
    this.dialog.open(DialogServiceComponent, {
      data: {
        dados: conteudo
      },
    });
  }

}
