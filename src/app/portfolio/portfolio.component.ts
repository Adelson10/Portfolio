import { Component } from '@angular/core';
import { Portfolio } from '../time-line';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {
    type:string = 'Todos';

    dados: Portfolio[] = [
      {
        img: '../../assets/image/portifolio/city.png',
        title: 'City',
        src: 'http://city.adelsonbarros.com/',
        type: 'Front-End'
      },
      {
        img: 'https://rockcontent.com/br/wp-content/uploads/sites/2/2020/06/site.jpg.webp',
        title: 'teste',
        src: 'teste',
        type: 'Back-End'
      },
      {
        img: 'https://rockcontent.com/br/wp-content/uploads/sites/2/2020/06/site.jpg.webp',
        title: 'teste',
        src: 'teste',
        type: 'Back-End'
      },
    ]

    selectionar(event:any) {
      this.type = event.target.id;
    }
}
