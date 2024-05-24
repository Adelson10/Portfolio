import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogServiceComponent } from './dialog-service/dialog-service.component';


@Component({
  selector: 'app-servicos',
  templateUrl: './servicos.component.html',
  styleUrls: ['./servicos.component.scss'],
})
export class ServicosComponent {
  servicos = [
    {
      icon: 'bi bi-window-sidebar',
      title: 'Web Designer',
      conteudo: {
        title: 'Web Designer',
        resumo: 'Oferecendo trabalho de qualidade a clientes e empresas.',
        lista: [
          'Desenvolvimento de páginas web personalizadas para atender às necessidades específicas do seu negócio.',
          'Criação de interações intuitivas e eficazes para elementos de UX (Experiência do Usuário).',
          'Estratégias de posicionamento de marca para destacar sua empresa no mercado.',
          'Design e criação de maquetes de produtos que cativam e impressionam seus clientes.',
        ]
      }
    },
    {
      icon: 'bi bi-code',
      title: 'UI/UX',
      conteudo: {
        title: 'UI/UX',
        resumo: 'Crio experiências únicas para o usuário que os marcam, tudo isso com simplicidade.',
        lista: [
          'Eu me coloco no lugar do usuário para entender o que eles precisam e como se sentem ao usar um produto.',
          'Gosto de pensar de maneira original para resolver problemas de design e tornar as coisas visualmente atraentes.',
          'Consigo explicar minhas ideias de forma clara para que todos possam entender e contribuir para o projeto.',
          'Trabalho bem com outras pessoas, como desenvolvedores e designers, para criar um produto final que seja excelente em todos os aspectos.'
        ]
      }
    },
    {
      icon: 'bi bi-easel',
      title: 'Branding Designer',
      conteudo: {
        title: 'Branding Designer',
        resumo: 'Meu objetivo e sempre criar sites que fiquem marcados ao usuario e agregem a marca fazendo com que nunca seja esquecida oi ',
        lista: [
          'Entendo as necessidades e preferências do público-alvo para criar designs que ressoem com eles.',
          'Estou disposto a ajustar e adaptar meu trabalho de acordo com as necessidades e feedback dos clientes.',
          'Garanto que todos os elementos visuais da marca, desde cores até fontes, sigam um padrão consistente em todos os materiais de marketing.',
          'Posso transmitir a história e os valores de uma marca através de elementos visuais de forma eficaz.',
          'Sou apaixonado por design de marca e estou sempre buscando aprender e melhorar minhas habilidades.'
        ]
      }
    },
  ]

  constructor(public dialog:MatDialog){}

  openDialog(conteudo:object) {    
    this.dialog.open(DialogServiceComponent, {
      data: {
        dados: conteudo
      },
    });
  }

}
