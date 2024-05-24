import { Component } from '@angular/core';
import { Portfolio } from '../time-line';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {
    dados: Portfolio[] = [
      {
        img: 'https://rockcontent.com/br/wp-content/uploads/sites/2/2020/06/site.jpg.webp',
        title: 'teste',
        src: 'teste'
      },
      {
        img: 'https://rockcontent.com/br/wp-content/uploads/sites/2/2020/06/site.jpg.webp',
        title: 'teste',
        src: 'teste'
      },
      {
        img: 'https://rockcontent.com/br/wp-content/uploads/sites/2/2020/06/site.jpg.webp',
        title: 'teste',
        src: 'teste'
      },
    ]
}
